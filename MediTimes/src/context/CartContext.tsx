import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  isLoading: boolean;
}

interface CartContextType extends CartState {
  addToCart: (product: Product, quantity?: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getCartTotal: () => number;
}

type CartAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_CART'; payload: CartItem[] }
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'UPDATE_ITEM'; payload: { productId: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
  isLoading: false,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_CART':
      const totalItems = action.payload.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = action.payload.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      return {
        ...state,
        items: action.payload,
        totalItems,
        totalAmount,
        isLoading: false,
      };
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
      let newItems;
      if (existingItemIndex >= 0) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        newItems = [...state.items, action.payload];
      }
      return {
        ...state,
        items: newItems,
        totalItems: state.totalItems + action.payload.quantity,
        totalAmount: state.totalAmount + (action.payload.product.price * action.payload.quantity),
      };
    case 'UPDATE_ITEM':
      const updatedItems = state.items.map(item => 
        item.productId === action.payload.productId 
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const newTotalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const newTotalAmount = updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      return {
        ...state,
        items: updatedItems,
        totalItems: newTotalItems,
        totalAmount: newTotalAmount,
      };
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.productId !== action.payload);
      const removedItem = state.items.find(item => item.productId === action.payload);
      return {
        ...state,
        items: filteredItems,
        totalItems: state.totalItems - (removedItem?.quantity || 0),
        totalAmount: state.totalAmount - ((removedItem?.product.price || 0) * (removedItem?.quantity || 0)),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalAmount: 0,
      };
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user) {
      loadCart();
    } else {
      dispatch({ type: 'CLEAR_CART' });
    }
  }, [isAuthenticated, user]);

  const loadCart = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      // Mock cart loading - in real app, this would fetch from API
      const mockCartItems: CartItem[] = [];
      dispatch({ type: 'SET_CART', payload: mockCartItems });
    } catch (error) {
      console.error('Failed to load cart:', error);
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const addToCart = async (product: Product, quantity = 1) => {
    try {
      if (!isAuthenticated) {
        toast.error('Please login to add items to cart');
        return;
      }

      const cartItem: CartItem = {
        id: Date.now().toString(),
        productId: product.id,
        product,
        quantity,
        prescriptionUploaded: false,
      };

      // Mock API call - in real app, this would call the backend
      await new Promise(resolve => setTimeout(resolve, 500));
      
      dispatch({ type: 'ADD_ITEM', payload: cartItem });
      toast.success(`${product.name} added to cart`);
    } catch (error: any) {
      toast.error('Failed to add to cart');
    }
  };

  const removeFromCart = async (productId: string) => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      dispatch({ type: 'REMOVE_ITEM', payload: productId });
      toast.success('Item removed from cart');
    } catch (error: any) {
      toast.error('Failed to remove from cart');
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    try {
      if (quantity <= 0) {
        await removeFromCart(productId);
        return;
      }

      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      dispatch({ type: 'UPDATE_ITEM', payload: { productId, quantity } });
    } catch (error: any) {
      toast.error('Failed to update quantity');
    }
  };

  const clearCart = async () => {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      dispatch({ type: 'CLEAR_CART' });
    } catch (error: any) {
      toast.error('Failed to clear cart');
    }
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const value: CartContextType = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
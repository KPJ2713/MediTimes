import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../types';
import toast from 'react-hot-toast';

interface WishlistState {
  items: Product[];
}

interface WishlistContextType extends WishlistState {
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

type WishlistAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_WISHLIST' };

const initialState: WishlistState = {
  items: [],
};

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_WISHLIST':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success(`${product.name} added to wishlist`);
  };

  const removeFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
    toast.success('Item removed from wishlist');
  };

  const isInWishlist = (productId: string) => {
    return state.items.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const value: WishlistContextType = {
    ...state,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Upload, FileText } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Cart: React.FC = () => {
  const { items, totalItems, totalAmount, updateQuantity, removeFromCart, isLoading } = useCart();
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const deliveryCharges = totalAmount > 500 ? 0 : 50;
  const discount = appliedCoupon ? Math.min(totalAmount * 0.1, 100) : 0;
  const finalAmount = totalAmount + deliveryCharges - discount;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'welcome10') {
      setAppliedCoupon(couponCode);
      setCouponCode('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to login to view your cart</p>
          <Link
            to="/login"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link
              to="/products"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart ({totalItems} items)</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {items.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{item.product.brand}</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xl font-bold text-gray-800">
                          ₹{item.product.price}
                        </span>
                        {item.product.mrp > item.product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{item.product.mrp}
                          </span>
                        )}
                      </div>
                      
                      {item.product.isPrescriptionRequired && !item.prescriptionUploaded && (
                        <div className="bg-warning-50 border border-warning-200 rounded-lg p-3 mb-3">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-warning-600" />
                            <span className="text-sm text-warning-800">Prescription Required</span>
                          </div>
                          <button className="mt-2 flex items-center space-x-2 text-sm text-primary-600 hover:text-primary-700">
                            <Upload className="w-4 h-4" />
                            <span>Upload Prescription</span>
                          </button>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="text-error-600 hover:text-error-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              {/* Coupon Code */}
              <div className="mb-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <p className="text-sm text-success-600 mt-2">
                    Coupon "{appliedCoupon}" applied successfully!
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className={deliveryCharges === 0 ? 'text-success-600' : ''}>
                    {deliveryCharges === 0 ? 'FREE' : `₹${deliveryCharges}`}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-success-600">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Amount</span>
                    <span>₹{finalAmount}</span>
                  </div>
                </div>
              </div>

              {deliveryCharges > 0 && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-primary-800">
                    Add ₹{500 - totalAmount} more to get FREE delivery!
                  </p>
                </div>
              )}

              <Link
                to="/checkout"
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center font-medium"
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <div className="mt-4 text-center">
                <Link
                  to="/products"
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
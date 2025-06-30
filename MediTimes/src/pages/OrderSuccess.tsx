import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  const location = useLocation();
  const { orderNumber, amount, items } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-success-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. We'll send you a confirmation email shortly.
        </p>

        {orderNumber && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Order Number</span>
              <span className="font-semibold text-gray-800">{orderNumber}</span>
            </div>
            {amount && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Amount</span>
                <span className="font-semibold text-gray-800">₹{amount}</span>
              </div>
            )}
            {items && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Items</span>
                <span className="font-semibold text-gray-800">{items} items</span>
              </div>
            )}
          </div>
        )}

        <div className="space-y-3">
          <Link
            to="/orders"
            className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center font-medium"
          >
            <Package className="w-5 h-5 mr-2" />
            Track Your Order
          </Link>
          
          <Link
            to="/"
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center font-medium"
          >
            <Home className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
          <p className="text-sm text-primary-800">
            📧 Order confirmation sent to your email
          </p>
          <p className="text-sm text-primary-800 mt-1">
            🚚 Expected delivery in 2-3 business days
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
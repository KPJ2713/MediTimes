import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, Upload, FileText, Truck, Shield, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Address } from '../types';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [prescriptions, setPrescriptions] = useState<{ [key: string]: File | null }>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const mockAddresses: Address[] = [
    {
      id: '1',
      name: 'Home',
      phone: '9876543210',
      addressLine1: '123 Main Street',
      addressLine2: 'Near City Mall',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true,
    },
    {
      id: '2',
      name: 'Office',
      phone: '9876543210',
      addressLine1: '456 Business Park',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400002',
      isDefault: false,
    },
  ];

  const deliveryCharges = totalAmount > 500 ? 0 : 50;
  const discount = appliedCoupon === 'SAVE50' ? 50 : 0;
  const finalAmount = totalAmount + deliveryCharges - discount;

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'save50') {
      setAppliedCoupon('SAVE50');
      setCouponCode('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const handlePrescriptionUpload = (productId: string, file: File) => {
    setPrescriptions(prev => ({ ...prev, [productId]: file }));
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      alert('Please select a delivery address');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    // Check if all prescription required items have prescriptions
    const prescriptionItems = items.filter(item => item.product.isPrescriptionRequired);
    const missingPrescriptions = prescriptionItems.filter(item => !prescriptions[item.productId]);
    
    if (missingPrescriptions.length > 0) {
      alert('Please upload prescriptions for all required items');
      return;
    }

    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and navigate to success page
    await clearCart();
    navigate('/order-success', { 
      state: { 
        orderNumber: 'MT' + Date.now(),
        amount: finalAmount,
        items: items.length
      }
    });
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Delivery Address
              </h2>
              <div className="space-y-3">
                {mockAddresses.map((address) => (
                  <label key={address.id} className="flex items-start space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedAddress === address.id}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium">{address.name}</span>
                        {address.isDefault && (
                          <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {address.addressLine1}
                        {address.addressLine2 && `, ${address.addressLine2}`}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {address.city}, {address.state} - {address.pincode}
                      </p>
                      <p className="text-gray-600 text-sm">Phone: {address.phone}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Prescription Upload */}
            {items.some(item => item.product.isPrescriptionRequired) && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Upload Prescriptions
                </h2>
                <div className="space-y-4">
                  {items
                    .filter(item => item.product.isPrescriptionRequired)
                    .map((item) => (
                      <div key={item.id} className="border border-warning-200 rounded-lg p-4 bg-warning-50">
                        <div className="flex items-start space-x-3">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                            <p className="text-sm text-gray-600">{item.product.brand}</p>
                            <div className="mt-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Prescription *
                              </label>
                              <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handlePrescriptionUpload(item.productId, file);
                                  }
                                }}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                              />
                              {prescriptions[item.productId] && (
                                <p className="text-sm text-success-600 mt-1">
                                  ✓ {prescriptions[item.productId]?.name} uploaded
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Payment Method
              </h2>
              <div className="space-y-3">
                {[
                  { id: 'upi', label: 'UPI Payment', icon: '📱' },
                  { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                  { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                  { id: 'wallet', label: 'Digital Wallet', icon: '💰' },
                  { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                ].map((method) => (
                  <label key={method.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="text-xl">{method.icon}</span>
                    <span className="font-medium">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 text-sm">{item.product.name}</h3>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-medium">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Coupon Code */}
              <div className="mb-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <p className="text-sm text-success-600 mt-2">
                    Coupon "{appliedCoupon}" applied! Save ₹{discount}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Use code "SAVE50" for ₹50 off
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal ({items.length} items)</span>
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
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span>₹{finalAmount}</span>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center space-x-2 mb-4 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-success-600" />
                <span>100% Secure Payment</span>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    Place Order
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>

              {/* Delivery Info */}
              <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-primary-800">
                  <Truck className="w-4 h-4" />
                  <span>Expected delivery in 2-3 business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
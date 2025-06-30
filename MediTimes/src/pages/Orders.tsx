import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, MapPin, Phone, Star, Download, X, Calendar, Video, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import toast from 'react-hot-toast';

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  type: 'product' | 'consultation';
  items?: {
    id: string;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  consultation?: {
    doctorName: string;
    specialization: string;
    scheduledTime: string;
    consultationType: 'video' | 'phone' | 'chat';
    consultationId: string;
  };
  total: number;
  deliveryAddress?: {
    name: string;
    address: string;
    phone: string;
  };
  trackingNumber?: string;
  expectedDelivery?: string;
  canCancel: boolean;
  canReview: boolean;
}

const Orders: React.FC = () => {
  const { t } = useLanguage();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showRatingModal, setShowRatingModal] = useState<{ orderId: string; productId?: string } | null>(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const mockOrders: Order[] = [
    {
      id: '1',
      orderNumber: 'MT2024001',
      date: '2024-01-15',
      status: 'delivered',
      type: 'product',
      items: [
        {
          id: '1',
          name: 'Dolo 650 Tablet',
          brand: 'Micro Labs',
          quantity: 2,
          price: 32,
          image: 'https://images.pexels.com/photos/3683093/pexels-photo-3683093.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          id: '2',
          name: 'Vitamin D3 60K IU',
          brand: 'Mankind',
          quantity: 1,
          price: 125,
          image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
      total: 189,
      deliveryAddress: {
        name: 'John Doe',
        address: '123 Main Street, Mumbai, Maharashtra - 400001',
        phone: '+91 9876543210',
      },
      trackingNumber: 'TRK123456789',
      canCancel: false,
      canReview: true,
    },
    {
      id: '2',
      orderNumber: 'MT2024002',
      date: '2024-01-20',
      status: 'shipped',
      type: 'product',
      items: [
        {
          id: '3',
          name: 'Digital Thermometer',
          brand: 'Omron',
          quantity: 1,
          price: 245,
          image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
      total: 245,
      deliveryAddress: {
        name: 'John Doe',
        address: '123 Main Street, Mumbai, Maharashtra - 400001',
        phone: '+91 9876543210',
      },
      trackingNumber: 'TRK987654321',
      expectedDelivery: '2024-01-22',
      canCancel: true,
      canReview: false,
    },
    {
      id: '3',
      orderNumber: 'CONS2024001',
      date: '2024-01-18',
      status: 'confirmed',
      type: 'consultation',
      consultation: {
        doctorName: 'Dr. Priya Sharma',
        specialization: 'General Physician',
        scheduledTime: '2024-01-25 at 10:00 AM',
        consultationType: 'video',
        consultationId: 'CONS1737890123',
      },
      total: 500,
      canCancel: true,
      canReview: false,
    },
    {
      id: '4',
      orderNumber: 'CONS2024002',
      date: '2024-01-10',
      status: 'delivered',
      type: 'consultation',
      consultation: {
        doctorName: 'Dr. Rajesh Kumar',
        specialization: 'Cardiologist',
        scheduledTime: '2024-01-12 at 3:00 PM',
        consultationType: 'video',
        consultationId: 'CONS1737123456',
      },
      total: 800,
      canCancel: false,
      canReview: true,
    },
  ];

  const [orders, setOrders] = useState(mockOrders);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-warning-500" />;
      case 'confirmed':
        return <CheckCircle className="w-5 h-5 text-primary-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-primary-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-success-500" />;
      case 'cancelled':
        return <X className="w-5 h-5 text-error-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-warning-100 text-warning-600';
      case 'confirmed':
        return 'bg-primary-100 text-primary-600';
      case 'shipped':
        return 'bg-primary-100 text-primary-600';
      case 'delivered':
        return 'bg-success-100 text-success-600';
      case 'cancelled':
        return 'bg-error-100 text-error-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getConsultationIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'phone':
        return <Phone className="w-4 h-4" />;
      case 'chat':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <Video className="w-4 h-4" />;
    }
  };

  const handleCancelOrder = (orderId: string) => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      setOrders(prev => 
        prev.map(order => 
          order.id === orderId 
            ? { ...order, status: 'cancelled' as const, canCancel: false }
            : order
        )
      );
      toast.success('Order cancelled successfully');
    }
  };

  const handleDownloadInvoice = (orderNumber: string) => {
    // Simulate invoice download
    toast.success(`Invoice for order ${orderNumber} downloaded`);
  };

  const handleRateAndReview = (orderId: string, productId?: string) => {
    setShowRatingModal({ orderId, productId });
    setRating(0);
    setReview('');
  };

  const submitRating = () => {
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }
    
    toast.success('Thank you for your review!');
    setShowRatingModal(null);
    setRating(0);
    setReview('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {order.type === 'consultation' ? 'Consultation' : 'Order'} #{order.orderNumber}
                    </h3>
                    <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-gray-800">₹{order.total}</span>
                  </div>
                </div>

                {order.trackingNumber && (
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-primary-800">
                          <strong>Tracking Number:</strong> {order.trackingNumber}
                        </p>
                        {order.expectedDelivery && (
                          <p className="text-sm text-primary-600">
                            Expected delivery: {new Date(order.expectedDelivery).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Track Order
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {order.type === 'product' && order.items && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Items ({order.items.length})</h4>
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">{item.name}</p>
                              <p className="text-sm text-gray-600">{item.brand}</p>
                              <p className="text-sm text-gray-600">Qty: {item.quantity} × ₹{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {order.type === 'consultation' && order.consultation && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Consultation Details</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Doctor:</span>
                          <span className="text-sm font-medium text-gray-800">{order.consultation.doctorName}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Specialization:</span>
                          <span className="text-sm text-gray-800">{order.consultation.specialization}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Scheduled:</span>
                          <span className="text-sm text-gray-800">{order.consultation.scheduledTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Type:</span>
                          <div className="flex items-center space-x-1">
                            {getConsultationIcon(order.consultation.consultationType)}
                            <span className="text-sm text-gray-800 capitalize">{order.consultation.consultationType}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">ID:</span>
                          <span className="text-sm text-gray-800">{order.consultation.consultationId}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {order.deliveryAddress && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Delivery Address</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{order.deliveryAddress.name}</span>
                        </div>
                        <p className="ml-6">{order.deliveryAddress.address}</p>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{order.deliveryAddress.phone}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setSelectedOrder(order)}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View Details
                  </button>
                  {order.status === 'delivered' && (
                    <button 
                      onClick={() => handleDownloadInvoice(order.orderNumber)}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Download Invoice
                    </button>
                  )}
                  {order.canReview && (
                    <button 
                      onClick={() => handleRateAndReview(order.id)}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
                    >
                      <Star className="w-4 h-4 mr-1" />
                      Rate & Review
                    </button>
                  )}
                </div>
                <div className="flex space-x-2">
                  {order.canCancel && (
                    <button 
                      onClick={() => handleCancelOrder(order.id)}
                      className="px-4 py-2 border border-error-300 text-error-600 rounded-lg hover:bg-error-50 text-sm"
                    >
                      Cancel Order
                    </button>
                  )}
                  {order.status === 'delivered' && (
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-16">
            <Package className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Orders Yet</h2>
            <p className="text-gray-600 mb-8">You haven't placed any orders yet. Start shopping to see your orders here.</p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Start Shopping
            </button>
          </div>
        )}

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    {selectedOrder.type === 'consultation' ? 'Consultation' : 'Order'} Details
                  </h2>
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm text-gray-600">Order Number:</span>
                    <p className="font-medium">{selectedOrder.orderNumber}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Date:</span>
                    <p className="font-medium">{new Date(selectedOrder.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Status:</span>
                    <p className="font-medium capitalize">{selectedOrder.status}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Total:</span>
                    <p className="font-medium">₹{selectedOrder.total}</p>
                  </div>
                </div>

                {selectedOrder.type === 'product' && selectedOrder.items && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Items</h3>
                    <div className="space-y-3">
                      {selectedOrder.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.brand}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            <p className="text-sm font-medium">₹{item.price} each</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedOrder.type === 'consultation' && selectedOrder.consultation && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Consultation Information</h3>
                    <div className="p-4 border rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Doctor:</span>
                        <span className="font-medium">{selectedOrder.consultation.doctorName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Specialization:</span>
                        <span>{selectedOrder.consultation.specialization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Scheduled Time:</span>
                        <span>{selectedOrder.consultation.scheduledTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="capitalize">{selectedOrder.consultation.consultationType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Consultation ID:</span>
                        <span className="font-mono text-sm">{selectedOrder.consultation.consultationId}</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedOrder.deliveryAddress && (
                  <div>
                    <h3 className="font-medium mb-3">Delivery Address</h3>
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">{selectedOrder.deliveryAddress.name}</p>
                      <p className="text-gray-600">{selectedOrder.deliveryAddress.address}</p>
                      <p className="text-gray-600">{selectedOrder.deliveryAddress.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Rating Modal */}
        {showRatingModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h2 className="text-xl font-semibold mb-4">Rate & Review</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`w-8 h-8 ${
                        star <= rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    >
                      <Star className="w-full h-full fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Review (Optional)</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Share your experience..."
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowRatingModal(null)}
                  className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={submitRating}
                  className="flex-1 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
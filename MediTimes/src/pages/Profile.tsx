import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Edit, Save, X, Plus, CreditCard, Gift, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Address } from '../types';

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
  });

  const handleSave = async () => {
    try {
      await updateUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      phone: user?.phone || '',
      email: user?.email || '',
    });
    setIsEditing(false);
  };

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

  const mockOrders = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 450,
      items: 3,
    },
    {
      id: 'ORD002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 280,
      items: 2,
    },
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'orders', label: 'Orders', icon: CreditCard },
    { id: 'loyalty', label: 'Loyalty Points', icon: Gift },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-primary-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
                <p className="text-gray-600">{user?.membershipTier} Member</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{user?.loyaltyPoints} Points</span>
                </div>
              </div>
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-100 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'profile' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Profile Information</h1>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                      >
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSave}
                          className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
                        >
                          <X className="w-4 h-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      ) : (
                        <p className="text-gray-800">{user?.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <p className="text-gray-800 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-500" />
                        {user?.email}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      ) : (
                        <p className="text-gray-800 flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-500" />
                          {user?.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Membership Tier
                      </label>
                      <p className="text-gray-800">{user?.membershipTier}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Saved Addresses</h1>
                    <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
                      <Plus className="w-4 h-4" />
                      <span>Add Address</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockAddresses.map((address) => (
                      <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800">{address.name}</h3>
                          {address.isDefault && (
                            <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">
                          {address.addressLine1}
                          {address.addressLine2 && `, ${address.addressLine2}`}
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                          {address.city}, {address.state} - {address.pincode}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">Phone: {address.phone}</p>
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-700 text-sm">
                            Edit
                          </button>
                          <button className="text-error-600 hover:text-error-700 text-sm">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-6">Order History</h1>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800">Order #{order.id}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            order.status === 'Delivered' 
                              ? 'bg-success-100 text-success-600'
                              : 'bg-primary-100 text-primary-600'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="block font-medium">Date</span>
                            <span>{order.date}</span>
                          </div>
                          <div>
                            <span className="block font-medium">Items</span>
                            <span>{order.items} items</span>
                          </div>
                          <div>
                            <span className="block font-medium">Total</span>
                            <span>₹{order.total}</span>
                          </div>
                          <div>
                            <button className="text-primary-600 hover:text-primary-700">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'loyalty' && (
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-6">Loyalty Program</h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Current Points</h3>
                      <p className="text-3xl font-bold">{user?.loyaltyPoints}</p>
                    </div>
                    <div className="bg-gradient-to-r from-success-500 to-success-600 text-white p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Membership Tier</h3>
                      <p className="text-2xl font-bold">{user?.membershipTier}</p>
                    </div>
                    <div className="bg-gradient-to-r from-warning-500 to-warning-600 text-white p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Next Tier</h3>
                      <p className="text-2xl font-bold">Platinum</p>
                      <p className="text-sm opacity-90">350 points to go</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">How to Earn Points</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Earn 1 point for every ₹10 spent</li>
                      <li>• Get 50 bonus points on your birthday</li>
                      <li>• Refer friends and earn 100 points</li>
                      <li>• Write product reviews and earn 10 points</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from 'react';
import { 
  Calendar, 
  Package, 
  Edit, 
  Pause, 
  Play, 
  Trash2, 
  Plus, 
  Crown, 
  Gift, 
  Truck, 
  Percent, 
  Star,
  Award,
  Zap,
  Shield,
  CreditCard,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

interface Subscription {
  id: string;
  product: {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
  };
  quantity: number;
  frequency: 'weekly' | 'monthly' | 'quarterly';
  nextDelivery: string;
  isActive: boolean;
  startDate: string;
}

interface MembershipTier {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  pointsRequired: number;
  monthlyPrice: number;
  benefits: {
    discount: number;
    delivery: string;
    freeProducts: string[];
    specialOffers: string;
    support: string;
  };
}

const Subscriptions: React.FC = () => {
  const { t } = useLanguage();
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState<'subscriptions' | 'loyalty'>('subscriptions');
  const [showUpgradeModal, setShowUpgradeModal] = useState<MembershipTier | null>(null);
  const [isProcessingUpgrade, setIsProcessingUpgrade] = useState(false);
  
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: '1',
      product: {
        id: '1',
        name: 'Dolo 650 Tablet',
        brand: 'Micro Labs',
        image: 'https://images.pexels.com/photos/3683093/pexels-photo-3683093.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 32,
      },
      quantity: 2,
      frequency: 'monthly',
      nextDelivery: '2024-02-15',
      isActive: true,
      startDate: '2024-01-15',
    },
    {
      id: '2',
      product: {
        id: '12',
        name: 'Vitamin D3 60K IU',
        brand: 'Mankind',
        image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 125,
      },
      quantity: 1,
      frequency: 'monthly',
      nextDelivery: '2024-02-20',
      isActive: true,
      startDate: '2024-01-20',
    },
    {
      id: '3',
      product: {
        id: '10',
        name: 'Metformin 500mg',
        brand: 'Sun Pharma',
        image: 'https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 45,
      },
      quantity: 3,
      frequency: 'monthly',
      nextDelivery: '2024-02-10',
      isActive: false,
      startDate: '2023-12-10',
    },
  ]);

  const membershipTiers: MembershipTier[] = [
    {
      name: 'Silver',
      icon: Shield,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100',
      pointsRequired: 0,
      monthlyPrice: 0,
      benefits: {
        discount: 5,
        delivery: 'Standard delivery (2-3 days)',
        freeProducts: ['Monthly health newsletter', 'Basic health tips'],
        specialOffers: 'Seasonal discounts',
        support: 'Email support'
      }
    },
    {
      name: 'Gold',
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      pointsRequired: 500,
      monthlyPrice: 199,
      benefits: {
        discount: 10,
        delivery: 'Express delivery (1-2 days)',
        freeProducts: ['Monthly vitamin sample', 'Health consultation (1/month)', 'Premium health reports'],
        specialOffers: 'Exclusive member-only deals',
        support: 'Priority phone support'
      }
    },
    {
      name: 'Platinum',
      icon: Crown,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      pointsRequired: 1000,
      monthlyPrice: 399,
      benefits: {
        discount: 15,
        delivery: 'Same-day delivery in metros',
        freeProducts: ['Monthly medicine kit', 'Free health checkup (quarterly)', 'Personal health manager', 'Premium supplements'],
        specialOffers: 'VIP early access to new products',
        support: '24/7 dedicated support'
      }
    }
  ];

  const getCurrentTier = () => {
    const points = user?.loyaltyPoints || 0;
    if (points >= 1000) return membershipTiers[2];
    if (points >= 500) return membershipTiers[1];
    return membershipTiers[0];
  };

  const getNextTier = () => {
    const currentTier = getCurrentTier();
    const currentIndex = membershipTiers.findIndex(tier => tier.name === currentTier.name);
    return currentIndex < membershipTiers.length - 1 ? membershipTiers[currentIndex + 1] : null;
  };

  const getProgressToNextTier = () => {
    const points = user?.loyaltyPoints || 0;
    const nextTier = getNextTier();
    if (!nextTier) return 100;
    
    const currentTier = getCurrentTier();
    const progress = ((points - currentTier.pointsRequired) / (nextTier.pointsRequired - currentTier.pointsRequired)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  const handleUpgradeTier = async (tier: MembershipTier) => {
    setIsProcessingUpgrade(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update user tier
      await updateUser({ 
        membershipTier: tier.name as any,
        loyaltyPoints: Math.max(user?.loyaltyPoints || 0, tier.pointsRequired)
      });
      
      setShowUpgradeModal(null);
      toast.success(`Successfully upgraded to ${tier.name} membership!`);
    } catch (error) {
      toast.error('Upgrade failed. Please try again.');
    } finally {
      setIsProcessingUpgrade(false);
    }
  };

  const toggleSubscription = (id: string) => {
    setSubscriptions(prev =>
      prev.map(sub =>
        sub.id === id ? { ...sub, isActive: !sub.isActive } : sub
      )
    );
  };

  const deleteSubscription = (id: string) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
  };

  const getFrequencyLabel = (frequency: string) => {
    switch (frequency) {
      case 'weekly':
        return 'Every Week';
      case 'monthly':
        return 'Every Month';
      case 'quarterly':
        return 'Every 3 Months';
      default:
        return frequency;
    }
  };

  const activeSubscriptions = subscriptions.filter(sub => sub.isActive);
  const pausedSubscriptions = subscriptions.filter(sub => !sub.isActive);
  const currentTier = getCurrentTier();
  const nextTier = getNextTier();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Tabs */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Subscriptions & Loyalty</h1>
          <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('subscriptions')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'subscriptions'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              My Subscriptions
            </button>
            <button
              onClick={() => setActiveTab('loyalty')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'loyalty'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Membership Plans
            </button>
          </div>
        </div>

        {activeTab === 'subscriptions' && (
          <>
            {/* Subscription Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Active Subscriptions</p>
                    <p className="text-2xl font-bold text-primary-600">{activeSubscriptions.length}</p>
                  </div>
                  <Package className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Monthly Savings</p>
                    <p className="text-2xl font-bold text-success-600">₹{Math.round(activeSubscriptions.reduce((total, sub) => total + (sub.product.price * sub.quantity * currentTier.benefits.discount / 100), 0))}</p>
                  </div>
                  <Percent className="w-8 h-8 text-success-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Next Delivery</p>
                    <p className="text-2xl font-bold text-warning-600">
                      {activeSubscriptions.length > 0 
                        ? new Date(Math.min(...activeSubscriptions.map(sub => new Date(sub.nextDelivery).getTime()))).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                        : 'None'
                      }
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-warning-600" />
                </div>
              </div>
            </div>

            {/* Add Subscription Button */}
            <div className="flex justify-end mb-6">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Add Subscription
              </button>
            </div>

            {/* Active Subscriptions */}
            {activeSubscriptions.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Active Subscriptions ({activeSubscriptions.length})
                </h2>
                <div className="space-y-4">
                  {activeSubscriptions.map((subscription) => (
                    <div key={subscription.id} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <img
                            src={subscription.product.image}
                            alt={subscription.product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {subscription.product.name}
                            </h3>
                            <p className="text-gray-600">{subscription.product.brand}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <span>Quantity: {subscription.quantity}</span>
                              <span>•</span>
                              <span>{getFrequencyLabel(subscription.frequency)}</span>
                              <span>•</span>
                              <span>₹{subscription.product.price * subscription.quantity}/delivery</span>
                            </div>
                            <div className="mt-2 flex items-center space-x-2">
                              <span className="bg-success-100 text-success-600 px-2 py-1 rounded text-xs font-medium">
                                {currentTier.benefits.discount}% Member Discount Applied
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => toggleSubscription(subscription.id)}
                            className="p-2 text-warning-600 hover:bg-warning-50 rounded-lg transition-colors"
                            title="Pause subscription"
                          >
                            <Pause className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => deleteSubscription(subscription.id)}
                            className="p-2 text-error-600 hover:bg-error-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm">
                            <div>
                              <span className="text-gray-600">Next Delivery:</span>
                              <span className="ml-2 font-medium text-gray-800">
                                {new Date(subscription.nextDelivery).toLocaleDateString()}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-600">Started:</span>
                              <span className="ml-2 font-medium text-gray-800">
                                {new Date(subscription.startDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="bg-success-100 text-success-600 px-3 py-1 rounded-full text-sm font-medium">
                              Active
                            </span>
                            <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                              {currentTier.benefits.delivery}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Paused Subscriptions */}
            {pausedSubscriptions.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Paused Subscriptions ({pausedSubscriptions.length})
                </h2>
                <div className="space-y-4">
                  {pausedSubscriptions.map((subscription) => (
                    <div key={subscription.id} className="bg-white rounded-lg shadow-md p-6 opacity-75">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <img
                            src={subscription.product.image}
                            alt={subscription.product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {subscription.product.name}
                            </h3>
                            <p className="text-gray-600">{subscription.product.brand}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <span>Quantity: {subscription.quantity}</span>
                              <span>•</span>
                              <span>{getFrequencyLabel(subscription.frequency)}</span>
                              <span>•</span>
                              <span>₹{subscription.product.price * subscription.quantity}/delivery</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => toggleSubscription(subscription.id)}
                            className="p-2 text-success-600 hover:bg-success-50 rounded-lg transition-colors"
                            title="Resume subscription"
                          >
                            <Play className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => deleteSubscription(subscription.id)}
                            className="p-2 text-error-600 hover:bg-error-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <span>Started:</span>
                            <span className="ml-2 font-medium text-gray-800">
                              {new Date(subscription.startDate).toLocaleDateString()}
                            </span>
                          </div>
                          <span className="bg-warning-100 text-warning-600 px-3 py-1 rounded-full text-sm font-medium">
                            Paused
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {subscriptions.length === 0 && (
              <div className="text-center py-16">
                <Package className="w-24 h-24 text-gray-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">No Subscriptions Yet</h2>
                <p className="text-gray-600 mb-8">
                  Set up automatic deliveries for your regular medications and never run out again.
                </p>
                <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Browse Products
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === 'loyalty' && (
          <>
            {/* Current Status */}
            <div className="bg-gradient-to-r from-primary-600 to-medical-600 text-white rounded-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${currentTier.bgColor} rounded-full flex items-center justify-center`}>
                    <currentTier.icon className={`w-8 h-8 ${currentTier.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{currentTier.name} Member</h2>
                    <p className="text-primary-100">You're enjoying {currentTier.name} benefits</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">{user?.loyaltyPoints || 0}</p>
                  <p className="text-primary-100">Loyalty Points</p>
                </div>
              </div>

              {nextTier && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary-100">Progress to {nextTier.name}</span>
                    <span className="text-primary-100">
                      {nextTier.pointsRequired - (user?.loyaltyPoints || 0)} points to go
                    </span>
                  </div>
                  <div className="w-full bg-primary-500 rounded-full h-3">
                    <div 
                      className="bg-white h-3 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressToNextTier()}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Membership Tiers */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Membership Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {membershipTiers.map((tier, index) => {
                  const isCurrentTier = tier.name === currentTier.name;
                  const isUpgrade = tier.pointsRequired > (user?.loyaltyPoints || 0);
                  
                  return (
                    <div 
                      key={tier.name}
                      className={`bg-white rounded-lg shadow-md p-6 border-2 transition-all relative ${
                        isCurrentTier 
                          ? 'border-primary-500 ring-2 ring-primary-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      } ${tier.name === 'Gold' ? 'transform scale-105' : ''}`}
                    >
                      {tier.name === 'Gold' && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-warning-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <tier.icon className={`w-8 h-8 ${tier.color}`} />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800">{tier.name}</h4>
                        <div className="mt-2">
                          {tier.monthlyPrice === 0 ? (
                            <p className="text-2xl font-bold text-gray-800">Free</p>
                          ) : (
                            <div>
                              <p className="text-3xl font-bold text-gray-800">₹{tier.monthlyPrice}</p>
                              <p className="text-gray-600">/month</p>
                            </div>
                          )}
                        </div>
                        {isCurrentTier && (
                          <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium mt-2">
                            Current Plan
                          </span>
                        )}
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-3">
                          <Percent className="w-5 h-5 text-success-600" />
                          <span className="text-sm">{tier.benefits.discount}% discount on all orders</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Truck className="w-5 h-5 text-primary-600" />
                          <span className="text-sm">{tier.benefits.delivery}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <Gift className="w-5 h-5 text-warning-600" />
                            <span className="text-sm font-medium">Free Products:</span>
                          </div>
                          <ul className="ml-8 space-y-1">
                            {tier.benefits.freeProducts.map((product, idx) => (
                              <li key={idx} className="text-sm text-gray-600">• {product}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-600" />
                          <span className="text-sm">{tier.benefits.specialOffers}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Zap className="w-5 h-5 text-medical-600" />
                          <span className="text-sm">{tier.benefits.support}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {tier.monthlyPrice > 0 && !isCurrentTier && (
                          <button 
                            onClick={() => setShowUpgradeModal(tier)}
                            className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center font-medium"
                          >
                            <CreditCard className="w-4 h-4 mr-2" />
                            Upgrade to {tier.name}
                          </button>
                        )}
                        
                        {isCurrentTier && (
                          <div className="w-full bg-success-100 text-success-600 py-3 rounded-lg flex items-center justify-center font-medium">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Current Plan
                          </div>
                        )}
                        
                        {isUpgrade && tier.pointsRequired > 0 && !isCurrentTier && (
                          <div className="text-center">
                            <p className="text-sm text-gray-600">
                              Or earn {tier.pointsRequired - (user?.loyaltyPoints || 0)} more points to unlock
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How to Earn Points */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Earn Points</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Shop & Earn</p>
                      <p className="text-sm text-gray-600">1 point for every ₹10 spent</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                      <span className="text-success-600 font-bold text-sm">50</span>
                    </div>
                    <div>
                      <p className="font-medium">Birthday Bonus</p>
                      <p className="text-sm text-gray-600">50 points on your special day</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center">
                      <span className="text-warning-600 font-bold text-sm">100</span>
                    </div>
                    <div>
                      <p className="font-medium">Refer Friends</p>
                      <p className="text-sm text-gray-600">100 points for each successful referral</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-medical-100 rounded-full flex items-center justify-center">
                      <span className="text-medical-600 font-bold text-sm">10</span>
                    </div>
                    <div>
                      <p className="font-medium">Write Reviews</p>
                      <p className="text-sm text-gray-600">10 points for each product review</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">25</span>
                    </div>
                    <div>
                      <p className="font-medium">Subscribe</p>
                      <p className="text-sm text-gray-600">25 bonus points for each new subscription</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-bold text-sm">20</span>
                    </div>
                    <div>
                      <p className="font-medium">Social Share</p>
                      <p className="text-sm text-gray-600">20 points for sharing products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Upgrade Modal */}
        {showUpgradeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h2 className="text-xl font-semibold mb-4">Upgrade to {showUpgradeModal.name}</h2>
              
              <div className="mb-6">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${showUpgradeModal.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <showUpgradeModal.icon className={`w-8 h-8 ${showUpgradeModal.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{showUpgradeModal.name} Membership</h3>
                  <p className="text-3xl font-bold text-primary-600 mt-2">₹{showUpgradeModal.monthlyPrice}/month</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly Fee:</span>
                    <span>₹{showUpgradeModal.monthlyPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span>₹0</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>₹{showUpgradeModal.monthlyPrice}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleUpgradeTier(showUpgradeModal)}
                  disabled={isProcessingUpgrade}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center font-medium disabled:opacity-50"
                >
                  {isProcessingUpgrade ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay & Upgrade
                    </>
                  )}
                </button>
                <button
                  onClick={() => setShowUpgradeModal(null)}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600">
                  • Subscription will auto-renew monthly
                  • Cancel anytime from your account settings
                  • Benefits activate immediately after payment
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
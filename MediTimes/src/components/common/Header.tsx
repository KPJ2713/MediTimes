import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Heart, 
  MapPin,
  Phone,
  Globe
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useLanguage, languages } from '../../context/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { currentLanguage, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Free delivery on orders above ₹500</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center hover:text-primary-200 transition-colors"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  <span>{currentLanguage.name}</span>
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          currentLanguage.code === lang.code
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-600">MediTimes</h1>
              <p className="text-xs text-gray-500">Your Health Partner</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder={t('common.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-4 py-1.5 rounded-md hover:bg-primary-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="flex flex-col items-center p-2 hover:text-primary-600 transition-colors relative"
            >
              <Heart className="w-6 h-6" />
              <span className="text-xs mt-1">Wishlist</span>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-error-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex flex-col items-center p-2 hover:text-primary-600 transition-colors relative"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs mt-1">{t('nav.cart')}</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-error-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex flex-col items-center p-2 hover:text-primary-600 transition-colors"
              >
                <User className="w-6 h-6" />
                <span className="text-xs mt-1">
                  {isAuthenticated ? user?.name?.split(' ')[0] : t('nav.login')}
                </span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        {t('nav.orders')}
                      </Link>
                      <Link
                        to="/subscriptions"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Subscriptions
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t('nav.logout')}
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        {t('nav.login')}
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        {t('nav.register')}
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {t('nav.products')}
              </Link>
              <Link
                to="/consultation"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {t('nav.consultation')}
              </Link>
              <Link
                to="/health-tips"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Health Tips
              </Link>
              <Link
                to="/subscriptions"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Subscriptions
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                About Us
              </Link>
            </div>
            <div className="hidden md:block">
              <Link
                to="/consultation"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.products')}
              </Link>
              <Link
                to="/consultation"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.consultation')}
              </Link>
              <Link
                to="/health-tips"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Health Tips
              </Link>
              <Link
                to="/subscriptions"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscriptions
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/consultation"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
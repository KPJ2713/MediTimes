import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Shield,
  Truck,
  Clock,
  Award
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Indicators */}
      <div className="bg-primary-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-white" />
              <div>
                <h4 className="font-semibold">100% Secure</h4>
                <p className="text-sm text-primary-100">Guaranteed authentic products</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-8 h-8 text-white" />
              <div>
                <h4 className="font-semibold">Fast Delivery</h4>
                <p className="text-sm text-primary-100">Same day delivery available</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-8 h-8 text-white" />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-primary-100">Round the clock assistance</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-8 h-8 text-white" />
              <div>
                <h4 className="font-semibold">Trusted by Millions</h4>
                <p className="text-sm text-primary-100">5+ years of service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">MediTimes</h1>
                <p className="text-xs text-gray-400">Your Health Partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              India's most trusted online pharmacy delivering genuine medicines, 
              health products, and expert healthcare services to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-white transition-colors">
                  Online Consultation
                </Link>
              </li>
              <li>
                <Link to="/health-tips" className="text-gray-300 hover:text-white transition-colors">
                  Health Tips
                </Link>
              </li>
              <li>
                <Link to="/store-locator" className="text-gray-300 hover:text-white transition-colors">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=medicines" className="text-gray-300 hover:text-white transition-colors">
                  {t('categories.medicines')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=supplements" className="text-gray-300 hover:text-white transition-colors">
                  {t('categories.health_supplements')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=devices" className="text-gray-300 hover:text-white transition-colors">
                  {t('categories.medical_devices')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=personal-care" className="text-gray-300 hover:text-white transition-colors">
                  {t('categories.personal_care')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=ayurvedic" className="text-gray-300 hover:text-white transition-colors">
                  {t('categories.ayurvedic')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    MediTimes Healthcare Pvt. Ltd.<br />
                    Tower A, Cyber City,<br />
                    Gurugram, Haryana 122002
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">support@meditimes.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MediTimes Healthcare Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping-policy" className="text-gray-400 hover:text-white transition-colors">
                Shipping Policy
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
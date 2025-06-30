import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
];

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.consultation': 'Consultation',
    'nav.orders': 'Orders',
    'nav.account': 'Account',
    'nav.cart': 'Cart',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.logout': 'Logout',

    // Common
    'common.search': 'Search medicines, health products...',
    'common.add_to_cart': 'Add to Cart',
    'common.buy_now': 'Buy Now',
    'common.view_details': 'View Details',
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.quantity': 'Quantity',
    'common.price': 'Price',
    'common.total': 'Total',
    'common.discount': 'Discount',
    'common.delivery_charges': 'Delivery Charges',
    'common.free_delivery': 'Free Delivery',

    // Home Page
    'home.hero.title': 'Your Health, Our Priority',
    'home.hero.subtitle': 'Get medicines, health products, and expert consultation delivered to your doorstep',
    'home.hero.cta': 'Shop Now',
    'home.features.title': 'Why Choose MediTimes?',
    'home.features.genuine': 'Genuine Products',
    'home.features.genuine_desc': '100% authentic medicines from licensed pharmacies',
    'home.features.fast_delivery': 'Fast Delivery',
    'home.features.fast_delivery_desc': 'Same-day delivery in metros, 24-48 hours everywhere else',
    'home.features.expert_advice': 'Expert Advice',
    'home.features.expert_advice_desc': '24/7 pharmacist support and online consultations',
    'home.features.secure_payment': 'Secure Payment',
    'home.features.secure_payment_desc': 'Multiple payment options with 100% secure transactions',

    // Product Categories
    'categories.medicines': 'Medicines',
    'categories.health_supplements': 'Health Supplements',
    'categories.medical_devices': 'Medical Devices',
    'categories.personal_care': 'Personal Care',
    'categories.ayurvedic': 'Ayurvedic Products',
    'categories.baby_care': 'Baby Care',

    // Currency
    'currency.symbol': '₹',
    'currency.rupees': 'Rupees',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.products': 'उत्पाद',
    'nav.consultation': 'परामर्श',
    'nav.orders': 'ऑर्डर',
    'nav.account': 'खाता',
    'nav.cart': 'कार्ट',
    'nav.login': 'लॉगिन',
    'nav.register': 'पंजीकरण',
    'nav.logout': 'लॉगआउट',

    // Common
    'common.search': 'दवाइयां, स्वास्थ्य उत्पाद खोजें...',
    'common.add_to_cart': 'कार्ट में जोड़ें',
    'common.buy_now': 'अभी खरीदें',
    'common.view_details': 'विवरण देखें',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'कुछ गलत हुआ',
    'common.success': 'सफलता',
    'common.cancel': 'रद्द करें',
    'common.confirm': 'पुष्टि करें',
    'common.save': 'सेव करें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.quantity': 'मात्रा',
    'common.price': 'मूल्य',
    'common.total': 'कुल',
    'common.discount': 'छूट',
    'common.delivery_charges': 'डिलीवरी शुल्क',
    'common.free_delivery': 'मुफ्त डिलीवरी',

    // Home Page
    'home.hero.title': 'आपका स्वास्थ्य, हमारी प्राथमिकता',
    'home.hero.subtitle': 'दवाइयां, स्वास्थ्य उत्पाद और विशेषज्ञ परामर्श घर पर पाएं',
    'home.hero.cta': 'अभी खरीदें',
    'home.features.title': 'MediTimes क्यों चुनें?',
    'home.features.genuine': 'वास्तविक उत्पाद',
    'home.features.genuine_desc': 'लाइसेंसशुदा फार्मेसियों से 100% प्रामाणिक दवाइयां',
    'home.features.fast_delivery': 'तेज़ डिलीवरी',
    'home.features.fast_delivery_desc': 'मेट्रो में उसी दिन, अन्यत्र 24-48 घंटे में डिलीवरी',
    'home.features.expert_advice': 'विशेषज्ञ सलाह',
    'home.features.expert_advice_desc': '24/7 फार्मासिस्ट सहायता और ऑनलाइन परामर्श',
    'home.features.secure_payment': 'सुरक्षित भुगतान',
    'home.features.secure_payment_desc': '100% सुरक्षित लेनदेन के साथ कई भुगतान विकल्प',

    // Product Categories
    'categories.medicines': 'दवाइयां',
    'categories.health_supplements': 'स्वास्थ्य पूरक',
    'categories.medical_devices': 'चिकित्सा उपकरण',
    'categories.personal_care': 'व्यक्तिगत देखभाल',
    'categories.ayurvedic': 'आयुर्वेदिक उत्पाद',
    'categories.baby_care': 'बेबी केयर',

    // Currency
    'currency.symbol': '₹',
    'currency.rupees': 'रुपये',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language.code);
  };

  const t = (key: string, params?: Record<string, string>) => {
    const langTranslations = translations[currentLanguage.code];
    let translation = langTranslations[key] || key;

    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(`{{${paramKey}}}`, paramValue);
      });
    }

    return translation;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { languages };
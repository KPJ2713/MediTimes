import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { WishlistProvider } from './context/WishlistContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Consultation from './pages/Consultation';
import HealthTips from './pages/HealthTips';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';
import Subscriptions from './pages/Subscriptions';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import ConsultationSuccess from './pages/ConsultationSuccess';
import StoreLocator from './pages/StoreLocator';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <Router>
              <div className="min-h-screen bg-gray-50">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/consultation" element={<Consultation />} />
                    <Route path="/health-tips" element={<HealthTips />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="/consultation-success" element={<ConsultationSuccess />} />
                    <Route path="/store-locator" element={<StoreLocator />} />
                  </Routes>
                </main>
                <Footer />
                <Toaster
                  position="top-right"
                  toastOptions={{
                    duration: 3000,
                    style: {
                      background: '#363636',
                      color: '#fff',
                    },
                  }}
                />
              </div>
            </Router>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
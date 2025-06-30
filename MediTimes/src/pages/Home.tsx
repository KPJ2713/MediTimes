import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Truck, 
  Clock, 
  Award, 
  Star, 
  ArrowRight,
  Heart,
  UserCheck,
  Stethoscope,
  Pill
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { categories, featuredProducts } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-medical-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
                >
                  Book Consultation
                  <Stethoscope className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Healthcare Professional"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-success-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">5M+ Customers</p>
                    <p className="text-sm text-gray-600">Trust MediTimes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing you with the best healthcare experience 
              through our comprehensive medical e-commerce platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.genuine')}</h3>
              <p className="text-gray-600">{t('home.features.genuine_desc')}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.fast_delivery')}</h3>
              <p className="text-gray-600">{t('home.features.fast_delivery_desc')}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.expert_advice')}</h3>
              <p className="text-gray-600">{t('home.features.expert_advice_desc')}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.features.secure_payment')}</h3>
              <p className="text-gray-600">{t('home.features.secure_payment_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600">
              Find everything you need for your health and wellness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{t(`categories.${category.slug.replace('-', '_')}`)}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-primary-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600">
                Top-selling products trusted by millions
              </p>
            </div>
            <Link
              to="/products"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
            >
              View All
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-primary-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-200">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-200">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Real reviews from real customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                location: 'Mumbai',
                rating: 5,
                comment: 'Excellent service! Got my medicines delivered within 2 hours. The quality is guaranteed and prices are very reasonable.',
              },
              {
                name: 'Rajesh Kumar',
                location: 'Delhi',
                rating: 5,
                comment: 'MediTimes has been my go-to for all medical needs. Their customer service is outstanding and the app is very user-friendly.',
              },
              {
                name: 'Anita Patel',
                location: 'Bangalore',
                rating: 5,
                comment: 'I love the subscription feature for my monthly medicines. Never have to worry about running out of medications.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-medical-600 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Take Care of Your Health?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join millions of satisfied customers and experience the best in healthcare delivery
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
              >
                Shop Now
                <Pill className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
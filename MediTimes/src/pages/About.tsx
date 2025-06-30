import React from 'react';
import { 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  Heart, 
  Clock, 
  Truck,
  Star,
  CheckCircle,
  Target,
  Eye,
  Handshake
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '5M+' },
    { icon: MapPin, label: 'Cities Served', value: '1000+' },
    { icon: Award, label: 'Years of Service', value: '5+' },
    { icon: Star, label: 'Customer Rating', value: '4.8/5' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Authenticity',
      description: 'We guarantee 100% genuine products from licensed manufacturers and authorized distributors.',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your health and satisfaction are our top priorities. We provide personalized care and support.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: '24/7 availability with fast delivery and consistent service you can depend on.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices and relationships.',
    },
  ];

  const team = [
    {
      name: 'Karmadeepsinh Jhala',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Former healthcare executive with 20+ years of experience in pharmaceutical industry.',
    },
    {
      name: 'Aum Bhatt',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Tech innovator specializing in healthcare technology and digital transformation.',
    },
    {
      name: 'Harshkumar Patel',
      position: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Practicing physician and healthcare policy expert ensuring medical accuracy.',
    },
    {
      name: 'Shubham Sali',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Supply chain expert ensuring efficient delivery and inventory management.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-medical-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About MediTimes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              India's most trusted online pharmacy, committed to making healthcare 
              accessible, affordable, and reliable for everyone.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-primary-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                MediTimes was founded in 2019 with a simple yet powerful vision: to make quality 
                healthcare accessible to every Indian, regardless of their location or economic status. 
                Our journey began when our founder, Dr. Rajesh Sharma, witnessed the challenges people 
                faced in accessing genuine medicines in remote areas.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a small initiative to deliver medicines to underserved communities 
                has now grown into India's leading online pharmacy platform, serving over 5 million 
                customers across 1000+ cities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're not just an online pharmacy – we're a comprehensive healthcare platform 
                offering medicines, consultations, health products, and wellness services, all backed 
                by our commitment to authenticity, affordability, and accessibility.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3683093/pexels-photo-3683093.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Healthcare professionals"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Trusted by Millions</p>
                    <p className="text-sm text-gray-600">Since 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To democratize healthcare by providing easy access to genuine medicines, 
                expert consultations, and health services at affordable prices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become India's most trusted healthcare partner, ensuring every citizen 
                has access to quality healthcare services and products.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
              <p className="text-gray-600">
                To maintain the highest standards of quality, authenticity, and customer 
                service in everything we do, putting your health first.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide every decision we make and every service we provide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of healthcare professionals, technologists, and business leaders 
              working together to transform healthcare delivery in India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence in healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Online Pharmacy 2023</h3>
              <p className="text-primary-200 text-sm">Healthcare Excellence Awards</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-primary-200 text-sm">Quality Management System</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5M+ Satisfied Customers</h3>
              <p className="text-primary-200 text-sm">Across India</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">99.5% On-Time Delivery</h3>
              <p className="text-primary-200 text-sm">Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions or need assistance? We're here to help you 24/7
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 1800-123-4567</p>
              <p className="text-sm text-gray-500">24/7 Customer Support</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">support@meditimes.com</p>
              <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">Tower A, Cyber City</p>
              <p className="text-gray-600">Gurugram, Haryana 122002</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React, { useState } from 'react';
import { Calendar, User, Clock, Heart, Brain, Activity, Apple, Shield, Eye, Thermometer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HealthTip {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: number;
  image: string;
  tags: string[];
}

const healthTips: HealthTip[] = [
  {
    id: '1',
    title: '10 Simple Ways to Boost Your Immunity Naturally',
    excerpt: 'Discover natural methods to strengthen your immune system and stay healthy year-round.',
    content: 'A strong immune system is your body\'s first line of defense against infections and diseases. Here are 10 proven ways to boost your immunity naturally: 1. Get adequate sleep (7-9 hours), 2. Exercise regularly, 3. Eat a balanced diet rich in fruits and vegetables, 4. Stay hydrated, 5. Manage stress levels, 6. Take vitamin supplements, 7. Maintain good hygiene, 8. Avoid smoking and excessive alcohol, 9. Get regular health checkups, 10. Practice meditation or yoga.',
    category: 'Immunity',
    author: 'Dr. Priya Sharma',
    publishDate: '2024-01-15',
    readTime: 5,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['immunity', 'natural health', 'wellness', 'prevention'],
  },
  {
    id: '2',
    title: 'Heart-Healthy Diet: Foods That Love Your Heart Back',
    excerpt: 'Learn about the best foods for cardiovascular health and how to incorporate them into your daily meals.',
    content: 'Your heart works tirelessly to keep you alive, so it deserves the best nutrition. A heart-healthy diet can reduce your risk of heart disease and stroke. Include these foods: Fatty fish rich in omega-3s (salmon, mackerel), leafy greens (spinach, kale), whole grains (oats, quinoa), berries (blueberries, strawberries), avocados, nuts and seeds, olive oil, and legumes. Limit processed foods, excessive salt, and saturated fats.',
    category: 'Heart Health',
    author: 'Dr. Rajesh Kumar',
    publishDate: '2024-01-12',
    readTime: 7,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['heart health', 'diet', 'nutrition', 'cardiovascular'],
  },
  {
    id: '3',
    title: 'Mental Health Matters: Managing Stress in Modern Life',
    excerpt: 'Practical strategies to cope with stress and maintain good mental health in today\'s fast-paced world.',
    content: 'Mental health is just as important as physical health. In our fast-paced world, stress has become a common companion. Here are effective ways to manage stress: Practice deep breathing exercises, maintain a regular sleep schedule, engage in physical activity, connect with loved ones, limit social media exposure, practice mindfulness, set realistic goals, and don\'t hesitate to seek professional help when needed.',
    category: 'Mental Health',
    author: 'Dr. Anita Patel',
    publishDate: '2024-01-10',
    readTime: 6,
    image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['mental health', 'stress management', 'wellness', 'mindfulness'],
  },
  {
    id: '4',
    title: 'The Importance of Regular Exercise for Overall Health',
    excerpt: 'Understand how regular physical activity can transform your health and quality of life.',
    content: 'Regular exercise is one of the most powerful tools for maintaining good health. Benefits include: improved cardiovascular health, stronger bones and muscles, better mental health, weight management, reduced risk of chronic diseases, improved sleep quality, and increased longevity. Aim for at least 150 minutes of moderate-intensity exercise per week, including both cardio and strength training.',
    category: 'Fitness',
    author: 'Dr. Suresh Reddy',
    publishDate: '2024-01-08',
    readTime: 8,
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['exercise', 'fitness', 'health', 'wellness'],
  },
  {
    id: '5',
    title: 'Healthy Eating Habits for Better Digestion',
    excerpt: 'Simple dietary changes that can improve your digestive health and overall well-being.',
    content: 'Good digestion is the foundation of good health. Here are habits for better digestive health: Eat slowly and chew thoroughly, include fiber-rich foods, stay hydrated, eat regular meals, limit processed foods, include probiotics (yogurt, kefir), manage portion sizes, avoid eating late at night, and listen to your body\'s hunger cues.',
    category: 'Nutrition',
    author: 'Dr. Meera Singh',
    publishDate: '2024-01-05',
    readTime: 5,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['digestion', 'nutrition', 'healthy eating', 'gut health'],
  },
  {
    id: '6',
    title: 'Eye Care in the Digital Age: Protecting Your Vision',
    excerpt: 'Essential tips to protect your eyes from digital strain and maintain healthy vision.',
    content: 'With increased screen time, eye care has become more important than ever. Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Other tips include: adjust screen brightness, maintain proper distance from screens, blink frequently, use artificial tears if needed, ensure proper lighting, get regular eye exams, and consider blue light filtering glasses.',
    category: 'Eye Care',
    author: 'Dr. Vikram Joshi',
    publishDate: '2024-01-03',
    readTime: 4,
    image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['eye care', 'digital health', 'vision', 'screen time'],
  },
];

const categories = ['All', 'Immunity', 'Heart Health', 'Mental Health', 'Fitness', 'Nutrition', 'Eye Care'];

const HealthTips: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTip, setSelectedTip] = useState<HealthTip | null>(null);

  const filteredTips = selectedCategory === 'All' 
    ? healthTips 
    : healthTips.filter(tip => tip.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Immunity': return Shield;
      case 'Heart Health': return Heart;
      case 'Mental Health': return Brain;
      case 'Fitness': return Activity;
      case 'Nutrition': return Apple;
      case 'Eye Care': return Eye;
      default: return Thermometer;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-success-600 to-medical-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Health Tips & Wellness Guide
            </h1>
            <p className="text-xl mb-8 text-success-100">
              Expert advice and practical tips to help you live a healthier, happier life. 
              Stay informed with the latest health insights from our medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Tips Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTips.map((tip) => {
              const IconComponent = getCategoryIcon(tip.category);
              return (
                <article
                  key={tip.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedTip(tip)}
                >
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-medium text-primary-600">{tip.category}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{tip.readTime} min read</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {tip.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{tip.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(tip.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedTip && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedTip.image}
                alt={selectedTip.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedTip(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {React.createElement(getCategoryIcon(selectedTip.category), {
                    className: "w-5 h-5 text-primary-600"
                  })}
                  <span className="font-medium text-primary-600">{selectedTip.category}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{selectedTip.readTime} min read</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedTip.title}
              </h1>
              <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{selectedTip.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(selectedTip.publishDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedTip.content}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {selectedTip.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Subscribe to our newsletter and get the latest health tips delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-success-600 text-white px-6 py-3 rounded-r-lg hover:bg-success-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthTips;
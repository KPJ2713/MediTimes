import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Video, Phone, MessageCircle, Star, CheckCircle, User, Stethoscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  consultationFee: number;
  image: string;
  languages: string[];
  availableSlots: string[];
  isOnline: boolean;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    specialization: 'General Physician',
    experience: 12,
    rating: 4.8,
    consultationFee: 500,
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
    languages: ['English', 'Hindi'],
    availableSlots: ['10:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'],
    isOnline: true,
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Cardiologist',
    experience: 15,
    rating: 4.9,
    consultationFee: 800,
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300',
    languages: ['English', 'Hindi'],
    availableSlots: ['11:00 AM', '3:00 PM', '5:00 PM'],
    isOnline: false,
  },
  {
    id: '3',
    name: 'Dr. Anita Patel',
    specialization: 'Dermatologist',
    experience: 10,
    rating: 4.7,
    consultationFee: 600,
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
    languages: ['English', 'Hindi', 'Gujarati'],
    availableSlots: ['9:00 AM', '1:00 PM', '3:00 PM', '7:00 PM'],
    isOnline: true,
  },
  {
    id: '4',
    name: 'Dr. Suresh Reddy',
    specialization: 'Pediatrician',
    experience: 18,
    rating: 4.9,
    consultationFee: 700,
    image: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=300',
    languages: ['English', 'Hindi', 'Telugu'],
    availableSlots: ['10:00 AM', '12:00 PM', '4:00 PM', '6:00 PM'],
    isOnline: true,
  },
];

const Consultation: React.FC = () => {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [consultationType, setConsultationType] = useState<'video' | 'phone' | 'chat'>('video');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookConsultation = () => {
    if (!isAuthenticated) {
      alert('Please login to book a consultation');
      return;
    }
    setShowBookingForm(true);
  };

  const confirmBooking = () => {
    if (!selectedSlot) {
      alert('Please select a time slot');
      return;
    }

    // Generate consultation details
    const consultationId = 'CONS' + Date.now();
    const scheduledDate = new Date();
    scheduledDate.setDate(scheduledDate.getDate() + 1); // Tomorrow
    const scheduledTime = `${scheduledDate.toDateString()} at ${selectedSlot}`;

    // Navigate to success page
    navigate('/consultation-success', {
      state: {
        consultationId,
        doctorName: selectedDoctor?.name,
        scheduledTime,
        consultationType,
      }
    });

    // Reset form
    setShowBookingForm(false);
    setSelectedDoctor(null);
    setSelectedSlot('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-600 to-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Online Doctor Consultation
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Consult with certified doctors from the comfort of your home. 
              Get expert medical advice, prescriptions, and health guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6" />
                <span>Certified Doctors</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6" />
                <span>Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Choose Your Consultation Type
            </h2>
            <p className="text-gray-600">
              Select the consultation method that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Call</h3>
              <p className="text-gray-600 mb-4">Face-to-face consultation with HD video quality</p>
              <div className="text-2xl font-bold text-primary-600">₹500</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice Call</h3>
              <p className="text-gray-600 mb-4">Audio consultation for quick medical advice</p>
              <div className="text-2xl font-bold text-success-600">₹300</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat</h3>
              <p className="text-gray-600 mb-4">Text-based consultation with instant responses</p>
              <div className="text-2xl font-bold text-medical-600">₹200</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Doctors */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Expert Doctors
            </h2>
            <p className="text-gray-600">
              Consult with experienced and certified medical professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="relative inline-block">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    />
                    {doctor.isOnline && (
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-success-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-primary-600 font-medium">{doctor.specialization}</p>
                  <p className="text-sm text-gray-600">{doctor.experience} years experience</p>
                </div>
                
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                  <span className="ml-2 text-sm text-gray-600">
                    Languages: {doctor.languages.join(', ')}
                  </span>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-gray-800">₹{doctor.consultationFee}</div>
                  <div className="text-sm text-gray-600">Consultation Fee</div>
                </div>
                
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center mb-4">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{selectedDoctor.name}</h3>
                <p className="text-primary-600">{selectedDoctor.specialization}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time Slot
              </label>
              <div className="grid grid-cols-2 gap-2">
                {selectedDoctor.availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-2 text-sm rounded-md border ${
                      selectedSlot === slot
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-600'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Consultation Type
              </label>
              <div className="flex space-x-2">
                {[
                  { type: 'video', icon: Video, label: 'Video' },
                  { type: 'phone', icon: Phone, label: 'Phone' },
                  { type: 'chat', icon: MessageCircle, label: 'Chat' },
                ].map(({ type, icon: Icon, label }) => (
                  <button
                    key={type}
                    onClick={() => setConsultationType(type as any)}
                    className={`flex-1 p-2 rounded-md border flex items-center justify-center space-x-1 ${
                      consultationType === type
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                disabled={!selectedSlot}
                className="flex-1 py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Online Consultation?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Consult with qualified and experienced doctors across various specializations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Get medical consultation anytime, anywhere with our round-the-clock service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your medical information is completely secure and confidential
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Calendar, Video, ArrowRight, Home } from 'lucide-react';

const ConsultationSuccess: React.FC = () => {
  const location = useLocation();
  const { consultationId, doctorName, scheduledTime, consultationType } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-success-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Consultation Booked!</h1>
        <p className="text-gray-600 mb-6">
          Your consultation has been successfully scheduled. You'll receive a confirmation email with meeting details.
        </p>

        {consultationId && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Consultation ID</span>
              <span className="font-semibold text-gray-800">{consultationId}</span>
            </div>
            {doctorName && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Doctor</span>
                <span className="font-semibold text-gray-800">{doctorName}</span>
              </div>
            )}
            {scheduledTime && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Scheduled Time</span>
                <span className="font-semibold text-gray-800">{scheduledTime}</span>
              </div>
            )}
            {consultationType && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Type</span>
                <span className="font-semibold text-gray-800 capitalize">{consultationType}</span>
              </div>
            )}
          </div>
        )}

        <div className="space-y-3">
          <Link
            to="/orders"
            className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center font-medium"
          >
            <Calendar className="w-5 h-5 mr-2" />
            View My Consultations
          </Link>
          
          <Link
            to="/"
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center font-medium"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="mt-6 p-4 bg-medical-50 rounded-lg">
          <p className="text-sm text-medical-800">
            📧 Meeting link sent to your email
          </p>
          <p className="text-sm text-medical-800 mt-1">
            📱 Download our app for better experience
          </p>
          <p className="text-sm text-medical-800 mt-1">
            ⏰ Join 5 minutes before scheduled time
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSuccess;
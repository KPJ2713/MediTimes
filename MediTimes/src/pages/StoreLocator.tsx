import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Search, Filter } from 'lucide-react';

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
  distance?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const StoreLocator: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const stores: Store[] = [
    {
      id: '1',
      name: 'MediTimes Pharmacy - Ahmedabad Central',
      address: 'Shop No. 15, Ground Floor, City Gold Complex, Ashram Road',
      city: 'Ahmedabad',
      state: 'Gujarat',
      pincode: '380009',
      phone: '+91 79 2658 7890',
      hours: {
        weekdays: '8:00 AM - 10:00 PM',
        saturday: '8:00 AM - 10:00 PM',
        sunday: '9:00 AM - 9:00 PM'
      },
      services: ['Prescription Medicines', 'OTC Products', 'Health Checkup', 'Home Delivery', 'Online Consultation'],
      distance: 2.3,
      coordinates: { lat: 23.0225, lng: 72.5714 }
    },
    {
      id: '2',
      name: 'MediTimes Pharmacy - Satellite',
      address: 'B-12, Satellite Plaza, Near Jodhpur Cross Roads, Satellite',
      city: 'Ahmedabad',
      state: 'Gujarat',
      pincode: '380015',
      phone: '+91 79 2630 4567',
      hours: {
        weekdays: '7:30 AM - 11:00 PM',
        saturday: '7:30 AM - 11:00 PM',
        sunday: '8:00 AM - 10:00 PM'
      },
      services: ['Prescription Medicines', 'OTC Products', 'Medical Devices', 'Health Supplements', 'Baby Care'],
      distance: 5.1,
      coordinates: { lat: 23.0395, lng: 72.5066 }
    },
    {
      id: '3',
      name: 'MediTimes Pharmacy - Vastrapur',
      address: 'UG-7, Shukan Mall, Near Vastrapur Lake, Vastrapur',
      city: 'Ahmedabad',
      state: 'Gujarat',
      pincode: '380015',
      phone: '+91 79 4035 2890',
      hours: {
        weekdays: '8:00 AM - 10:30 PM',
        saturday: '8:00 AM - 10:30 PM',
        sunday: '9:00 AM - 9:30 PM'
      },
      services: ['Prescription Medicines', 'OTC Products', 'Ayurvedic Products', 'Personal Care', 'Home Delivery'],
      distance: 7.8,
      coordinates: { lat: 23.0395, lng: 72.5066 }
    },
    {
      id: '4',
      name: 'MediTimes Pharmacy - Surat Citylight',
      address: 'Shop 101-102, Citylight Shopping Center, Citylight Road',
      city: 'Surat',
      state: 'Gujarat',
      pincode: '395007',
      phone: '+91 261 235 6789',
      hours: {
        weekdays: '8:00 AM - 10:00 PM',
        saturday: '8:00 AM - 10:00 PM',
        sunday: '9:00 AM - 9:00 PM'
      },
      services: ['Prescription Medicines', 'OTC Products', 'Health Checkup', 'Medical Devices', 'Online Consultation'],
      distance: 12.5,
      coordinates: { lat: 21.2180, lng: 72.8347 }
    },
    {
      id: '5',
      name: 'MediTimes Pharmacy - Rajkot Kalawad Road',
      address: 'Ground Floor, Shree Krishna Complex, Kalawad Road',
      city: 'Rajkot',
      state: 'Gujarat',
      pincode: '360005',
      phone: '+91 281 245 7890',
      hours: {
        weekdays: '8:30 AM - 9:30 PM',
        saturday: '8:30 AM - 9:30 PM',
        sunday: '9:00 AM - 8:00 PM'
      },
      services: ['Prescription Medicines', 'OTC Products', 'Health Supplements', 'Personal Care', 'Home Delivery'],
      distance: 15.2,
      coordinates: { lat: 22.3039, lng: 70.8022 }
    },
    {
      id: '6',
      name: 'MediTimes Pharmacy - Vadodara Alkapuri',
      address: 'Shop 25, Alkapuri Shopping Complex, Alkapuri',
      city: 'Vadodara',
      state: 'Gujarat',
      pincode: '390007',
      phone: '+91 265 235 4567',
      hours: {
        weekdays: '8:00 AM - 10:00 PM',
        saturday: '8:00 AM - 10:00 PM',
        sunday: '9:00 AM - 9:00 PM'
      },
      services: ['Prescription Medicines', 'OTC Products', 'Medical Devices', 'Ayurvedic Products', 'Baby Care'],
      distance: 18.7,
      coordinates: { lat: 22.3072, lng: 73.1812 }
    },
    {
      id: '7',
      name: 'MediTimes Pharmacy - Gandhinagar Sector 21',
      address: 'Plot 15, Sector 21, Near Gandhinagar Railway Station',
      city: 'Gandhinagar',
      state: 'Gujarat',
      pincode: '382021',
      phone: '+91 79 2325 6789',
      hours: {
        weekdays: '8:00 AM - 9:00 PM',
        saturday: '8:00 AM - 9:00 PM',
        sunday: '9:00 AM - 8:00 PM'
      },
      services: ['Prescription Medicines', 'OTC Products', 'Health Supplements', 'Personal Care', 'Online Consultation'],
      distance: 25.4,
      coordinates: { lat: 23.2156, lng: 72.6369 }
    },
    {
      id: '8',
      name: 'MediTimes Pharmacy - Bhavnagar ST Road',
      address: 'Shop 8-9, Nilkanth Complex, ST Road, Near ST Bus Stand',
      city: 'Bhavnagar',
      state: 'Gujarat',
      pincode: '364001',
      phone: '+91 278 242 3456',
      hours: {
        weekdays: '8:30 AM - 9:00 PM',
        saturday: '8:30 AM - 9:00 PM',
        sunday: '9:00 AM - 8:00 PM'
      },
      services: ['Prescription Medicines', 'OTC Products', 'Health Checkup', 'Medical Devices', 'Home Delivery'],
      distance: 32.1,
      coordinates: { lat: 21.7645, lng: 72.1519 }
    }
  ];

  const cities = [...new Set(stores.map(store => store.city))];

  const filteredStores = stores.filter(store => {
    const matchesSearch = searchQuery === '' || 
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCity = selectedCity === '' || store.city === selectedCity;
    
    return matchesSearch && matchesCity;
  });

  const getDirections = (store: Store) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Store Locator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find MediTimes pharmacy stores near you. Get directions, store hours, and contact information 
            for all our locations across Gujarat.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by store name, address, or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Store List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {filteredStores.length} stores found
            </h2>
            {filteredStores.map((store) => (
              <div 
                key={store.id} 
                className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all ${
                  selectedStore?.id === store.id ? 'ring-2 ring-primary-500 border-primary-500' : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedStore(store)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{store.name}</h3>
                  {store.distance && (
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-sm font-medium">
                      {store.distance} km
                    </span>
                  )}
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                    <div>
                      <p className="text-gray-700">{store.address}</p>
                      <p className="text-gray-600 text-sm">{store.city}, {store.state} - {store.pincode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{store.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{store.hours.weekdays}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-1">
                    {store.services.slice(0, 3).map((service, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                    {store.services.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{store.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      getDirections(store);
                    }}
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`tel:${store.phone}`, '_self');
                    }}
                    className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Call
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Store Details */}
          <div className="lg:sticky lg:top-8">
            {selectedStore ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{selectedStore.name}</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Address</h3>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                      <div>
                        <p className="text-gray-700">{selectedStore.address}</p>
                        <p className="text-gray-600">{selectedStore.city}, {selectedStore.state} - {selectedStore.pincode}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Contact</h3>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{selectedStore.phone}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Store Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="text-gray-800">{selectedStore.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="text-gray-800">{selectedStore.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="text-gray-800">{selectedStore.hours.sunday}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Services Available</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedStore.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => getDirections(selectedStore)}
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Get Directions
                  </button>
                  <button
                    onClick={() => window.open(`tel:${selectedStore.phone}`, '_self')}
                    className="w-full border border-primary-600 text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Store
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">Select a Store</h3>
                <p className="text-gray-600">
                  Click on any store from the list to view detailed information, hours, and services.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* No Results */}
        {filteredStores.length === 0 && (
          <div className="text-center py-16">
            <MapPin className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Stores Found</h2>
            <p className="text-gray-600 mb-8">
              We couldn't find any stores matching your search criteria. Try adjusting your search or filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCity('');
              }}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreLocator;
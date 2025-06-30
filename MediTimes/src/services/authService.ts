import axios from 'axios';
import { User } from '../types';

// Mock API for demo purposes - replace with actual backend URL
const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

interface LoginResponse {
  user: User;
  token: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

// Mock user database for demo
const mockUsers: { [email: string]: { password: string; user: User } } = {
  'demo@meditimes.com': {
    password: 'demo123',
    user: {
      id: '1',
      email: 'demo@meditimes.com',
      name: 'Demo User',
      phone: '9876543210',
      role: 'customer',
      addresses: [],
      loyaltyPoints: 150,
      membershipTier: 'Gold',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    }
  }
};

// Mock authentication service for demo
const mockAuthService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user exists in mock database
    const userRecord = mockUsers[email];
    if (userRecord && userRecord.password === password) {
      const token = 'mock-jwt-token-' + Date.now();
      return { user: userRecord.user, token };
    }
    
    throw new Error('Invalid email or password');
  },

  async register(userData: RegisterData): Promise<LoginResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if email already exists
    if (mockUsers[userData.email]) {
      throw new Error('Email already exists');
    }
    
    const user: User = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      phone: userData.phone,
      role: 'customer',
      addresses: [],
      loyaltyPoints: 50, // Welcome bonus
      membershipTier: 'Silver',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Add to mock database
    mockUsers[userData.email] = {
      password: userData.password,
      user: user
    };
    
    const token = 'mock-jwt-token-' + Date.now();
    return { user, token };
  },

  async getCurrentUser(): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    
    // For demo, return the first user from mock database
    const firstUser = Object.values(mockUsers)[0];
    if (firstUser) {
      return firstUser.user;
    }
    
    throw new Error('User not found');
  },

  async updateProfile(userData: Partial<User>): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo, update the first user in mock database
    const firstUserEmail = Object.keys(mockUsers)[0];
    if (firstUserEmail && mockUsers[firstUserEmail]) {
      const updatedUser = {
        ...mockUsers[firstUserEmail].user,
        ...userData,
        updatedAt: new Date().toISOString(),
      };
      mockUsers[firstUserEmail].user = updatedUser;
      return updatedUser;
    }
    
    throw new Error('User not found');
  },

  async forgotPassword(email: string): Promise<void> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock success
  },

  async resetPassword(token: string, password: string): Promise<void> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock success
  },

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock success
  },
};

export const authService = mockAuthService;
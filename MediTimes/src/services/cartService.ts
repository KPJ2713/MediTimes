import axios from 'axios';
import { CartItem } from '../types';

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

export const cartService = {
  async getCart(): Promise<CartItem[]> {
    const response = await api.get('/cart');
    return response.data;
  },

  async addToCart(productId: string, quantity: number): Promise<void> {
    await api.post('/cart', { productId, quantity });
  },

  async updateQuantity(productId: string, quantity: number): Promise<void> {
    await api.put(`/cart/${productId}`, { quantity });
  },

  async removeFromCart(productId: string): Promise<void> {
    await api.delete(`/cart/${productId}`);
  },

  async clearCart(): Promise<void> {
    await api.delete('/cart');
  },
};
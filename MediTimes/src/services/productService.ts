import axios from 'axios';
import { Product, ProductCategory } from '../types';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  async getProducts(filters?: {
    category?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    brand?: string;
    page?: number;
    limit?: number;
  }): Promise<{ products: Product[]; total: number; page: number; totalPages: number }> {
    const response = await api.get('/products', { params: filters });
    return response.data;
  },

  async getProduct(id: string): Promise<Product> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  async getCategories(): Promise<ProductCategory[]> {
    const response = await api.get('/categories');
    return response.data;
  },

  async getFeaturedProducts(): Promise<Product[]> {
    const response = await api.get('/products/featured');
    return response.data;
  },

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    const response = await api.get(`/products/category/${categoryId}`);
    return response.data;
  },

  async searchProducts(query: string): Promise<Product[]> {
    const response = await api.get(`/products/search?q=${encodeURIComponent(query)}`);
    return response.data;
  },
};
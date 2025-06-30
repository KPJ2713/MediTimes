export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'customer' | 'admin';
  addresses: Address[];
  loyaltyPoints: number;
  membershipTier: 'Silver' | 'Gold' | 'Platinum';
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  ingredients: string[];
  dosage?: string;
  price: number;
  mrp: number;
  discount: number;
  images: string[];
  inStock: boolean;
  stockCount: number;
  isPrescriptionRequired: boolean;
  expiryDate?: string;
  manufacturingDate?: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  prescriptionUploaded?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  discountAmount: number;
  deliveryCharges: number;
  finalAmount: number;
  status: OrderStatus;
  deliveryAddress: Address;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderDate: string;
  expectedDelivery: string;
  trackingNumber: string;
  prescriptions?: string[];
}

export interface OrderItem {
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  prescriptionUploaded?: boolean;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentMethod = 'upi' | 'card' | 'netbanking' | 'wallet' | 'cod';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface Review {
  id: string;
  userId: string;
  user: Pick<User, 'name'>;
  productId: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  isVerifiedPurchase: boolean;
  helpfulCount: number;
  createdAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  productId: string;
  product: Product;
  quantity: number;
  frequency: 'weekly' | 'monthly' | 'quarterly';
  nextDelivery: string;
  isActive: boolean;
  createdAt: string;
}

export interface Consultation {
  id: string;
  userId: string;
  doctorName: string;
  specialization: string;
  scheduledAt: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  consultationFee: number;
  notes?: string;
  prescription?: string;
}

export interface Language {
  code: 'en' | 'hi';
  name: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
export type Category = "Clothes" | "Shoes" | "Bags" | "Accessories";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  features: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  orders: Order[];
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  trackingNumber?: string;
}

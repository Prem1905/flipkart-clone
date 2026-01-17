export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  category: string;
  stock: number;
  rating: number;      
  reviews: number;     
  images: string[];
  createdAt: string;
}

export interface IProduct {
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  unit: string; // kg, liter
  isOrganic: boolean;
  origin: string; // e.g., Rajshahi
  harvestDate?: Date;
  images: string[];
  category: string;
}
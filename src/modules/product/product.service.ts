import { connectToDatabase } from "@/lib/db";
import { Product } from "./product.model";
import { IProduct } from "./product.interface";

// Create Product
const createProductIntoDB = async (payload: IProduct) => {
  await connectToDatabase();
  // Slug generator logic (simple version)
  const slug = payload.name.toLowerCase().replace(/ /g, "-") + "-" + Date.now();
  const result = await Product.create({ ...payload, slug });
  return result;
};

// Get All Products
const getAllProductsFromDB = async () => {
  await connectToDatabase();
  const result = await Product.find({}).sort({ createdAt: -1 });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
};
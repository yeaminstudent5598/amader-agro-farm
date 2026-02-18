import mongoose, { Schema, model, models } from "mongoose";
import { IProduct } from "./product.interface";

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    unit: { type: String, required: true },
    isOrganic: { type: Boolean, default: true },
    origin: { type: String, required: true },
    harvestDate: { type: Date },
    images: [{ type: String, required: true }],
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export const Product = models.Product || model<IProduct>("Product", ProductSchema);
import { z } from "zod";

export const createProductZodSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().optional(), // We can generate this automatically
  description: z.string().min(10, "Description is too short"),
  price: z.number().positive("Price must be positive"),
  stock: z.number().int().nonnegative(),
  unit: z.enum(["kg", "liter", "piece", "box"]),
  isOrganic: z.boolean().default(true),
  origin: z.string(),
  harvestDate: z.string().optional(), // Date as string from frontend
  images: z.array(z.string().url()).min(1, "At least one image is required"),
  category: z.string(),
});
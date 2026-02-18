import { NextRequest } from "next/server";
import { ProductService } from "./product.service";
import { sendResponse } from "@/shared/sendResponse";
import { createProductZodSchema } from "./product.validation";

// Create Handler
const createProduct = async (req: NextRequest) => {
  const body = await req.json();
  
  // Validation
  const validationResult = createProductZodSchema.safeParse(body);
  if (!validationResult.success) {
    throw new Error(JSON.stringify(validationResult.error.format()));
  }

  const result = await ProductService.createProductIntoDB(validationResult.data as any);

  return sendResponse({
    statusCode: 201,
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

// Get All Handler
const getAllProducts = async (req: NextRequest) => {
  const result = await ProductService.getAllProductsFromDB();

  return sendResponse({
    statusCode: 200,
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProducts,
};
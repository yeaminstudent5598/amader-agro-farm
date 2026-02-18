import { z } from "zod";

// ইউজার যখন প্রোফাইল আপডেট করবে, তখন এই ভ্যালিডেশন কাজ করবে
export const updateUserZodSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  phone: z.string().regex(/^01[3-9]\d{8}$/, "Invalid Bangladeshi phone number").optional(),
  address: z.string().min(5, "Address must be detailed").optional(),
  image: z.string().url().optional(),
});

// এডমিন যখন ইউজারের রোল চেঞ্জ করবে (যদি দরকার হয়)
export const updateUserRoleZodSchema = z.object({
  role: z.enum(["admin", "customer"]),
});
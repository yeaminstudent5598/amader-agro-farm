import { NextRequest } from "next/server";
import { UserService } from "./user.service";
import { catchAsync } from "@/shared/catchAsync"; // আগের তৈরি করা utility
import { sendResponse } from "@/shared/sendResponse";
import { updateUserZodSchema } from "./user.validation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// ১. নিজের প্রোফাইল দেখা (Get Me)
const getMyProfile = catchAsync(async (req: NextRequest) => {
  // সেশন থেকে ইমেইল নেওয়া
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    throw new Error("Unauthorized Access");
  }

  const result = await UserService.getUserByEmail(session.user.email);

  return sendResponse({
    statusCode: 200,
    success: true,
    message: "User profile fetched successfully",
    data: result,
  });
});

// ২. নিজের প্রোফাইল আপডেট করা (Update Me)
const updateMyProfile = catchAsync(async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    throw new Error("Unauthorized Access");
  }

  const body = await req.json();

  // ভ্যালিডেশন চেক
  const validationResult = updateUserZodSchema.safeParse(body);
  if (!validationResult.success) {
    throw new Error(JSON.stringify(validationResult.error.format()));
  }

  const result = await UserService.updateUserProfile(session.user.email, body);

  return sendResponse({
    statusCode: 200,
    success: true,
    message: "User profile updated successfully",
    data: result,
  });
});

// ৩. সব ইউজার দেখা (Admin Only)
const getAllUsers = catchAsync(async (req: NextRequest) => {
  const result = await UserService.getAllUsersFromDB();

  return sendResponse({
    statusCode: 200,
    success: true,
    message: "All users fetched successfully",
    data: result,
  });
});

export const UserController = {
  getMyProfile,
  updateMyProfile,
  getAllUsers,
};
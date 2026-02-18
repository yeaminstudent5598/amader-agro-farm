import { connectToDatabase } from "@/lib/db";
import { User } from "./user.model";
import { IUser } from "./user.interface";

// Google Login-এর সময় এই ফাংশন কল হবে
const saveUserFromSocialLogin = async (payload: Partial<IUser>) => {
  await connectToDatabase();
  
  // চেক করি ইউজার আগে থেকেই আছে কিনা
  const isExist = await User.findOne({ email: payload.email });
  
  if (isExist) {
    return isExist; // থাকলে তাকেই রিটার্ন করো
  }

  // না থাকলে নতুন ইউজার বানাও
  const newUser = await User.create({
    ...payload,
    role: "customer", // ডিফল্ট রোল
    provider: "google",
  });

  return newUser;
};

// প্রোফাইল দেখার জন্য
const getMyProfile = async (email: string) => {
  await connectToDatabase();
  return await User.findOne({ email });
};

const getAllUsersFromDB = async () => {
  await connectToDatabase();
  return await User.find({}).sort({ createdAt: -1 });
};

// ২. সিঙ্গেল ইউজার খোঁজার জন্য (Email দিয়ে)
const getUserByEmail = async (email: string) => {
  await connectToDatabase();
  return await User.findOne({ email });
};

// ৩. ইউজার প্রোফাইল আপডেট করার জন্য
const updateUserProfile = async (email: string, payload: Partial<IUser>) => {
  await connectToDatabase();
  
  // আপডেট করে এবং নতুন ডাটা রিটার্ন করে (new: true)
  const result = await User.findOneAndUpdate(
    { email },
    payload,
    { new: true }
  );
  return result;
};

export const UserService = {
  saveUserFromSocialLogin,
  getMyProfile,
  getAllUsersFromDB,       // নতুন
  getUserByEmail,          // নতুন
  updateUserProfile,
};
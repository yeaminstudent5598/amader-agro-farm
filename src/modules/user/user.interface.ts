export type TUserRole = "admin" | "customer";

export interface IUser {
  name: string;
  email: string;
  image?: string;
  role: TUserRole;
  provider: "google" | "credentials"; // সোশ্যাল না ইমেইল লগইন
  providerId?: string; // Google ID
  createdAt?: Date;
  updatedAt?: Date;
}
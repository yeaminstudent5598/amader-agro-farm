import { NextRequest } from "next/server";
import { UserController } from "@/modules/user/user.controller";
import { catchAsync } from "@/shared/catchAsync";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export const GET = catchAsync(async (req: NextRequest) => {
  // ম্যানুয়াল এডমিন চেক (Middleware বাদে এখানেও করা যায়)
  const session = await getServerSession(authOptions);
  
  // টাইপকাস্টিং করে role বের করছি (যেহেতু আমরা সেশনে role ঢুকিয়েছিলাম)
  if ((session?.user as any)?.role !== "admin") {
     throw new Error("Forbidden: Admins only");
  }

  return UserController.getAllUsers(req);
});
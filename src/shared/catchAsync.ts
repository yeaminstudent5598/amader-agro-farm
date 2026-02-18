import { NextRequest, NextResponse } from "next/server";

type RequestHandler = (req: NextRequest, context?: any) => Promise<NextResponse>;

export const catchAsync = (fn: RequestHandler) => {
  return async (req: NextRequest, context?: any) => {
    try {
      return await fn(req, context);
    } catch (error: any) {
      console.error("Error:", error);
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Internal Server Error",
          error: error,
        },
        { status: 500 }
      );
    }
  };
};
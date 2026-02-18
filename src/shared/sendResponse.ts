import { NextResponse } from "next/server";

type IResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
};

export const sendResponse = <T>(data: IResponse<T>) => {
  return NextResponse.json(
    {
      success: data.success,
      message: data.message,
      data: data.data,
    },
    { status: data.statusCode }
  );
};
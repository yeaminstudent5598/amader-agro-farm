"use client";

import { SessionProvider } from "next-auth/react";

// এখানে '=>' মিসিং ছিল
export const NextAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
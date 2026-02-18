import { Metadata } from "next";
import Link from "next/link";
import SocialLogin from "@/components/shared/SocialLogin"; // আগে বানিয়েছিলাম
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Login | Amader Agro Farm",
  description: "Login to access your account",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold text-green-700">
            Welcome Back!
          </CardTitle>
          <CardDescription>
            Sign in to your account to manage orders and profile.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="grid gap-4">
          {/* Social Login Component */}
          <SocialLogin />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          {/* Email/Password Login (Future Scope) */}
          <div className="grid gap-2">
             <Button variant="outline" disabled>
                Email Login (Coming Soon)
             </Button>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-2">
          <div className="text-center text-sm text-gray-500">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-green-600">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-green-600">
              Privacy Policy
            </Link>
            .
          </div>
          <Link href="/" className="mt-2 text-sm text-green-600 hover:underline">
            ← Back to Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
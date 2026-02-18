import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-green-700">
          Amader<span className="text-black">Agro</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-green-600 font-medium">Home</Link>
          <Link href="/shop" className="hover:text-green-600 font-medium">Shop</Link>
          <Link href="/about" className="hover:text-green-600 font-medium">About Us</Link>
          <Link href="/contact" className="hover:text-green-600 font-medium">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/api/auth/signin">
             <Button variant="outline">Login</Button>
          </Link>
          <Link href="/shop">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Order Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
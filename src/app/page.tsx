import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full py-20 md:py-32 bg-green-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 font-semibold w-fit">
                🌿 100% Organic & Fresh
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Taste the Authentic <br />
                <span className="text-green-600">Flavor of Bangladesh</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                We export premium quality Mangoes, Spices, and Organic Vegetables directly from farmers to your doorstep globally.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/shop">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Order Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/export">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Bulk Export Inquiry
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Image Placeholder (পরে এখানে রিয়েল ছবি দেবে) */}
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last bg-gray-200 flex items-center justify-center">
               <span className="text-gray-400">Add Hero Image Here (Mango Garden)</span>
               {/* <Image src="/images/hero-bg.webp" width={800} height={600} alt="Mango" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us?</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              We bridge the gap between Bangladeshi farmers and global consumers with trust.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg shadow-sm">
              <div className="p-3 bg-green-100 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Organic & Chemical Free</h3>
              <p className="text-gray-500 mt-2">Sourced directly from certified gardens. No harmful preservatives.</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg shadow-sm">
              <div className="p-3 bg-green-100 rounded-full mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Global Export Standard</h3>
              <p className="text-gray-500 mt-2">We follow international packaging & shipping standards (FOB/CIF).</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg shadow-sm">
              <div className="p-3 bg-green-100 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Trusted & Transparent</h3>
              <p className="text-gray-500 mt-2">Track your order from farm to fork. 100% money-back guarantee.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
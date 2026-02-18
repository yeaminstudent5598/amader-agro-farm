const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">AmaderAgroFarm</h3>
          <p className="text-slate-400">
            Bringing the taste of Bangladesh to the world. 
            Premium Organic Mangoes & Agro products.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Shop</li>
            <li>Export Policy</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-slate-400">Shariatpur, Dhaka, Bangladesh</p>
          <p className="text-slate-400">Phone: +880 1641-801705</p>
          <p className="text-slate-400">Email: support@amaderagro.com</p>
        </div>
      </div>
      <div className="text-center mt-10 text-slate-500 text-sm border-t border-slate-800 pt-4">
        © {new Date().getFullYear()} Amader Agro Farm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
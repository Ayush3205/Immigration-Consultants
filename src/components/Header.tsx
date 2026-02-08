import { Menu, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#ff4500] text-white py-2">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:info@esante.com.au" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={16} />
              info@esante.com.au
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            +44 1234 5678 90
          </div>
        </div>
      </div>

      <nav className="bg-black/40 backdrop-blur-md text-white py-4 border-b border-white/10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-[#ff4500]">
            esante
          </a>

          <div className="hidden lg:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-sm hover:text-[#ff4500] transition-colors">About Us</a>
            <a href="#" className="text-sm hover:text-[#ff4500] transition-colors">Our Services</a>
            <a href="#" className="text-sm hover:text-[#ff4500] transition-colors">Why Australia</a>
            <a href="#" className="text-sm hover:text-[#ff4500] transition-colors">Tools & Resources</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-[#00a86b] text-white px-6 py-2 rounded hover:bg-[#008c56] transition-colors text-sm font-medium">
              Book 1:1 Counselling
            </button>
            <button className="lg:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

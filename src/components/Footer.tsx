import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#ff4500] text-2xl font-bold mb-4">esante</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for Australian migration and settlement services.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Visa Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Migration Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Education Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Settlement Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Immigration News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Esante. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ff4500] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-rose-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <span className="text-2xl font-bold text-white">
                CurlCare
              </span>
            </Link>
            <p className="text-amber-100 mb-6 max-w-md leading-relaxed">
              Celebrating the beauty of natural curls with products that love and nourish every curl pattern. 
              Your journey to healthy, beautiful curls starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-amber-100 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-amber-100 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/hair-quiz" className="text-amber-100 hover:text-white transition-colors">
                  Hair Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-100 text-sm">
            © 2024 CurlCare. All rights reserved. Made with ❤️ for the curly community.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-amber-100 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-amber-100 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
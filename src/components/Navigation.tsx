import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm">
              VOA
            </div>
            <span className="font-bold text-xl hidden sm:block">VALUE OVER ASSETS</span>
            <span className="font-bold text-xl sm:hidden">VOA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isActivePath(item.path) ? 'text-black border-b-2 border-black pb-1' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black relative">
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
              <ShoppingBag className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-black"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isActivePath(item.path) ? 'text-black font-bold' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
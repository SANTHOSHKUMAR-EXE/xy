
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled ? 'bg-black/50 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-vastav-purple animate-pulse-slow" />
          <span className="text-xl font-semibold tracking-tight text-white">Vastav</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link 
            to="/technology" 
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Technology
          </Link>
          <Link 
            to="/pricing" 
            className="text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-gradient-blue-purple hover:opacity-90 transition-opacity" 
            size="sm"
          >
            Try Vastav <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-vastav-purple transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg animate-fade-in p-4">
          <nav className="flex flex-col space-y-4 mb-6">
            <Link 
              to="/" 
              className="text-sm text-zinc-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm text-zinc-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/technology" 
              className="text-sm text-zinc-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm text-zinc-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </nav>
          <Button 
            className="w-full bg-gradient-blue-purple hover:opacity-90 transition-opacity" 
            size="sm"
          >
            Try Vastav <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

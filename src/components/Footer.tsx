
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-vastav-purple" />
              <span className="text-xl font-semibold tracking-tight text-white">Vastav</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6">
              Advanced AI-driven deepfake detection for a more secure digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-zinc-400 hover:text-white transition-colors text-sm">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-zinc-400 hover:text-white transition-colors text-sm">Pricing</Link>
              </li>
              <li>
                <Link to="/technology" className="text-zinc-400 hover:text-white transition-colors text-sm">Technology</Link>
              </li>
              <li>
                <Link to="/api" className="text-zinc-400 hover:text-white transition-colors text-sm">API</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/documentation" className="text-zinc-400 hover:text-white transition-colors text-sm">Documentation</Link>
              </li>
              <li>
                <Link to="/blog" className="text-zinc-400 hover:text-white transition-colors text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/guides" className="text-zinc-400 hover:text-white transition-colors text-sm">Guides</Link>
              </li>
              <li>
                <Link to="/support" className="text-zinc-400 hover:text-white transition-colors text-sm">Support</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-zinc-400 hover:text-white transition-colors text-sm">Careers</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Vastav. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

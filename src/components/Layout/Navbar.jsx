import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, LogOut, Home, Briefcase, FolderKanban, Mail, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Projects', path: '/projects', icon: FolderKanban },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-md w-full">
      {/* Top Section (Blue) */}
      <div className="w-full bg-blue-500 py-2 px-6 flex justify-between items-center text-white border-b border-blue-600">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest">Construction Experts in Rwanda</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors no-underline text-xs font-bold">
            <Phone size={14} />
            <span>+250 123 456 789</span>
          </a>
        </div>
      </div>

      {/* Main Navigation (Full-Width Large Buttons) */}
      <div className="w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {/* Logo Section (Acts as a prominent block) */}
        <div className="bg-blue-600 md:w-64 flex items-center justify-center py-6 px-8 group shrink-0">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-blue-600 font-black text-2xl shadow-lg transform group-hover:rotate-12 transition-transform">
              S
            </div>
            <span className="text-2xl font-black text-white tracking-tighter uppercase">SPID</span>
          </Link>
        </div>

        {/* Dynamic Full-Width Grid of Buttons */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-4 lg:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`flex-grow flex flex-col items-center justify-center py-6 px-4 no-underline transition-all group ${
                isActive(link.path) 
                ? 'bg-yellow-500 text-blue-600' 
                : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              <link.icon className={`mb-2 transition-transform group-hover:scale-110 ${
                isActive(link.path) ? 'text-blue-600' : 'text-blue-500'
              }`} size={24} />
              <span className="text-sm font-black uppercase tracking-wider">{link.name}</span>
            </Link>
          ))}
          
          {isAuthenticated && (
            <Link 
              to="/admin" 
              className={`flex-grow flex flex-col items-center justify-center py-6 px-4 no-underline transition-all bg-green-500 text-white hover:bg-green-600 ${
                isActive('/admin') ? 'ring-inset ring-4 ring-yellow-400' : ''
              }`}
            >
              <CheckCircle className="mb-2" size={24} />
              <span className="text-sm font-black uppercase tracking-wider">Dashboard</span>
            </Link>
          )}
        </div>

        {/* Action Section (Logout/Quote) */}
        <div className="md:w-64 flex items-center justify-center p-4 bg-gray-50 md:bg-white">
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black py-4 px-6 rounded-2xl transition-all shadow-lg"
            >
              <LogOut size={20} />
              <span className="uppercase tracking-widest text-sm">Logout</span>
            </button>
          ) : (
            <Link 
              to="/contact" 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl no-underline"
            >
              <span className="uppercase tracking-widest text-sm">Get Quote</span>
              <ArrowRight size={20} className="text-yellow-400" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
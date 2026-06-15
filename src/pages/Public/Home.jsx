import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              S
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SPID Construction</h1>
              <p className="text-xs text-gray-500 -mt-1">Building Tomorrow</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-blue-600 transition-colors">View Projects</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all font-medium"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 text-lg">
            <Link to="/services" className="block py-2">Services</Link>
            <Link to="/projects" className="block py-2">View Projects</Link>
            <Link to="/about" className="block py-2">About Us</Link>
            <Link to="/contact" className="block py-2">Contact Us</Link>
            
            <Link 
              to="/contact" 
              className="block mt-6 bg-blue-600 text-white text-center py-4 rounded-xl font-medium"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Building Excellence,<br />
              <span className="text-yellow-400">Shaping the Future</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Professional construction services with integrity, precision, and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects"
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all"
              >
                View Our Projects
              </Link>
              <Link 
                to="/contact"
                className="border border-white/70 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="border border-gray-100 p-8 rounded-3xl hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
              <div className="text-gray-600 leading-relaxed min-h-[140px]">
                {/* Add your Mission text here later */}
              </div>
            </div>

            {/* Vision */}
            <div className="border border-gray-100 p-8 rounded-3xl hover:border-yellow-200 transition-all group">
              <div className="w-14 h-14 bg-yellow-100 text-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                👁️
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h3>
              <div className="text-gray-600 leading-relaxed min-h-[140px]">
                {/* Add your Vision text here later */}
              </div>
            </div>

            {/* Values */}
            <div className="border border-gray-100 p-8 rounded-3xl hover:border-green-200 transition-all group">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                💎
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Values</h3>
              <div className="text-gray-600 leading-relaxed min-h-[140px]">
                {/* Add your Values text here later */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's bring your project to life with excellence and precision.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-12 py-5 rounded-2xl transition-all"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}
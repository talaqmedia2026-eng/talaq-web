import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Youtube, Facebook, ArrowUpRight } from 'lucide-react';
import { Button } from './UI';

const NAV_ITEMS = [
  { label: 'الرئيسية', path: '/' },
  { label: 'من نحن', path: '/about' },
  { label: 'ماذا نقدم', path: '/services' },
  { label: 'المعرض', path: '/portfolio' },
  { label: 'تطوع معنا', path: '/volunteer' },
  { label: 'تواصل معنا', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4 border-b border-gray-100'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="تَلاق لوجو" className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${location.pathname === item.path ? 'text-primary-600' : 'text-gray-600'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/volunteer">
              <Button size="sm" variant="primary">انضم إلينا</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col p-4 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`py-3 px-4 rounded-lg text-base font-medium ${location.pathname === item.path ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 px-4">
             <Link to="/volunteer">
              <Button fullWidth>انضم إلينا</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center text-white font-bold">ت</div>
              <span className="text-2xl font-bold text-white">تَلاق</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              منصة رقمية تهدف إلى بناء إعلام قوي يخدم القرآن والدين، ويدعم مراكز تحفيظ القرآن عبر التوثيق، التدريب، وصناعة المحتوى.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors"><Youtube size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors"><Facebook size={16} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary-500 transition-colors text-sm">من نحن</Link></li>
              <li><Link to="/services" className="hover:text-primary-500 transition-colors text-sm">خدماتنا</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary-500 transition-colors text-sm">أعمالنا</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary-500 transition-colors text-sm">التطوع</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary-500">العنوان:</span>
                <span>المبنى المركزي، الطابق الثالث</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500">البريد:</span>
                <span>info@talaq.media</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500">الهاتف:</span>
                <span dir="ltr">+966 50 000 0000</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">كن جزءاً من الأثر</h3>
            <p className="text-xs text-gray-500 mb-4">انضم لقائمة المتطوعين أو تابع أخبارنا</p>
            <Link to="/contact">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600 w-full justify-between group">
                تواصل معنا الآن <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col items-center gap-6 mb-8">
            <img src="/logo.png" alt="تَلاق لوجو" className="h-16 w-auto object-contain" />
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-white leading-none">تَلاق</span>
              <span className="text-xs text-gray-500 font-medium">الإعلام المركزي</span>
            </div>
            <p className="text-gray-400 text-sm text-center max-w-md">
              منصة رقمية تهدف إلى بناء إعلام قوي يخدم القرآن والدين، ويدعم مراكز تحفيظ القرآن عبر التوثيق، التدريب، وصناعة المحتوى.
            </p>
          </div>
          <div className="text-center text-sm text-gray-500 border-t border-gray-800 pt-8">
            © {new Date().getFullYear()} منصة تلاق | الإعلام المركزي. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
};

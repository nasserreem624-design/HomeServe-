
import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'من نحن', id: 'about' },
    { name: 'الخدمات', id: 'services' },
    { name: 'باقات الأسعار', id: 'pricing' },
    { name: 'الأسئلة الشائعة', id: 'faq' },
  ];

  const handleLinkClick = (id: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      // انتظار بسيط للتأكد من تحميل الصفحة الرئيسية قبل التمرير
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className={`transition-all duration-300 ${scrolled || currentView !== 'home' ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { onNavigate('home'); window.scrollTo({top:0, behavior:'smooth'}); }}>
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Home className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-blue-900 tracking-tighter">HomeServe<span className="text-orange-500">Pro</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleLinkClick(link.id)}
                className="font-bold text-slate-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('booking-form')}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              احجز دلوقتي
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-slate-200 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-lg font-bold text-right text-slate-800"
                  >
                    {link.name}
                  </button>
                ))}
                <button 
                  onClick={() => handleLinkClick('booking-form')}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl text-center font-bold text-lg shadow-md cursor-pointer"
                >
                  احجز دلوقتي
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;

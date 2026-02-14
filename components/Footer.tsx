
import React from 'react';
import { Home, Facebook, Instagram, Twitter, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, PHONE_DISPLAY, EMAIL_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'من نحن', id: 'about' },
    { label: 'الخدمات', id: 'services' },
    { label: 'باقات الأسعار', id: 'pricing' },
    { label: 'انضم إلينا كفني', id: 'join' },
    { label: 'الأسئلة الشائعة', id: 'faq' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20 text-right">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8 justify-end">
              <span className="text-3xl font-black tracking-tighter">HomeServe<span className="text-orange-500">Pro</span></span>
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-md mr-auto">
              المنصة رقم ١ في سوهاج لخدمات الصيانة المنزلية المتكاملة. بنهتم بكل تفصيلة في بيتك عشان تعيش في راحة وأمان.
            </p>
            <div className="flex gap-6 justify-end">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4">روابط سريعة</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleScroll(link.id)}
                    className="text-slate-400 hover:text-white transition-colors text-lg"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4 text-right">تواصل معنا</h4>
            <ul className="space-y-6">
              <li>
                <a href={`tel:${PHONE_DISPLAY}`} className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors justify-end group">
                  <span className="text-lg" dir="ltr">{PHONE_DISPLAY}</span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-green-400 transition-colors justify-end group">
                  <span className="text-lg">واتساب</span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-green-400 group-hover:bg-green-600/20 transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors justify-end group">
                  <span className="text-lg">{EMAIL_ADDRESS}</span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-400 justify-end group">
                <span className="text-lg">سوهاج، مصر</span>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <p className="text-slate-500 font-bold">
            جميع الحقوق محفوظة © ٢٠٢٤ هوم سيرف برو
          </p>
          <div className="flex gap-8 text-slate-500 font-bold">
            <a href="#" className="hover:text-white">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white">شروط الاستخدام</a>
          </div>
          <p className="text-slate-600 text-sm">Built for peace of mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Home, Facebook, Instagram, Twitter, Phone, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, PHONE_DISPLAY } from '../constants';
import EmailSmartLink from './EmailSmartLink';

const Footer: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${PHONE_DISPLAY}`;
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
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-[1000]">
        <div className="grid md:grid-cols-4 gap-16 mb-20 text-right">
          <div className="col-span-1 md:col-span-2 relative z-10">
            <div className="flex items-center gap-2 mb-8 justify-end">
              <span className="text-3xl font-black tracking-tighter">HomeServe<span className="text-orange-500">Pro</span></span>
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-md mr-auto">
              المنصة رقم ١ في سوهاج لخدمات الصيانة المنزلية المتكاملة. بنهتم بكل تفصيلة في بيتك عشان تعيش في راحة وأمان.
            </p>
            <div className="flex gap-6 justify-end pointer-events-auto">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer relative z-20">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4">روابط سريعة</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleScroll(link.id)}
                    className="text-slate-400 hover:text-white transition-colors text-lg cursor-pointer pointer-events-auto relative z-20 w-full text-right"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10">
            <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4 text-right">تواصل معنا</h4>
            <div className="space-y-6 pointer-events-auto flex flex-col items-end">
              
              <button 
                onClick={handlePhoneClick}
                className="flex w-full items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors justify-start group cursor-pointer relative z-[9999]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg hover:underline underline-offset-8" dir="ltr">{PHONE_DISPLAY}</span>
              </button>

              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex w-full items-center gap-4 text-slate-400 hover:text-green-400 transition-colors justify-start group cursor-pointer relative z-[9999]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-green-400 group-hover:bg-green-600/20 transition-all shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-lg hover:underline underline-offset-8">واتساب</span>
              </a>

              <EmailSmartLink />

              <div className="flex w-full items-center gap-4 text-slate-400 justify-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg">سوهاج، مصر</span>
              </div>

            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row-reverse justify-between items-center gap-6 relative z-10">
          <p className="text-slate-500 font-bold">
            جميع الحقوق محفوظة © ٢٠٢٤ هوم سيرف برو
          </p>
          <div className="flex gap-8 text-slate-500 font-bold pointer-events-auto">
            <a href="#" className="hover:text-white cursor-pointer relative z-20">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white cursor-pointer relative z-20">شروط الاستخدام</a>
          </div>
          <p className="text-slate-600 text-sm">Built for peace of mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
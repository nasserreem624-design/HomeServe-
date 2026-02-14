
import React from 'react';
import { Home, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 text-right">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home className="w-6 h-6" />
              </div>
              <span className="text-3xl font-black tracking-tighter">HomeServe<span className="text-orange-500">Pro</span></span>
            </div>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-md">
              المنصة رقم ١ في مصر لخدمات الصيانة المنزلية المتكاملة. بنهتم بكل تفصيلة في بيتك عشان تعيش في راحة وأمان.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4">روابط سريعة</h4>
            <ul className="space-y-4">
              {['من نحن', 'الخدمات', 'باقات الأسعار', 'انضم إلينا كفني', 'الأسئلة الشائعة'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-black mb-8 border-b border-white/10 pb-4">تواصل معنا</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">١٩xxx (رقم موحد)</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">support@homeserve.pro</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg">القاهرة، مدينة نصر، مصر</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
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

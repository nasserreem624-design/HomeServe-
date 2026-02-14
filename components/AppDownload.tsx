
import React from 'react';
import { Download, QrCode, ExternalLink, Wrench, Zap, Wind, Sparkles, MapPin, Search } from 'lucide-react';

const AppDownload: React.FC = () => {
  // روابط المتاجر (يمكن استبدالها بالروابط النهائية لاحقاً)
  const APP_STORE_URL = "https://apps.apple.com/app/homeserve-pro"; 
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.homeserve.pro";
  const APP_LINK = "https://homeserve-pro.vercel.app/download"; // رابط صفحة التحميل الموحد

  return (
    <section className="py-24 relative overflow-hidden" id="app-download">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Grid Background Effect */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-pattern)" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-right">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">كل خدمات بيتك <br /><span className="text-orange-400">في جيبك!</span></h2>
              <p className="text-xl text-blue-100 mb-12 max-w-xl">
                حمّل تطبيق HomeServe Pro دلوقتي وتابع حجوزاتك، واعرف ميعاد وصول الفني بالدقيقة، واستفيد بخصومات حصرية لمستخدمي التطبيق بس.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-12 justify-end lg:justify-start">
                <a 
                  href={PLAY_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black flex items-center gap-4 hover:scale-105 transition-all shadow-xl group"
                >
                  <Download className="w-6 h-6 text-blue-600 group-hover:animate-bounce" />
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-500 font-bold uppercase">Get it on</span>
                    <span className="text-lg">Google Play</span>
                  </div>
                </a>
                <a 
                  href={APP_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-4 hover:scale-105 transition-all shadow-xl group border border-white/10"
                >
                  <Download className="w-6 h-6 text-white group-hover:animate-bounce" />
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Download on the</span>
                    <span className="text-lg">App Store</span>
                  </div>
                </a>
              </div>

              {/* Functional QR Code Section */}
              <a 
                href={APP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-5 bg-white/10 rounded-3xl border border-white/20 w-fit backdrop-blur-sm group cursor-pointer hover:bg-white/15 transition-all ml-0 mr-auto lg:mr-0 lg:ml-auto"
              >
                <div className="bg-white p-2 rounded-xl relative overflow-hidden">
                  {/* Real QR Code Style Visualization */}
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
                    <path d="M11 11h2v2h-2z" fill="currentColor" />
                    <path d="M14 11h1v1h-1z" fill="currentColor" />
                    <path d="M9 11h1v1h-1z" fill="currentColor" />
                  </svg>
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg mb-1">امسح الكود للتحميل</p>
                  <p className="text-blue-200 text-sm">التوجيه تلقائي حسب نوع هاتفك</p>
                </div>
              </a>
            </div>

            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              {/* More Realistic Phone Mock for App Download Section */}
              <div className="relative w-[280px] h-[560px] bg-slate-900 rounded-[3.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden animate-float-slow ring-1 ring-white/20">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 w-24 bg-slate-800 mx-auto rounded-b-2xl z-20"></div>
                
                {/* Screen Content - Mimicking the Real App UI */}
                <div className="absolute inset-0 bg-[#f8fafc] p-0 flex flex-col">
                  {/* App Header */}
                  <div className="bg-white pt-10 pb-4 px-6 border-b border-slate-100 flex flex-col items-center">
                    <span className="text-blue-900 font-black text-xl tracking-tighter mb-1">HomeServe<span className="text-orange-500">Pro</span></span>
                    <div className="flex items-center gap-1 text-[9px] text-slate-400 font-bold">
                       <MapPin className="w-3 h-3" />
                       <span>مصر، سوهاج</span>
                    </div>
                  </div>

                  {/* App Content Simulation */}
                  <div className="flex-grow p-4 space-y-5 overflow-hidden">
                    {/* Search */}
                    <div className="bg-slate-100 rounded-xl p-2 px-3 flex items-center justify-between">
                       <Search className="w-3 h-3 text-slate-400" />
                       <span className="text-[10px] text-slate-300 font-bold">عايز تصليح إيه؟</span>
                    </div>
                    
                    {/* Banner */}
                    <div className="h-24 w-full bg-blue-600 rounded-2xl p-3 text-white flex flex-col justify-end">
                       <p className="text-[8px] opacity-70">خصم لفترة محدودة</p>
                       <p className="text-[10px] font-bold leading-tight">٢٠٪ كاش باك على خدمات السباكة</p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'سباكة', icon: <Wrench className="w-4 h-4 text-blue-600"/>, bg: 'bg-blue-50' },
                        { label: 'كهرباء', icon: <Zap className="w-4 h-4 text-yellow-600"/>, bg: 'bg-yellow-50' },
                        { label: 'تكييف', icon: <Wind className="w-4 h-4 text-cyan-600"/>, bg: 'bg-cyan-50' },
                        { label: 'نظافة', icon: <Sparkles className="w-4 h-4 text-green-600"/>, bg: 'bg-green-50' },
                      ].map((item, i) => (
                        <div key={i} className={`${item.bg} p-3 rounded-2xl flex flex-col items-center gap-2 border border-slate-100/50`}>
                           {item.icon}
                           <span className="text-[9px] font-black text-slate-700">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Last Bookings */}
                    <div className="space-y-2">
                       <div className="flex justify-between items-center px-1">
                          <span className="text-[8px] text-blue-600 font-bold">عرض الكل</span>
                          <span className="text-[10px] font-black text-slate-800">آخر الحجوزات</span>
                       </div>
                       <div className="bg-white border border-slate-100 p-3 rounded-2xl shadow-sm flex items-center justify-between">
                          <div className="bg-green-100 text-green-600 text-[8px] px-2 py-0.5 rounded-full font-bold">تم بنجاح</div>
                          <div className="text-right">
                             <p className="text-[10px] font-black">تصليح موتور مياه</p>
                             <p className="text-[8px] text-slate-400 font-bold">أمس، الساعة ٤ عصراً</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* App Bottom Nav */}
                  <div className="h-14 border-t border-slate-100 bg-white flex justify-around items-center px-6">
                    <div className="w-4 h-4 rounded-full bg-slate-100"></div>
                    <div className="w-4 h-4 rounded-full bg-slate-100"></div>
                    <div className="w-6 h-6 rounded-xl bg-blue-600"></div>
                    <div className="w-4 h-4 rounded-full bg-slate-100"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-500 rounded-full blur-[100px] opacity-30"></div>
              <div className="absolute top-1/2 -left-12 w-24 h-24 bg-blue-400 rounded-full blur-[60px] opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

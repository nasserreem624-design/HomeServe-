
import React from 'react';
import { Download, QrCode } from 'lucide-react';

const AppDownload: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-right">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">كل خدمات بيتك <br /><span className="text-orange-400">في جيبك!</span></h2>
              <p className="text-xl text-blue-100 mb-12 max-w-xl">
                حمّل تطبيق HomeServe Pro دلوقتي وتابع حجوزاتك، واعرف ميعاد وصول الفني بالدقيقة، واستفيد بخصومات حصرية لمستخدمي التطبيق بس.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-12">
                <button className="bg-white text-slate-900 px-8 py-5 rounded-2xl font-black flex items-center gap-4 hover:scale-105 transition-all shadow-xl">
                  <Download className="w-6 h-6" />
                  <div className="text-right">
                    <span className="block text-xs text-slate-500 font-bold uppercase">Get it on</span>
                    <span className="text-lg">Google Play</span>
                  </div>
                </button>
                <button className="bg-slate-900 text-white px-8 py-5 rounded-2xl font-black flex items-center gap-4 hover:scale-105 transition-all shadow-xl">
                  <Download className="w-6 h-6" />
                  <div className="text-right">
                    <span className="block text-xs text-slate-400 font-bold uppercase">Download on the</span>
                    <span className="text-lg">App Store</span>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-6 p-4 bg-white/10 rounded-3xl border border-white/20 w-fit">
                <div className="bg-white p-2 rounded-xl">
                  <QrCode className="w-16 h-16 text-slate-900" />
                </div>
                <div>
                  <p className="font-bold text-lg">امسح الكود للتحميل</p>
                  <p className="text-blue-200">متاح للأندرويد والأيفون</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-72 h-[550px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden animate-float">
                <div className="absolute top-0 inset-x-0 h-6 w-32 bg-slate-800 mx-auto rounded-b-2xl z-20"></div>
                <div className="absolute inset-0 bg-white p-4 pt-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                    <div className="h-4 w-24 bg-slate-100 rounded-full"></div>
                    <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-40 w-full bg-blue-50 rounded-2xl"></div>
                    <div className="h-4 w-full bg-slate-100 rounded-full"></div>
                    <div className="h-4 w-2/3 bg-slate-100 rounded-full"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-slate-50 rounded-2xl"></div>
                      <div className="h-24 bg-slate-50 rounded-2xl"></div>
                      <div className="h-24 bg-slate-50 rounded-2xl"></div>
                      <div className="h-24 bg-slate-50 rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-500 rounded-full blur-[100px] opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;

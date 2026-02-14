
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  X, 
  Bell, 
  Wrench, 
  Zap, 
  Wind, 
  Sparkles, 
  Hammer, 
  Paintbrush, 
  Settings 
} from 'lucide-react';

const HeroPhoneMock: React.FC = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAlertDismissed, setIsAlertDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // إعدادات التوقيت للتنبيه داخل الهاتف
  const SHOW_DELAY = 1200;
  const VISIBLE_DURATION = 3500;
  const HIDDEN_DURATION = 2500;

  useEffect(() => {
    if (isAlertDismissed) return;
    const initialTimer = setTimeout(() => setIsAlertVisible(true), SHOW_DELAY);
    return () => clearTimeout(initialTimer);
  }, [isAlertDismissed]);

  useEffect(() => {
    if (isAlertDismissed || isHovered) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    if (isAlertVisible) {
      timerRef.current = setTimeout(() => setIsAlertVisible(false), VISIBLE_DURATION);
    } else {
      timerRef.current = setTimeout(() => setIsAlertVisible(true), HIDDEN_DURATION);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isAlertVisible, isHovered, isAlertDismissed]);

  const promoLines = [
    "دلوقتي تقدر تقسط خدمات التأسيس الكبيرة",
    "ومش هتدفع رسوم خفية أو إكراميات",
    "والكشف مجاني لو نفذت الخدمة"
  ];

  const services = [
    { icon: <Wrench className="w-5 h-5" />, label: "سباكة", color: "text-blue-500" },
    { icon: <Zap className="w-5 h-5" />, label: "كهرباء", color: "text-yellow-500" },
    { icon: <Wind className="w-5 h-5" />, label: "تكييف", color: "text-cyan-500" },
    { icon: <Sparkles className="w-5 h-5" />, label: "تنظيف", color: "text-green-500" },
    { icon: <Settings className="w-5 h-5" />, label: "صيانة", color: "text-slate-500" },
    { icon: <Paintbrush className="w-5 h-5" />, label: "دهان", color: "text-orange-500" },
    { icon: <Hammer className="w-5 h-5" />, label: "نجارة", color: "text-amber-700" },
  ];

  return (
    <div 
      className="relative w-full max-w-[320px] mx-auto lg:mx-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* جسم الهاتف (Phone Frame) */}
      <div className="relative bg-slate-900 p-3 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.25)] border-[8px] border-slate-800 overflow-hidden ring-1 ring-white/10">
        
        {/* Notch / Speaker */}
        <div className="absolute top-0 inset-x-0 h-8 bg-slate-800 w-32 mx-auto rounded-b-3xl z-40 flex items-center justify-center">
          <div className="w-10 h-1.5 bg-slate-700 rounded-full"></div>
        </div>

        {/* شاشة الهاتف (In-App UI) */}
        <div className="bg-[#fdfaf2] rounded-[2.8rem] h-[560px] relative overflow-hidden flex flex-col pt-10">
          
          {/* Header UI */}
          <div className="px-6 py-4 flex justify-between items-center border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Settings className="w-4 h-4 animate-spin-slow" />
              </div>
              <span className="font-black text-sm text-blue-900 tracking-tighter">HomeServe<span className="text-orange-500">Pro</span></span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100"></div>
          </div>

          {/* In-App Alert: Breaking News Section */}
          <div className="p-4 relative min-h-[160px]">
            <AnimatePresence mode="wait">
              {isAlertVisible && !isAlertDismissed && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-3xl p-4 shadow-xl shadow-blue-900/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  
                  {/* Alert Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#f97316] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-lg">
                        خبر عاجل
                      </span>
                      <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></div>
                    </div>
                    <button 
                      onClick={() => { setIsAlertVisible(false); setIsAlertDismissed(true); }}
                      className="text-white/40 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Alert Content */}
                  <div className="space-y-2">
                    {promoLines.map((line, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="bg-white rounded-full p-0.5 mt-0.5 shadow-sm shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                        </div>
                        <p className="text-[11px] font-bold text-white leading-tight">
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {!isAlertVisible && !isAlertDismissed && (
              <div className="h-40 flex items-center justify-center text-slate-300 italic text-sm font-medium">
                <Bell className="w-5 h-5 mr-2 opacity-50" />
                انتظر العروض الجديدة...
              </div>
            )}

            {isAlertDismissed && (
              <div className="bg-orange-50 p-4 rounded-3xl border border-orange-100 flex items-center justify-center text-orange-600 font-black text-xs">
                تم الاستلام، شكراً ليك!
              </div>
            )}
          </div>

          {/* Services Section */}
          <div className="px-6 flex-grow overflow-y-auto pb-6 custom-scrollbar">
            <h3 className="text-lg font-black text-slate-900 mb-4 text-right">اختار الخدمة</h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, i) => (
                <div 
                  key={i} 
                  className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center gap-2 hover:border-blue-200 transition-all cursor-pointer group"
                >
                  <div className={`${service.color} group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-black text-slate-800">{service.label}</span>
                </div>
              ))}
            </div>

            {/* In-App CTA */}
            <div className="mt-8 bg-blue-50 p-5 rounded-3xl border border-blue-100 text-center">
              <p className="text-xs font-bold text-blue-600 mb-2">محتاج معاينة مجانية؟</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-black shadow-lg shadow-blue-200 active:scale-95 transition-all">
                احجز فني دلوقتي
              </button>
            </div>
          </div>

          {/* Home Bar */}
          <div className="h-1.5 w-24 bg-slate-200 mx-auto mb-3 rounded-full shrink-0"></div>
        </div>
      </div>

      {/* زينة عائمة حول الهاتف */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl text-blue-600 border border-blue-50 z-10"
      >
        <Wrench className="w-8 h-8" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-6 p-4 bg-white rounded-2xl shadow-xl text-orange-500 border border-orange-50 z-10"
      >
        <Hammer className="w-8 h-8" />
      </motion.div>
    </div>
  );
};

export default HeroPhoneMock;

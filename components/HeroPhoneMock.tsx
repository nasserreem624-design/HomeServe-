
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
  Settings,
  User,
  Search,
  MapPin
} from 'lucide-react';

const HeroPhoneMock: React.FC = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAlertDismissed, setIsAlertDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const SHOW_DELAY = 1200;
  const VISIBLE_DURATION = 3500;
  const HIDDEN_DURATION = 2500;

  const promoLines = [
    "تقسيط خدمات التأسيس الكبيرة متاح دلوقتي",
    "مفيش أي رسوم خفية أو إكراميات إجبارية",
    "الكشف مجاني تماماً لو نفذت الخدمة"
  ];

  const services = [
    { icon: <Wrench className="w-5 h-5" />, label: "سباكة", color: "bg-blue-50 text-blue-600" },
    { icon: <Zap className="w-5 h-5" />, label: "كهرباء", color: "bg-yellow-50 text-yellow-600" },
    { icon: <Wind className="w-5 h-5" />, label: "تكييف", color: "bg-cyan-50 text-cyan-600" },
    { icon: <Sparkles className="w-5 h-5" />, label: "نظافة", color: "bg-green-50 text-green-600" },
    { icon: <Paintbrush className="w-5 h-5" />, label: "نقاشة", color: "bg-orange-50 text-orange-600" },
    { icon: <Hammer className="w-5 h-5" />, label: "نجارة", color: "bg-amber-50 text-amber-700" },
  ];

  return (
    <div 
      className="relative w-full max-w-[320px] mx-auto lg:mx-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* جسم الهاتف (Phone Frame) */}
      <div className="relative bg-slate-900 p-3 rounded-[3.5rem] shadow-[0_50px_100px_rgba(30,64,175,0.2)] border-[8px] border-slate-800 overflow-hidden ring-1 ring-white/10">
        
        {/* Notch Area */}
        <div className="absolute top-0 inset-x-0 h-7 bg-slate-800 w-28 mx-auto rounded-b-2xl z-40 flex items-center justify-center">
          <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
        </div>

        {/* شاشة الهاتف (App UI) */}
        <div className="bg-[#f8fafc] rounded-[2.8rem] h-[580px] relative overflow-hidden flex flex-col pt-8">
          
          {/* Top Status Bar Simulation */}
          <div className="px-8 py-2 flex justify-between items-center opacity-40">
            <span className="text-[10px] font-bold">9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full border border-black/20"></div>
              <div className="w-4 h-2 bg-black/20 rounded-sm"></div>
            </div>
          </div>

          {/* Centered Header with Platform Name */}
          <div className="px-6 py-4 flex flex-col items-center border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-black text-lg text-blue-900 tracking-tighter">HomeServe<span className="text-orange-500">Pro</span></span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
              <MapPin className="w-3 h-3" />
              <span>سوهاج، جرجا</span>
            </div>
          </div>

          {/* App Body Content */}
          <div className="flex-grow overflow-y-auto px-5 py-4 space-y-6 custom-scrollbar">
            
            {/* Search Bar Simulation */}
            <div className="relative">
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-slate-400" />
              </div>
              <div className="w-full bg-slate-100 py-3 pr-10 pl-4 rounded-2xl text-[11px] font-bold text-slate-400 text-right">
                بتدور على خدمة إيه؟
              </div>
            </div>

            {/* Breaking News Alert */}
            <div className="relative min-h-[140px]">
              <AnimatePresence mode="wait">
                {isAlertVisible && !isAlertDismissed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-blue-600 rounded-2xl p-4 shadow-lg shadow-blue-200 relative overflow-hidden"
                  >
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="bg-orange-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full">عاجل</span>
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <button onClick={() => setIsAlertDismissed(true)} className="text-white/40"><X className="w-3 h-3" /></button>
                    </div>
                    <div className="space-y-1.5">
                      {promoLines.slice(0, 2).map((line, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-white/90 mt-0.5" />
                          <p className="text-[10px] font-bold text-white leading-tight text-right">{line}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Categories Grid */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <button className="text-[10px] text-blue-600 font-bold">عرض الكل</button>
                <h3 className="text-sm font-black text-slate-900">أهم الخدمات</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {services.map((service, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-all cursor-pointer`}>
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-700">{service.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Banner */}
            <div className="bg-gradient-to-l from-orange-500 to-orange-600 rounded-2xl p-4 text-white">
              <p className="text-[10px] font-bold opacity-80 mb-1">خصم مستخدمي التطبيق</p>
              <h4 className="text-xs font-black">خصم ٢٠٪ على أول زيارة نظافة</h4>
              <button className="mt-3 bg-white text-orange-600 px-4 py-1.5 rounded-lg text-[9px] font-black">احجز بالخصم</button>
            </div>

          </div>

          {/* Bottom Navigation Bar Simulation */}
          <div className="px-8 py-4 border-t border-slate-100 bg-white flex justify-between items-center shrink-0">
            <div className="flex flex-col items-center gap-1 opacity-30">
              <User className="w-4 h-4" />
              <span className="text-[8px] font-bold">حسابي</span>
            </div>
            <div className="flex flex-col items-center gap-1 opacity-30">
              <Bell className="w-4 h-4" />
              <span className="text-[8px] font-bold">الإشعارات</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-blue-600">
              <Wrench className="w-4 h-4" />
              <span className="text-[8px] font-bold">طلباتي</span>
            </div>
            <div className="flex flex-col items-center gap-1 opacity-30">
              <Settings className="w-4 h-4" />
              <span className="text-[8px] font-bold">الرئيسية</span>
            </div>
          </div>

          {/* Bottom Handle */}
          <div className="h-1 w-20 bg-slate-200 mx-auto mb-2 rounded-full shrink-0"></div>
        </div>
      </div>

      {/* Decorations */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl text-blue-600 border border-blue-50 z-10 hidden lg:block"
      >
        <Wrench className="w-6 h-6" />
      </motion.div>
    </div>
  );
};

export default HeroPhoneMock;


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
  Sparkles 
} from 'lucide-react';

const BreakingNewsPhoneWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // إعدادات التوقيت
  const SHOW_DELAY = 800;        // يظهر بعد 0.8 ثانية
  const VISIBLE_DURATION = 2500; // يبقى ظاهراً 2.5 ثانية
  const HIDDEN_DURATION = 2000;  // يختفي لمدة 2 ثانية

  useEffect(() => {
    if (isDismissed) return;
    const initialTimer = setTimeout(() => setIsVisible(true), SHOW_DELAY);
    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed || isHovered) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    if (isVisible) {
      timerRef.current = setTimeout(() => setIsVisible(false), VISIBLE_DURATION);
    } else {
      timerRef.current = setTimeout(() => setIsVisible(true), HIDDEN_DURATION);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, isHovered, isDismissed]);

  if (isDismissed) return null;

  const promoLines = [
    "دلوقتي تقدر تقسط خدمات التأسيس الكبيرة",
    "ومش هتدفع رسوم خفية أو إكراميات",
    "والكشف مجاني لو نفذت الخدمة"
  ];

  const chips = [
    { icon: <Wrench className="w-3 h-3" />, label: "سباكة" },
    { icon: <Zap className="w-3 h-3" />, label: "كهرباء" },
    { icon: <Wind className="w-3 h-3" />, label: "تكييف" },
    { icon: <Sparkles className="w-3 h-3" />, label: "تنظيف" }
  ];

  return (
    <div className="w-full flex justify-center lg:justify-start">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            // يعتمد على التدفق الطبيعي للـ Grid وليس التموضع المطلق Absolute لضمان عدم التداخل
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full max-w-[280px]"
          >
            {/* إطار الهاتف الصغير (Premium Phone UI) */}
            <div className="relative bg-slate-900 p-2 rounded-[2.8rem] shadow-[0_30px_70px_-15px_rgba(30,64,175,0.4)] border border-slate-800 ring-1 ring-white/5">
              
              {/* الهاتف: سماعة ونوتش صغير */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-slate-800 rounded-full z-20"></div>
              
              {/* شاشة الهاتف داخل الإطار */}
              <div className="bg-gradient-to-br from-[#1e40af] to-indigo-950 rounded-[2.4rem] overflow-hidden relative">
                {/* تأثير زجاجي (Glass Shine) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>

                {/* الجزء العلوي (Header: Breaking News) */}
                <div className="flex items-center justify-between px-5 pt-8 pb-4 bg-black/30 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#f97316] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg shadow-orange-950/20">
                      خبر عاجل
                    </span>
                    <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 text-white/90" />
                    <button 
                      onClick={() => { setIsVisible(false); setIsDismissed(true); }}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* المحتوى (Body) */}
                <div className="p-5 space-y-4">
                  {promoLines.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-1 shrink-0 mt-0.5 shadow-md">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                      </div>
                      <p className="text-[13px] font-bold text-white leading-[1.5] text-right">
                        {line}
                      </p>
                    </div>
                  ))}
                </div>

                {/* شيبس الخدمات (Service Chips) */}
                <div className="px-5 pb-5">
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {chips.map((chip, i) => (
                      <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-white/70">{chip.icon}</span>
                        <span className="text-[9px] font-bold text-white/90">{chip.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* شريط سفلي (Home Indicator) */}
                <div className="h-1.5 w-20 bg-white/20 mx-auto mb-3 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BreakingNewsPhoneWidget;

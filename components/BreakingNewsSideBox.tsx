
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Bell } from 'lucide-react';

const BreakingNewsSideBox: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // إعدادات التوقيت المطلوبة
  const SHOW_DELAY = 800;        // يظهر بعد 800ms من التحميل
  const VISIBLE_DURATION = 2500; // يبقى ظاهراً لمدة 2.5 ثانية
  const HIDDEN_DURATION = 2000;  // يختفي لمدة 2 ثانية

  useEffect(() => {
    if (isDismissed) return;

    // التأخير الأولي عند تحميل الصفحة
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, SHOW_DELAY);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed || isHovered) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    if (isVisible) {
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, VISIBLE_DURATION);
    } else {
      timerRef.current = setTimeout(() => {
        setIsVisible(true);
      }, HIDDEN_DURATION);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, isHovered, isDismissed]);

  if (isDismissed) return null;

  const promoLines = [
    "إمكانية التقسيط لخدمات التأسيس الكبيرة",
    "لا توجد رسوم خفية أو إكراميات إجبارية",
    "لو نفذت الخدمة، رسوم الكشف بتبقى مجانية تماماً!"
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // التموضع: في المساحة الفارغة (اليسار في RTL) بعيداً عن العنوان
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -30, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed md:absolute bottom-6 left-6 md:top-[170px] md:bottom-auto md:left-10 z-[45] w-[280px] md:w-[300px] max-w-[calc(100vw-48px)]"
        >
          {/* تصميم الصندوق البرتقالي (Matching Pro Color) */}
          <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl shadow-[0_20px_50px_rgba(234,88,12,0.3)] border border-white/20 overflow-hidden relative">
            {/* لمعة خفيفة للتصميم البريميوم */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

            {/* Header Area */}
            <div className="flex items-center justify-between p-3.5 bg-black/10 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-black tracking-tighter">
                  خبر عاجل
                </span>
                <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
              </div>
              <div className="flex items-center gap-2.5">
                <Bell className="w-4 h-4 text-white/80" />
                <button 
                  onClick={() => { setIsVisible(false); setIsDismissed(true); }}
                  className="text-white/60 hover:text-white transition-colors p-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 space-y-3.5">
              {promoLines.map((line, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-0.5 shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  </div>
                  <p className="text-[13px] font-bold text-white leading-relaxed text-right">
                    {line}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Mini Footer / Action */}
            <div className="px-4 pb-3">
               <div className="h-[1px] w-full bg-white/10 mb-2"></div>
               <p className="text-[10px] text-white/70 font-bold text-center">HomeServe Pro - دايماً جنبك</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BreakingNewsSideBox;

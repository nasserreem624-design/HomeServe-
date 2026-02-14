
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Bell } from 'lucide-react';

const BreakingNewsHeroBox: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isDismissed) return;

    // البداية: يظهر لأول مرة بعد ثانية واحدة فقط
    const startCycle = () => {
      timerRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    };

    startCycle();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isDismissed]);

  useEffect(() => {
    // لو الماوس عليه، نوقف التايمر ونخليه ظاهر
    if (isDismissed || isHovered || !isVisible) return;

    // يختفي بعد 4 ثواني (سريع نسبياً ليعطي إيحاء العجلة)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      
      // يظهر تاني بعد 6 ثواني (دورة سريعة ونشيطة)
      timerRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 6000);
    }, 4000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isHovered, isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // أنيميشن سريع وخاطف للفت الانتباه
          initial={{ opacity: 0, scale: 0.8, x: -30, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -30 }}
          transition={{ duration: 0.25, ease: "backOut" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative lg:absolute lg:top-24 lg:left-6 z-40 w-full lg:w-[230px] px-4 lg:px-0 mb-6 lg:mb-0"
        >
          {/* تصميم الصندوق: أصغر، برتقالي، ومركز */}
          <div className="bg-[#f97316] rounded-2xl shadow-[0_12px_30px_rgba(249,115,22,0.4)] border border-white/30 overflow-hidden">
            {/* الجزء العلوي - تنبيه */}
            <div className="flex items-center justify-between px-2.5 py-1.5 bg-black/10">
              <div className="flex items-center gap-1.5">
                <div className="bg-white p-1 rounded-md">
                  <Bell className="w-3 h-3 text-[#f97316] animate-pulse" />
                </div>
                <span className="text-white text-[10px] font-black tracking-tighter">
                  خبر عاجل
                </span>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
              </div>
              <button 
                onClick={() => { setIsVisible(false); setIsDismissed(true); }}
                className="text-white/60 hover:text-white transition-colors p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* محتوى الخبر: بلهجة مصرية مخاطبة */}
            <div className="p-3 space-y-2.5">
              {[
                "دلوقتي تقدر تقسط الخدمات التأسيس الكبيرة",
                "ومش هتدفع رسوم خفية أو إكراميات",
                "وهيبقى الكشف مجاني لو نفذت الخدمة"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white/90 mt-0.5 shrink-0" />
                  <p className="text-[11px] font-bold text-white leading-[1.3] text-right">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* زر تفاعل صغير جداً */}
            <div className="px-2.5 pb-2.5">
              <button 
                onClick={() => {
                  const el = document.getElementById('pricing');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center text-[9px] font-black text-[#f97316] py-1.5 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                اعرف أكتر عن التقسيط
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BreakingNewsHeroBox;

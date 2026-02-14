
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  CreditCard, 
  ChevronLeft, 
  Wrench, 
  Hammer, 
  Zap,
  Smartphone,
  Settings
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#fdfaf2] to-[#fffbeb]">
      {/* عناصر خلفية جمالية */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* المحتوى النصي */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-100 text-blue-700 px-5 py-2 rounded-full font-bold mb-8 shadow-sm"
          >
            <Award className="w-5 h-5 text-orange-500" />
            <span>المنصة المعتمدة رقم 1 في مصر</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8">
            بيتك يستحق <br />
            <span className="text-blue-700">احترافية حقيقية</span>
          </h1>
          
          <p className="text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium">
            بنقدملك تجربة صيانة منزلية فاخرة. فنيين بزي موحد، أدوات حديثة، وأسعار محددة بالقرش. مفيش مفاجآت، فيه بس راحة بال.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button className="bg-[#f97316] text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
              احجز دلوقتي
              <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-blue-900 border-2 border-slate-100 px-12 py-6 rounded-2xl font-black text-2xl shadow-sm hover:border-blue-200 hover:bg-slate-50 transition-all">
              عرض السعر
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <ShieldCheck className="w-6 h-6 text-[#10b981]" />, label: 'ضمان ٣٠ يوم' },
              { icon: <Clock className="w-6 h-6 text-blue-600" />, label: 'دعم ٢٤/٧' },
              { icon: <Award className="w-6 h-6 text-orange-500" />, label: 'جودة معتمدة' },
              { icon: <CreditCard className="w-6 h-6 text-indigo-600" />, label: 'دفع إلكتروني' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 bg-white/40 p-5 rounded-3xl border border-white/60 shadow-sm backdrop-blur-sm">
                <div className="p-3 bg-white rounded-2xl shadow-inner">
                  {item.icon}
                </div>
                <span className="text-sm font-black text-slate-800">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* العرض البصري 3D Realistic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring' }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            
            {/* الظل الواقعي على الأرضية */}
            <div className="absolute bottom-20 w-[80%] h-20 bg-slate-900/10 blur-[60px] rounded-full scale-y-50"></div>

            {/* الهاتف الذكي Realistic */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 bottom-10 z-30 transform -rotate-6"
            >
              <div className="w-56 h-[450px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden">
                {/* واجهة التطبيق بالعربي */}
                <div className="absolute inset-0 bg-white p-4 pt-10 flex flex-col gap-4">
                  <div className="flex justify-between items-center px-2">
                    <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                    <div className="h-4 w-24 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {['سباكة', 'كهرباء', 'تكييف', 'تنظيف'].map((s, i) => (
                      <div key={i} className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-50"></div>
                        <span className="text-[10px] font-black text-slate-900">{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto bg-orange-500 text-white py-3 rounded-2xl text-center text-xs font-black shadow-lg">
                    احجز دلوقتي
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 w-24 mx-auto rounded-b-2xl z-40"></div>
              </div>
            </motion.div>

            {/* المنزل Modern Isometric Realistic */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 scale-125"
            >
              <img 
                src="https://img.freepik.com/premium-photo/modern-house-concept-3d-render_53876-134376.jpg" 
                alt="Realistic Modern Home 3D"
                className="w-full h-full object-contain drop-shadow-[0_60px_60px_rgba(0,0,0,0.25)] rounded-[4rem]"
              />
            </motion.div>

            {/* أدوات عائمة Realistic (Brushed Metal) */}
            <motion.div 
              animate={{ y: [-30, 30, -30], rotate: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-5 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl text-slate-700 border border-white"
            >
              <Wrench className="w-12 h-12" />
            </motion.div>

            <motion.div 
              animate={{ y: [30, -30, 30], rotate: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/3 -right-10 p-5 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl text-slate-700 border border-white"
            >
              <Hammer className="w-12 h-12" />
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/2 left-1/4 p-4 bg-orange-100 rounded-full shadow-lg text-orange-500 z-10"
            >
              <Zap className="w-10 h-10 fill-orange-500" />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

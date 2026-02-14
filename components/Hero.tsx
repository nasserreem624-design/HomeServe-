
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
  Zap
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#fdfaf2] to-[#fffbeb]">
      {/* عناصر جمالية ناعمة جداً في الخلفية */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-50 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 text-right">
        {/* المحتوى النصي */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-blue-100 text-blue-700 px-5 py-2 rounded-full font-bold mb-8 shadow-sm"
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

        {/* العرض البصري المحدث (بدون الألوان المزعجة) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring' }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            
            {/* دائرة خلفية ناعمة لتركيز الضوء */}
            <div className="absolute w-[80%] h-[80%] bg-blue-600/5 rounded-full blur-[100px]"></div>

            {/* الهاتف الذكي - المركز البصري */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-30"
            >
              <div className="w-72 h-[580px] bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-800 shadow-[0_50px_100px_rgba(0,0,0,0.2)] relative overflow-hidden">
                <div className="absolute inset-0 bg-white p-6 pt-12 flex flex-col gap-6">
                   <div className="flex justify-between items-center mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                         <Home className="w-6 h-6 text-slate-400" />
                      </div>
                      <div className="h-5 w-32 bg-slate-100 rounded-full"></div>
                   </div>
                   <div className="h-40 w-full bg-blue-50 rounded-[2rem] border border-blue-100 flex items-center justify-center relative overflow-hidden">
                      <Zap className="w-16 h-16 text-blue-600 opacity-20 absolute -right-4 -bottom-4 rotate-12" />
                      <div className="text-center relative z-10">
                         <p className="text-blue-600 font-black text-sm">أهلاً بيك في هوم سيرف</p>
                         <p className="text-xs text-blue-400 font-bold">إحنا جاهزين لمساعدتك</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      {['سباكة', 'كهرباء', 'تكييف', 'نظافة'].map((s, i) => (
                        <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center hover:border-blue-200 transition-colors">
                          <span className="text-xs font-black text-slate-900">{s}</span>
                        </div>
                      ))}
                   </div>
                   <div className="mt-auto bg-blue-600 text-white py-5 rounded-2xl text-center text-sm font-black shadow-lg shadow-blue-100">
                      احجز خدمتك دلوقتي
                   </div>
                </div>
                <div className="absolute top-0 inset-x-0 h-8 bg-slate-800 w-32 mx-auto rounded-b-3xl z-40"></div>
              </div>
            </motion.div>

            {/* أيقونات عائمة بدلاً من الصور الملونة */}
            <motion.div 
              animate={{ y: [-20, 20, -20], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-8 bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl text-blue-600 border border-white z-40"
            >
              <Wrench className="w-16 h-16" />
            </motion.div>

            <motion.div 
              animate={{ y: [20, -20, 20], x: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 left-0 p-8 bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl text-orange-500 border border-white z-40"
            >
              <Hammer className="w-16 h-16" />
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-4 w-20 h-20 bg-green-500/10 rounded-full blur-2xl"
            ></motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

// استيراد أيقونة Home الناقصة
import { Home } from 'lucide-react';

export default Hero;

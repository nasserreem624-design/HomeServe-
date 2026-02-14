
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
  Droplets, 
  Zap,
  Smartphone
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* النص والمحتوى */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-right z-10"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold mb-6">
            <Award className="w-4 h-4" />
            <span>رقم 1 في مصر لخدمات الصيانة المنزلية</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
            بيتك أمانة في إيدينا.. <br />
            <span className="text-blue-600">صلح أي حاجة</span> في ثانية!
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            بنوفّرلك أشطر فنيين متخصصين في السباكة، الكهرباء، التكييف والنظافة بأسعار شفافة وضمان حقيقي يريح بالك.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-[#f97316] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-200 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
              احجز خدمة دلوقتي
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-blue-900 border-2 border-blue-50 px-10 py-5 rounded-2xl font-black text-xl shadow-sm hover:border-blue-200 transition-all">
              اطلب عرض سعر
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck className="w-6 h-6 text-green-500" />, label: 'ضمان ٣٠ يوم' },
              { icon: <Award className="w-6 h-6 text-blue-600" />, label: 'فنيين معتمدين' },
              { icon: <Clock className="w-6 h-6 text-orange-500" />, label: 'خدمة ٢٤/٧' },
              { icon: <CreditCard className="w-6 h-6 text-indigo-500" />, label: 'دفع آمن' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
                {item.icon}
                <span className="text-sm font-bold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* العرض البصري 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* الدائرة الخلفية المشعة */}
            <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-[100px] animate-pulse"></div>
            
            {/* المربع الأزرق الرئيسي - خلفية الصورة */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[5rem] shadow-2xl transform -rotate-2"></div>
            
            {/* حاوية العناصر العائمة */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              
              {/* صورة المنزل Isometric */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20"
              >
                <img 
                  src="https://img.freepik.com/free-vector/modern-isometric-house-illustration_23-2148296316.jpg" 
                  alt="Isometric House"
                  className="w-80 h-80 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] rounded-3xl"
                />
              </motion.div>

              {/* الهاتف الذكي */}
              <motion.div
                animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-4 z-30 flex flex-col items-center"
              >
                <div className="w-32 h-64 bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 inset-x-0 h-4 bg-slate-800 rounded-b-xl z-10 flex justify-center items-center">
                     <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
                   </div>
                   <div className="p-3 pt-6 h-full flex flex-col gap-2">
                     <div className="bg-blue-600 h-2 w-12 rounded-full"></div>
                     <div className="grid grid-cols-2 gap-1 mt-2">
                        {[1,2,3,4].map(i => <div key={i} className="h-8 bg-slate-100 rounded-lg"></div>)}
                     </div>
                     <div className="mt-auto h-8 bg-orange-500 rounded-xl w-full"></div>
                   </div>
                </div>
                <div className="mt-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white text-xs font-bold text-blue-600">
                  تطبيق HomeServe Pro
                </div>
              </motion.div>

              {/* أدوات الصيانة العائمة */}
              <motion.div 
                animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 p-4 bg-white rounded-2xl shadow-xl text-blue-600"
              >
                <Wrench className="w-10 h-10" />
              </motion.div>

              <motion.div 
                animate={{ y: [20, -20, 20], rotate: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-12 p-4 bg-white rounded-2xl shadow-xl text-orange-500"
              >
                <Hammer className="w-10 h-10" />
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 right-10 p-4 bg-blue-100 rounded-full shadow-lg text-blue-400"
              >
                <Zap className="w-8 h-8 fill-blue-400" />
              </motion.div>

              <motion.div 
                animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-1/4 -right-12 p-4 bg-cyan-50 rounded-2xl shadow-xl text-cyan-500"
              >
                <Droplets className="w-10 h-10" />
              </motion.div>

            </div>

            {/* تأثيرات الإضاءة والظلال */}
            <div className="absolute -top-10 -right-10 bg-orange-500 w-32 h-32 rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute -bottom-20 -left-20 bg-blue-400 w-48 h-48 rounded-full blur-[120px] opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

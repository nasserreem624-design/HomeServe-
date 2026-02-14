
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  CreditCard, 
  ChevronLeft,
  MapPin
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import HeroPhoneMock from './HeroPhoneMock';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#fdfaf2] to-[#fffbeb]">
      {/* Background Decorations - Ensure pointer-events-none */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-50 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-right">
          
          {/* Column 1: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-blue-100 text-blue-700 px-5 py-2 rounded-full font-bold mb-8 shadow-sm relative z-20 pointer-events-auto"
            >
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>المنصة المعتمدة في سوهاج - جرجا</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8">
              بيتك يستحق <br />
              <span className="text-blue-700">احترافية حقيقية</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium">
              بنقدملك تجربة صيانة منزلية فاخرة في جرجا. فنيين بزي موحد، أدوات حديثة، وأسعار محددة بالقرش. مفيش مفاجآت، فيه بس راحة بال.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16 relative z-20 pointer-events-auto">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f97316] text-white px-10 py-5 md:px-12 md:py-6 rounded-2xl font-black text-xl md:text-2xl shadow-2xl shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                احجز خدمة دلوقتي
                <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-900 border-2 border-slate-100 px-10 py-5 md:px-12 md:py-6 rounded-2xl font-black text-xl md:text-2xl shadow-sm hover:border-blue-200 hover:bg-slate-50 transition-all cursor-pointer"
              >
                عرض السعر
              </button>
            </div>

            {/* Trust Indicators */}
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
            
            <button 
              onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 flex items-center gap-3 text-blue-600 font-black text-xl hover:underline group cursor-pointer relative z-20 pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              اطلب معاينة مجانية الآن
            </button>
          </motion.div>

          {/* Column 2: The SINGLE Smartphone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: 'spring' }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroPhoneMock />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

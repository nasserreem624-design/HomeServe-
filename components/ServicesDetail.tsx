
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const ServicesDetail: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6">كل خدماتنا بالتفصيل</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            عشان تكون عارف إحنا بنعمل إيه بالظبط، دي قائمة بكل الخدمات اللي بنقدمها وما تشمله كل زيارة.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="md:w-1/3 text-center md:text-right">
                <div className="bg-slate-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto md:mx-0 mb-6">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-4">{service.title}</h2>
                <p className="text-xl text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-[2rem]">
                <h3 className="col-span-full text-2xl font-black text-blue-600 mb-2">إيه اللي بنعمله في الزيارة؟</h3>
                {[
                  'كشف كامل وفحص للمشكلة',
                  'تقديم تقرير فني للعميل',
                  'استخدام قطع غيار أصلية',
                  'تنظيف مكان العمل بعد الانتهاء',
                  'تفعيل الضمان فوراً',
                  'متابعة هاتفية بعد ٢٤ ساعة'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center text-slate-700 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;

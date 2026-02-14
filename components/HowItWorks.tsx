
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calculator, ShieldCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: 'اختار الخدمة وحدد العنوان',
      desc: 'بكل سهولة اختار نوع الصيانة اللي محتاجها وحدد مكانك وميعادك.',
      step: '٠١'
    },
    {
      icon: <Calculator className="w-10 h-10" />,
      title: 'شوف السعر الشفاف وحدد الميعاد',
      desc: 'بنقولك التكلفة التقريبية مسبقاً، مفيش مفاجآت في الحساب.',
      step: '٠٢'
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'الفني يوصل + ضمان ومتابعة',
      desc: 'الفني بيوصل في ميعاده، وبعد ما يخلص بنتابع معاك ونفعل الضمان.',
      step: '٠٣'
    }
  ];

  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">الموضوع أبسط مما تتخيل</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            تلات خطوات بس بيفصلوك عن راحة البال وصيانة بيتك.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-8xl font-black text-white/10 absolute -top-8 right-0 leading-none">
                {step.step}
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 h-full">
                <div className="bg-orange-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-900/50">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

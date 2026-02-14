
import React from 'react';
import { motion } from 'framer-motion';
import { Info, AlertCircle, CheckCircle2 } from 'lucide-react';

const PricingDetail: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-right"
        >
          <h1 className="text-5xl font-black text-slate-900 mb-8">إزاي بنحسب أسعارنا؟</h1>
          <p className="text-2xl text-slate-600 leading-relaxed mb-16">
            مبدأنا الأول هو "مفيش مفاجآت وحشة". السعر اللي بنقوله هو السعر اللي بتدفعه، مع كامل الشفافية في كل قرش.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-blue-50 p-10 rounded-[3rem] border-2 border-blue-100">
              <Info className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-black mb-6">قاعدة الـ "زيارة + شغل"</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                إحنا بنقسم التكلفة لجزئين: <br />
                <strong>١. مصاريف الانتقال والكشف:</strong> ودي ثابتة ومعروفة. <br />
                <strong>٢. تكلفة الإصلاح:</strong> ودي بيحددها الفني بناءً على قائمة أسعار محددة مسبقاً في التطبيق.
              </p>
              <div className="bg-white p-6 rounded-2xl flex items-center gap-4 border border-blue-100">
                <AlertCircle className="text-orange-500 shrink-0" />
                <p className="font-bold text-slate-600">لو نفذت الخدمة، رسوم الكشف بتبقى مجانية تماماً!</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 shadow-xl">
              <h3 className="text-2xl font-black mb-8">مميزات نظامنا المالي</h3>
              <ul className="space-y-6">
                {[
                  'فواتير إلكترونية بتوصلك على الموبايل',
                  'إمكانية التقسيط لخدمات التأسيس الكبيرة',
                  'لا توجد رسوم خفية أو إكراميات إجبارية',
                  'خصومات خاصة للعملاء الدائمين',
                  'تأمين كامل على متعلقات المنزل أثناء العمل'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-lg font-bold text-slate-700">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-[3rem] text-center">
            <h3 className="text-3xl font-black mb-6">عندك مشروع كبير أو تشطيب شقة؟</h3>
            <p className="text-xl text-slate-400 mb-10">إحنا بنقدم معاينات مجانية وعروض أسعار مفصلة للمشاريع الكبيرة.</p>
            <button className="bg-orange-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all">
              اطلب معاينة مجانية
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingDetail;

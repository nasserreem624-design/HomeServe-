
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">باقات تناسب ميزانيتك</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            أسعارنا واضحة من الأول، اختار النظام اللي يريحك. الأسعار المذكورة هي تقديرية لبدء الخدمة.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl border-2 transition-all relative ${
                tier.recommended 
                  ? 'border-blue-600 shadow-2xl shadow-blue-100 bg-white' 
                  : 'border-slate-100 bg-slate-50'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-wider">
                  الأكثر طلباً
                </div>
              )}
              <h3 className="text-2xl font-black text-slate-900 mb-4">{tier.title}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-blue-600">يبدأ من {tier.price}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                tier.recommended 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 hover:bg-blue-700' 
                  : 'bg-white text-slate-900 border border-slate-200 hover:border-blue-300'
              }`}>
                احجز الخدمة
              </button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-slate-900 mb-10 text-center">ليه HomeServe Pro أحسن من "أرقام الشوارع"؟</h3>
          <div className="glass rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-6 font-black text-xl">الميزة</th>
                  <th className="p-6 font-black text-xl text-blue-600 text-center">HomeServe Pro</th>
                  <th className="p-6 font-black text-xl text-slate-400 text-center">أرقام عشوائية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { m: 'شفافية السعر', h: true, o: false },
                  { m: 'ضمان حقيقي', h: true, o: false },
                  { m: 'التزام بالمواعيد', h: true, o: 'ممكن' },
                  { m: 'دعم فني ٢٤/٧', h: true, o: false },
                  { m: 'دفع آمن (فيزا/محافظ)', h: true, o: false },
                  { m: 'فنيين معتمدين', h: true, o: 'غير معروف' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-700">{row.m}</td>
                    <td className="p-6 text-center">
                      <div className="flex justify-center">
                        <Check className="w-8 h-8 text-green-500" />
                      </div>
                    </td>
                    <td className="p-6 text-center text-slate-400 font-bold">
                      {typeof row.o === 'boolean' ? (row.o ? <Check className="w-6 h-6 text-slate-300 mx-auto" /> : <X className="w-8 h-8 text-red-400 mx-auto" />) : row.o}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

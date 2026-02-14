
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">عملاء بيثقوا فينا كل يوم</h2>
            <p className="text-xl text-slate-600 max-w-xl">
              تقييماتنا حقيقية من ناس زيك، جربوا الخدمة ووثقوا في هوم سيرف برو.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-6">
            <div className="text-center">
              <span className="block text-5xl font-black text-blue-600 leading-none">4.8</span>
              <span className="text-slate-400 font-bold">من 5</span>
            </div>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-orange-400 text-orange-400' : 'text-slate-200'}`} />
                ))}
              </div>
              <span className="text-slate-600 font-bold">+10,000 عميل راضي</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-md border border-slate-50 relative group"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-50 opacity-10 group-hover:opacity-100 transition-opacity" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-slate-900">{t.name}</h4>
                  <span className="text-sm text-slate-400">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
          <span className="text-2xl font-black tracking-widest text-slate-400">معتمدين</span>
          <span className="text-2xl font-black tracking-widest text-slate-400">آيزو 9001</span>
          <span className="text-2xl font-black tracking-widest text-slate-400">مراجعات موثقة</span>
          <span className="text-2xl font-black tracking-widest text-slate-400">دفع آمن</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

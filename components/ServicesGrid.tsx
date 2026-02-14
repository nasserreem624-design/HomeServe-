
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ChevronLeft } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">خدماتنا بتغطي كل احتياجاتك</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            إحنا مش بس بنصلح، إحنا بنهتم ببيتك كأنه بيتنا. اختار الخدمة اللي محتاجها وشوف الاحترافية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
              className="glass p-8 rounded-3xl transition-all cursor-pointer group hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-200"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                <span>احجز دلوقتي</span>
                <ChevronLeft className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

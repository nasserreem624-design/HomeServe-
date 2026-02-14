
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">أسئلة بتيجي في بالك</h2>
          <p className="text-xl text-slate-600">
            جمعنا لك كل الأسئلة اللي ممكن تسألها عشان تكون مطمن وإنت بتتعامل معانا.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-8 text-right bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-xl font-black text-slate-800">{faq.question}</span>
                <div className={`transition-transform duration-300 ${activeId === faq.id ? 'rotate-180' : ''}`}>
                  {activeId === faq.id ? <Minus className="text-blue-600" /> : <Plus className="text-blue-600" />}
                </div>
              </button>
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-slate-50 border-t border-slate-100"
                  >
                    <div className="p-8 text-lg text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

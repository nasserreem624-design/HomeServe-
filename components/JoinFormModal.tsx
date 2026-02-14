
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MapPin, GraduationCap, Wrench, FileText, CheckCircle2, Loader2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface JoinFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinFormModal: React.FC<JoinFormModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    education: '',
    specialization: '',
    experience: ''
  });

  const educationOptions = ["أقل من ثانوي", "ثانوي", "دبلوم", "معهد", "جامعي", "دراسات عليا"];
  const specialtyOptions = ["سباكة", "كهرباء", "تكييف", "نقاشة/دهان", "نجارة", "صيانة عامة", "تنظيف"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const message = `طلب انضمام فني جديد:
الاسم: ${formData.name}
الموبايل: ${formData.phone}
العنوان: ${formData.address}
التعليم: ${formData.education}
التخصص: ${formData.specialization}
الخبرة: ${formData.experience || 'لم يتم ذكر تفاصيل'}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.open(whatsappUrl, '_blank');
      setStatus('success');
    } catch (error) {
      setStatus('idle');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[11000]"
          />

          <div className="fixed inset-0 flex items-center justify-center z-[11001] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400">
                  <X className="w-6 h-6" />
                </button>
                <div className="text-right">
                  <h3 className="text-2xl font-black text-slate-900">انضم إلينا</h3>
                </div>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-16 h-16" />
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 mb-4">تم التحويل للواتساب! ✅</h4>
                    <p className="text-xl text-slate-600 font-bold leading-relaxed mb-10">
                      برجاء إرسال الرسالة المفتوحة الآن في تطبيق الواتساب لنتمكن من مراجعة طلبك.
                    </p>
                    <button 
                      onClick={onClose}
                      className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg"
                    >
                      إغلاق
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2 text-right">
                      <label className="font-black text-slate-700 text-sm">الاسم بالكامل</label>
                      <input
                        required
                        type="text"
                        placeholder="اسمك بالكامل"
                        className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all text-right font-bold"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 text-right">
                        <label className="font-black text-slate-700 text-sm">رقم الموبايل</label>
                        <input
                          required
                          type="tel"
                          dir="ltr"
                          placeholder="01xxxxxxxxx"
                          className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all text-left font-bold"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2 text-right">
                        <label className="font-black text-slate-700 text-sm">التخصص</label>
                        <select
                          required
                          className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none text-right font-bold bg-white"
                          value={formData.specialization}
                          onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                        >
                          <option value="">اختر التخصص..</option>
                          {specialtyOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 text-right">
                      <label className="font-black text-slate-700 text-sm">الخبرة (اختياري)</label>
                      <textarea
                        placeholder="احكي لنا باختصار عن شغلك السابق"
                        className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none text-right font-bold min-h-[100px]"
                        value={formData.experience}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          <span>جاري التحويل...</span>
                        </>
                      ) : 'إرسال الطلب عبر واتساب'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default JoinFormModal;

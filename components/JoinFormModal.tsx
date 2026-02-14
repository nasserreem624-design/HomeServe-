"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MapPin, GraduationCap, Wrench, FileText, CheckCircle2, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface JoinFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinFormModal: React.FC<JoinFormModalProps> = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.phone) newErrors.phone = "رقم الموبايل مطلوب";
    else if (!/^01[0125][0-9]{8}$/.test(formData.phone)) newErrors.phone = "رقم غير صحيح";
    if (!formData.address) newErrors.address = "العنوان مطلوب";
    if (!formData.education) newErrors.education = "برجاء اختيار المستوى التعليمي";
    if (!formData.specialization) newErrors.specialization = "برجاء اختيار التخصص";
    if (!formData.experience) newErrors.experience = "برجاء كتابة خبراتك";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      // تجهيز رسالة الواتساب الاحترافية ببيانات الفني
      const message = `أهلاً هوم سيرف برو، أنا فني وحابب أنضم لفريقكم المتميز. دي بياناتي:
- الاسم: ${formData.name}
- الموبايل: ${formData.phone}
- العنوان: ${formData.address}
- المستوى التعليمي: ${formData.education}
- التخصص: ${formData.specialization}
- الخبرات السابقة: ${formData.experience}`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      // محاكاة إرسال وفتح الواتساب
      setTimeout(() => {
        setLoading(false);
        setIsSuccess(true);
        window.open(whatsappUrl, '_blank');
        
        // إغلاق تلقائي بعد فترة قصيرة من النجاح
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', phone: '', address: '', education: '', specialization: '', experience: '' });
          onClose();
        }, 3000);
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[11000]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[11001] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-900"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="text-right">
                  <h3 className="text-2xl font-black text-slate-900">انضم لفريق الفنيين</h3>
                  <p className="text-sm font-bold text-slate-500">سجل بياناتك وهنتواصل معاك فوراً</p>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-2">تم فتح واتساب بنجاح!</h4>
                    <p className="text-slate-600 font-bold leading-relaxed">
                      هنراجع بياناتك وهنتواصل معاك في أقرب وقت ممكن لبدء إجراءات الانضمام.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* الاسم */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 font-black text-slate-700 text-sm justify-end">
                        <span>الاسم بالكامل</span>
                        <User className="w-4 h-4 text-blue-600" />
                      </label>
                      <input
                        type="text"
                        placeholder="اكتب اسمك بالكامل"
                        className={`w-full p-4 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-blue-600 outline-none transition-all text-right font-bold`}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      {errors.name && <p className="text-xs text-red-500 font-bold text-right">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* رقم الموبايل */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 font-black text-slate-700 text-sm justify-end">
                          <span>رقم الموبايل</span>
                          <Phone className="w-4 h-4 text-blue-600" />
                        </label>
                        <input
                          type="tel"
                          dir="ltr"
                          placeholder="01xxxxxxxxx"
                          className={`w-full p-4 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-blue-600 outline-none transition-all text-left font-bold`}
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        {errors.phone && <p className="text-xs text-red-500 font-bold text-right">{errors.phone}</p>}
                      </div>
                      {/* العنوان */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 font-black text-slate-700 text-sm justify-end">
                          <span>العنوان بالتفصيل</span>
                          <MapPin className="w-4 h-4 text-blue-600" />
                        </label>
                        <input
                          type="text"
                          placeholder="المحافظة - المركز"
                          className={`w-full p-4 rounded-xl border ${errors.address ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-blue-600 outline-none transition-all text-right font-bold`}
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                        />
                        {errors.address && <p className="text-xs text-red-500 font-bold text-right">{errors.address}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* التعليم */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 font-black text-slate-700 text-sm justify-end">
                          <span>المستوى التعليمي</span>
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                        </label>
                        <select
                          className={`w-full p-4 rounded-xl border ${errors.education ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-blue-600 outline-none transition-all text-right font-bold bg-white`}
                          value={formData.education}
                          onChange={(e) => setFormData({...formData, education: e.target.value})}
                        >
                          <option value="">اختر..</option>
                          {educationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        {errors.education && <p className="text-xs text-red-500 font-bold text-right">{errors.education}</p>}
                      </div>
                      {/* التخصص */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 font-black text-slate-700 text-sm justify-end">
                          <span>التخصص</span>
                          <Wrench className="w-4 h-4 text-blue-600" />
                        </label>
                        <select
                          className={`w-full p-4 rounded-xl border ${errors.specialization ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-blue-600 outline-none transition-all text-right font-bold bg-white`}
                          value={formData.specialization}
                          onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                        >
                          <option value="">اختر..</option>
                          {specialtyOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        {errors.specialization && <p className="text-xs text-red-500 font-bold text-right">{errors.specialization}</p>}
                      </div>
                    </div>

                    {/* الخبرة */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 font-black text-slate-700 text-sm justify-end">
                        <span>الخبرات السابقة</span>
                        <FileText className="w-4 h-4 text-blue-600" />
                      </label>
                      <textarea
                        placeholder="سنين الخبرة + أماكن الشغل + أهم المهام اللي بتقدر تعملها"
                        className={`w-full p-4 rounded-xl border ${errors.experience ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:border-blue-600 outline-none transition-all text-right font-bold min-h-[120px]`}
                        value={formData.experience}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      ></textarea>
                      {errors.experience && <p className="text-xs text-red-500 font-bold text-right">{errors.experience}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      {loading ? 'جاري التحويل...' : 'تقديم الطلب عبر واتساب'}
                      {!loading && <Send className="w-6 h-6 rotate-180" />}
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Sparkles, PhoneCall } from 'lucide-react';
import { CITIES } from '../constants';

const BookingForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'جرجا (المدينة)',
    service: 'سباكة',
    details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // ملاحظة للمطور: لإرسال الرسالة فعلياً لهاتفك تلقائياً (بدون العميل)
    // يجب استخدام خدمة مثل (UltraMsg API) وإرسال الطلب عبر fetch
    // مثال: fetch('https://api.ultramsg.com/.../messages/chat', { method: 'POST', ... })

    try {
      // محاكاة عملية الإرسال للنظام
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("البيانات المرسلة للنظام:", formData);
      setStatus('success');
    } catch (error) {
      console.error("خطأ في الإرسال");
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="booking-form">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] shadow-2xl border border-white p-8 md:p-16 flex flex-col md:flex-row gap-16 relative">
          
          {/* الجانب النصي */}
          <div className="md:w-1/2 text-right">
            <h2 className="text-4xl font-black text-slate-900 mb-6 italic">جاهز للصيانة؟</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-bold">
              بياناتك بتوصل لغرفة العمليات عندنا في ثواني، وهنتصل بيك فوراً لتأكيد ميعاد الزيارة.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-2xl border border-blue-50 flex items-center gap-4 justify-end">
                <span className="font-bold text-slate-700">تأكيد فوري وتلقائي</span>
                <div className="bg-blue-600 p-2 rounded-lg text-white"><Sparkles className="w-5 h-5" /></div>
              </div>
              <div className="bg-white/50 p-6 rounded-2xl border border-blue-50 flex items-center gap-4 justify-end">
                <span className="font-bold text-slate-700">متابعة هاتفية خلال دقايق</span>
                <div className="bg-blue-600 p-2 rounded-lg text-white"><PhoneCall className="w-5 h-5" /></div>
              </div>
            </div>
          </div>

          {/* صندوق النموذج والنجاح */}
          <div className="md:w-1/2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative min-h-[500px] flex flex-col justify-center border border-slate-100">
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="block font-black text-slate-700 text-right">الاسم بالكامل</label>
                    <input 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all text-right font-bold text-lg" 
                      placeholder="اسمك إيه؟" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-black text-slate-700 text-right">رقم الموبايل</label>
                    <input 
                      required 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all text-left font-bold text-lg" 
                      dir="ltr" 
                      placeholder="01x xxxx xxxx" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block font-black text-slate-700 text-right">المدينة</label>
                      <select 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl border border-slate-200 outline-none bg-white font-bold text-right"
                      >
                        {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-black text-slate-700 text-right">الخدمة</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl border border-slate-200 outline-none bg-white font-bold text-right"
                      >
                        <option value="سباكة">سباكة</option>
                        <option value="كهرباء">كهرباء</option>
                        <option value="تكييف">تكييف</option>
                        <option value="نظافة">نظافة</option>
                      </select>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'loading'} 
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>جاري إرسال طلبك...</span>
                      </>
                    ) : (
                      <>
                        <span>أرسل الطلب الآن</span>
                        <Send className="w-5 h-5 rotate-180" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 className="w-16 h-16" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">تم استلام طلبك بنجاح! ✅</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-bold">
                    طلبك وصل لينا دلوقتي على السيستم. <br /> 
                    هنتصل بيك فوراً على رقم <span className="text-blue-600" dir="ltr">{formData.phone}</span> لتأكيد الموعد.
                  </p>
                  
                  <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <p className="text-slate-400 font-bold text-sm">رقم العملية: #{Math.floor(10000 + Math.random() * 90000)}</p>
                  </div>

                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-blue-600 font-black hover:underline"
                  >
                    عمل حجز آخر
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

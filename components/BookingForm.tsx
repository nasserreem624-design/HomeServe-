
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="booking">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] shadow-2xl border border-white p-8 md:p-16 flex flex-col md:flex-row gap-16 relative">
          <div className="md:w-1/2 text-right">
            <h2 className="text-4xl font-black text-slate-900 mb-6">اطلب صيانة دلوقتي</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              املأ البيانات دي وفريقنا هيتواصل معاك فوراً لتأكيد الحجز أو إرسال عرض سعر مفصل.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                <p className="font-bold text-lg text-slate-700">بنختار لك أقرب فني متخصص لمكانك</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <p className="font-bold text-lg text-slate-700">بنعرفك التكلفة التقديرية قبل التنفيذ</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                <p className="font-bold text-lg text-slate-700">الفني بيوصل في الميعاد المحدد بالظبط</p>
              </div>
            </div>
            <p className="mt-12 text-sm text-slate-400">
              * إحنا بنحترم خصوصيتك، بياناتك في أمان تام ومابتستخدمش غير لتنفيذ طلبك.
            </p>
          </div>

          <div className="md:w-1/2 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="block font-black text-slate-700">الاسم بالكامل</label>
                    <input required type="text" className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="أحمد محمد" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-black text-slate-700">رقم الموبايل</label>
                    <input required type="tel" className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-left" dir="ltr" placeholder="01x xxxx xxxx" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block font-black text-slate-700">المدينة</label>
                      <select className="w-full p-4 rounded-xl border border-slate-200 outline-none bg-white">
                        <option>القاهرة</option>
                        <option>الجيزة</option>
                        <option>التجمع</option>
                        <option>أخرى</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-black text-slate-700">نوع الخدمة</label>
                      <select className="w-full p-4 rounded-xl border border-slate-200 outline-none bg-white">
                        <option>سباكة</option>
                        <option>كهرباء</option>
                        <option>تكييف</option>
                        <option>نظافة</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-black text-slate-700">وصف المشكلة (اختياري)</label>
                    <textarea className="w-full p-4 rounded-xl border border-slate-200 h-24 outline-none" placeholder="مثلاً: عندي تسريب في حوض الحمام.."></textarea>
                  </div>
                  <div className="flex flex-col gap-4 pt-4">
                    <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                      {loading ? 'جاري الإرسال...' : 'احجز زيارة دلوقتي'}
                      {!loading && <Send className="w-6 h-6" />}
                    </button>
                    <button type="button" className="w-full bg-slate-50 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all">اطلب عرض سعر الأول</button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <div className="bg-green-100 p-6 rounded-full text-green-600 mb-8">
                    <CheckCircle2 className="w-20 h-20" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">تم استلام طلبك!</h3>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    فريقنا بيفحص طلبك دلوقتي وهنتواصل معاك في أقل من ١٥ دقيقة لتأكيد الحجز.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">ارسل طلب تاني</button>
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

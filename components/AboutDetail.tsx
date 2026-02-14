
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Heart } from 'lucide-react';

const AboutDetail: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-right"
        >
          <h1 className="text-5xl font-black text-slate-900 mb-8">إحنا مين؟ وحكايتنا بدأت إزاي؟</h1>
          <p className="text-2xl text-slate-600 leading-relaxed mb-12">
            هوم سيرف برو مش مجرد تطبيق للموبايل، إحنا فريق من الشباب المصري اللي قرر يغير شكل خدمات الصيانة في مصر. تعبنا من "الصنايعية" اللي مابيجوش في ميعادهم، والأسعار اللي بتتغير كل شوية، والضمان اللي بيبقى كلام وبس.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-blue-50">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4">رؤيتنا</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                إن كل بيت في مصر يكون فيه "HomeServe Pro" كصديق وفي، يحل أي مشكلة في أسرع وقت وبأعلى جودة ممكنة.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-orange-50">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4">قيمنا</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                الأمانة، الدقة، والالتزام. الصنايعي اللي بيدخل بيتك هو سفير لينا، وعشان كده بنختاره بعناية فائقة.
              </p>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-8 text-center">ليه تثق فينا؟</h2>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="flex gap-6 items-start">
                  <Shield className="w-12 h-12 text-orange-400 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">تدريب مستمر</h4>
                    <p className="text-blue-100">فنيينا بيحضروا تدريبات دورية على أحدث تقنيات الصيانة العالمية.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Users className="w-12 h-12 text-orange-400 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">فريق دعم ٢٤/٧</h4>
                    <p className="text-blue-100">إحنا معاك حتى بعد ما الفني يمشي، عشان نضمن إنك راضي تماماً.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDetail;

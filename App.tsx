
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import AppDownload from './components/AppDownload';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutDetail from './components/AboutDetail';
import ServicesDetail from './components/ServicesDetail';
import PricingDetail from './components/PricingDetail';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronUp, ShieldCheck, Star, MessageCircle, Hammer, CheckCircle } from 'lucide-react';
import { WHATSAPP_URL } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <AboutDetail />;
      case 'services':
        return <ServicesDetail />;
      case 'pricing':
        return <PricingDetail />;
      case 'faq':
        return (
          <div className="pt-24 relative z-10">
             <FAQ />
          </div>
        );
      case 'booking':
        return (
          <div className="pt-24 relative z-10">
             <BookingForm />
          </div>
        );
      default:
        return (
          <>
            <Hero />
            
            <div id="about" className="py-24 bg-white/40 relative">
              <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                  <div className="relative order-2 md:order-1">
                    <div className="bg-[#1e40af] rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-blue-900/20">
                      {/* Decorative elements - STRICT pointer-events-none */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none z-0"></div>
                      <div className="relative z-10 text-white">
                        <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-6">
                          <ShieldCheck className="w-8 h-8 text-[#10b981]" />
                        </div>
                        <h3 className="text-4xl font-black mb-8 leading-tight">مين HomeServe Pro؟</h3>
                        <p className="text-lg font-bold leading-relaxed mb-8 opacity-90">
                          إحنا حلقة الوصل الموثوقة بينك وبين أحسن فنيين في مصر. بدأنا من سوهاج عشان نغير مفهوم الصيانة ونخليها تجربة سهلة، شفافة، ومضمونة ١٠٠٪.
                        </p>
                        <ul className="space-y-4 mb-10">
                          <li className="flex items-center gap-3 font-bold">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            فنيين تم اختيارهم بعناية فائقة
                          </li>
                          <li className="flex items-center gap-3 font-bold">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            أسعار ثابتة بدون "فصال"
                          </li>
                        </ul>
                        <button 
                          onClick={() => setCurrentView('about')}
                          className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all shadow-lg cursor-pointer relative z-20 pointer-events-auto"
                        >
                          اعرف حكايتنا كاملة
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right order-1 md:order-2">
                    <div className="flex items-center gap-2 text-orange-600 font-black mb-4 uppercase tracking-wider justify-end">
                       <span>الجودة هي الأساس</span>
                       <Star className="w-5 h-5 fill-orange-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">إحنا مش مجرد تطبيق.. إحنا شركاء راحتك في بيتك</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-10">
                      في HomeServe Pro، هدفنا إنك لما تطلب خدمة، تنسى همها خالص. كل فني بينضم لينا بيعدي باختبارات فنية وسلوكية عشان نضمن لك أعلى مستوى من الاحترافية والأمان داخل بيتك في سوهاج وكل مكان.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="p-8 glass rounded-[2rem] border-blue-50 hover:bg-white transition-all shadow-md">
                        <span className="text-4xl font-black text-blue-600 block mb-2">+٥٠٠</span>
                        <span className="text-slate-500 font-bold">فني متخصص ومعتمد</span>
                      </div>
                      <div className="p-8 glass rounded-[2rem] border-orange-50 hover:bg-white transition-all shadow-md">
                        <span className="text-4xl font-black text-orange-500 block mb-2">١٥ د</span>
                        <span className="text-slate-500 font-bold">متوسط زمن الاستجابة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="services" className="relative">
              <ServicesGrid />
              <div className="text-center pb-12 bg-white/50 relative z-20 pointer-events-auto">
                <button onClick={() => setCurrentView('services')} className="text-blue-600 font-black text-xl hover:underline cursor-pointer">عرض كل تفاصيل الخدمات</button>
              </div>
            </div>
            
            <HowItWorks />
            <SocialProof />
            
            <Pricing />

            {/* Join as Technician Section */}
            <section id="join" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
              <div className="container mx-auto px-6 relative z-10">
                <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-blue-100 flex flex-col md:flex-row items-center gap-16 relative">
                  <div className="md:w-1/2 order-2 md:order-1">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center">
                        <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                        <p className="font-black text-slate-800">زيادة دخلك الشهري</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center">
                        <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                        <p className="font-black text-slate-800">حرية اختيار المواعيد</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center">
                        <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                        <p className="font-black text-slate-800">تدريب ودعم فني</p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center">
                        <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                        <p className="font-black text-slate-800">نظام تقييم عادل</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 text-right order-1 md:order-2">
                    <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-8 ml-0 mr-auto md:mr-0">
                      <Hammer className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">عندك مهارة؟ انضم لأقوى فريق فنيين في سوهاج</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                      لو إنت فني (سباك، كهربائي، تكييف، أو نقاش) ومحترف في شغلك، هوم سيرف برو بتقدملك فرصة تزود دخلك وتشتغل في بيئة احترافية ومحترمة.
                    </p>
                    <a 
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-lg cursor-pointer relative z-20 pointer-events-auto"
                    >
                      قدم طلب انضمام دلوقتي
                    </a>
                  </div>
                </div>
              </div>
            </section>
            
            <AppDownload />
            <BookingForm />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-600" style={{ scrollBehavior: 'smooth' }}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[9999] origin-right pointer-events-none"
        style={{ scaleX }}
      />

      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>

        {currentView === 'home' && (
          <section className="py-24 bg-white/30 relative">
            <div className="container mx-auto px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-700 rounded-[4rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
              >
                {/* Background decorative elements - STRICT pointer-events-none */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mt-40 blur-3xl pointer-events-none z-0"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full -mr-40 -mb-40 blur-3xl pointer-events-none z-0"></div>
                
                <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">مستني إيه؟ ريح بالك دلوقتي!</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-20 pointer-events-auto">
                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f97316] text-white px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 hover:bg-orange-600 transition-all inline-block cursor-pointer relative z-[9999]"
                  >
                    احجز خدمتك دلوقتي
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* WhatsApp Floating Button - Ensure z-index is high and pointer-events-auto */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 left-10 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl z-[10000] flex items-center justify-center hover:scale-110 transition-all active:scale-95 cursor-pointer pointer-events-auto"
        title="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-9 h-9" />
      </a>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 w-12 h-12 bg-white text-blue-600 border border-blue-100 rounded-full shadow-xl z-[10000] flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer pointer-events-auto"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, BookOpen, Megaphone, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button, SectionTitle, Card } from '../components/UI';

export const Home: React.FC = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-20">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -left-20 w-[600px] h-[600px] text-primary-500 fill-current animate-pulse duration-[10000ms]">
            <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.3C59.4,45.5,47.9,54.2,35.6,63.1C23.3,72,10.2,81.1,-1.6,83.9C-13.4,86.6,-23.9,83,-34.7,75.4C-45.5,67.8,-56.6,56.2,-65.4,43.2C-74.2,30.2,-80.7,15.8,-80.1,1.1C-79.5,-13.6,-71.8,-28.5,-61.7,-40.4C-51.6,-52.3,-39.1,-61.2,-26.3,-69.3C-13.5,-77.4,-0.4,-84.7,13.6,-86.2C27.6,-87.7,40,-83.4,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-6 border border-orange-100">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
              الإعلام المركزي لخدمة القرآن
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              لأن القرآن <span className="text-primary-500">أعظم رسالة</span>...
              <br />
              يجب أن يصل <span className="relative inline-block">
                بأفضل وسيلة
                <svg className="absolute w-full h-3 -bottom-1 right-0 text-secondary-500 opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              تَلاق | الإعلام المركزي منصة رقمية تُعنى ببناء إعلام واعٍ يخدم القرآن، ويواكب العصر دون التفريط بجوهر الرسالة.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/volunteer">
                <Button size="lg" className="min-w-[180px]">انضم كمتطوع</Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="min-w-[180px]">شاهد أعمالنا</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Pillars Grid --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative z-20">
            <h2 className="text-3xl font-bold text-gray-900">ركائز تَلاق</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-20">
             {[
               { icon: <Camera size={28} />, title: 'التوثيق الإعلامي', desc: 'تحويل الجهود الميدانية إلى أثر مرئي مستدام.' },
               { icon: <BookOpen size={28} />, title: 'الدورات والتدريب', desc: 'تأهيل الكوادر الإعلامية بدورات تطبيقية واقعية.' },
               { icon: <Megaphone size={28} />, title: 'الحملات الإعلامية', desc: 'حملات موسمية وهوية موحدة لتعظيم الأثر.' },
               { icon: <Users size={28} />, title: 'العمل التطوعي', desc: 'فرق عمل منظمة ومهام محددة لا عشوائية.' },
             ].map((item, idx) => (
               <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
               >
                 <Card className="h-full flex flex-col items-center text-center py-8 border-t-4 border-t-transparent hover:border-t-primary-500 transition-all">
                    <div className="w-14 h-14 rounded-full bg-orange-50 text-primary-500 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                 </Card>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- Why Different Section --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200"
              >
                <img src="/media/homepage.png" alt="فريق تلاق" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary-900/10"></div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <SectionTitle align="right" title="لماذا تَلاق مختلفة؟" subtitle="لأننا نؤمن أن الإعلام رسالة لا زينة" />
              <div className="space-y-6">
                {[
                  'لأنها تنطلق من فهم الرسالة قبل الوسيلة.',
                  'لأنها توازن بين الشرع والاحتراف.',
                  'لأنها تبني أفرادًا، لا مجرد محتوى.',
                  'لأنها تعمل بعقلية الاستمرارية لا الموسمية.'
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="mt-1 text-primary-500">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{point}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline" className="gap-2 group">
                    اقرأ المزيد عنا <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-primary-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">هل لديك مهارة إعلامية؟</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            ساهم معنا في خدمة القرآن الكريم بمهارتك، سواء كنت مصوراً، مصمماً، مونتيراً، أو كاتباً. الميدان يسع الجميع.
          </p>
          <Link to="/volunteer">
            <button className="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all shadow-xl">
              سجل كمتطوع الآن
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
import React from 'react';
import { SectionTitle } from '../components/UI';
import { Target, Eye, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="من نحن" 
          subtitle="تَلاق منصة تعمل كحلقة وصل بين مراكز تحفيظ القرآن والإعلام الحديث، عبر التوثيق، التدريب، وصناعة محتوى مؤثر ومنظّم." 
        />

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start h-full"
          >
            <div className="p-4 bg-blue-50 text-blue-600 rounded-xl shrink-0">
              <Eye size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                أن يكون لكل مركز قرآني إعلامٌ واعٍ، مؤثر، ومنظّم، يعبّر عن عظمة ما يقدّمه.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start h-full"
          >
            <div className="p-4 bg-orange-50 text-orange-600 rounded-xl shrink-0">
              <Target size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                تمكين المراكز من أدوات الإعلام الحديث، لخدمة كتاب الله بأفضل صورة ممكنة.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Target Audience */}
        <div className="mb-20 bg-gray-50 rounded-3xl p-10 text-center">
           <h3 className="text-2xl font-bold mb-8 text-gray-900">لمن تَلاق؟</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {['مراكز تحفيظ القرآن', 'المعاهد الشرعية', 'المتطوعون في الإعلام الدعوي', 'كل من يؤمن أن الإعلام رسالة'].map((item, idx) => (
               <div key={idx} className="bg-white p-6 rounded-xl shadow-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                 {item}
               </div>
             ))}
           </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
           <SectionTitle title="إنجازاتنا" subtitle="الأرقام ليست الهدف... الأثر هو الهدف" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'توثيق الأنشطة', desc: 'توثيق عشرات الأنشطة القرآنية في عدة مراكز.' },
                { title: 'التدريب والتطوير', desc: 'تدريب عشرات الطلاب والمتطوعين على أدوات الإعلام.' },
                { title: 'الإنتاج الفني', desc: 'إنتاج تصاميم إعلامية لحملات ومسابقات قرآنية.' },
                { title: 'بناء الشبكة', desc: 'بناء شبكة إعلامية تضم ممثلين من عدة مراكز.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                   <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                     <Award size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                     <p className="text-gray-600">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Structure */}
        <div>
           <SectionTitle title="هيكل العمل" subtitle="نعمل ضمن منظومة متكاملة" />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { title: "اللجنة المركزية", desc: "التخطيط الاستراتيجي والإشراف العام." },
                { title: "فريق الإنتاج", desc: "مصورين ومصممين ومحررين مبدعين." },
                { title: "ممثلو المراكز", desc: "همزة الوصل الميدانية في كل مركز." }
              ].map((role, idx) => (
                <div key={idx} className="group p-8 rounded-xl border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-primary-500 group-hover:text-white rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600 font-bold transition-colors">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{role.title}</h4>
                  <p className="text-gray-500 text-sm">{role.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { SectionTitle } from '../components/UI';
import { Video, BookOpen, Megaphone, Users } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'أولًا: التوثيق الإعلامي',
      description: 'نقل الصورة المشرقة للمراكز عبر توثيق الأنشطة والمحاضرات والمسابقات وإنتاج تقارير وريلز احترافية، مع أرشفة منظمة.',
      icon: <Video size={40} />,
      features: ['تصوير الأنشطة واللقاءات', 'إنتاج فيديوهات قصيرة (ريلز)', 'مونتاج مرئي يليق بالمحتوى', 'أرشفة إعلامية منظمة']
    },
    {
      id: 2,
      title: 'ثانياً: الدورات والتدريب',
      description: 'تدريب تطبيقي ومبني على الواقع للممثلين الإعلاميين والمتطوعين لرفع كفاءة العمل الإعلامي.',
      icon: <BookOpen size={40} />,
      features: ['أساسيات التصوير بالموبايل', 'مبادئ المونتاج البسيط', 'كتابة المحتوى الهادف', 'إدارة صفحات التواصل', 'التغذية البصرية']
    },
    {
      id: 3,
      title: 'ثالثاً: الحملات الإعلامية',
      description: 'إطلاق حملات موسمية بهوية موحدة (مثل رمضان وبداية العام) لتعزيز حضور المراكز في المجتمع الرقمي.',
      icon: <Megaphone size={40} />,
      features: ['حملات رمضان والمواسم', 'إعداد هوية إعلامية موحدة', 'نشر المحتوى عبر الشبكة', 'تعزيز الحضور الرقمي']
    },
    {
      id: 4,
      title: 'رابعاً: العمل التطوعي المنظّم',
      description: 'بيئة عمل احترافية لا تعتمد على العشوائية، بل على فرق عمل واضحة ومهام محددة.',
      icon: <Users size={40} />,
      features: ['فرق عمل واضحة', 'مهام محددة', 'متابعة وتقييم', 'بيئة تحترم وقت المتطوع']
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="ماذا نقدم" subtitle="خدمات متكاملة تهدف لتحويل الجهود الميدانية إلى أثر مستدام" />
        
        <div className="grid gap-12">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                 <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group hover:border-primary-200 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                    
                    <div className="relative z-10">
                      <div className="text-primary-600 mb-6">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                             <div className="w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0"></div>
                             {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md bg-gray-200 relative">
                   <img 
                    src={`/${service.id}se.png`} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
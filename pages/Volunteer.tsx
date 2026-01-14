import React, { useState } from 'react';
import { SectionTitle, Button, Card } from '../components/UI';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Volunteer: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="text-center py-16 px-8 border-green-100 shadow-md">
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">جزاك الله خيراً!</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                تم استلام طلب انضمامك لفريق تَلاق بنجاح.
                <br />
                نقدّر رغبتك في خدمة كتاب الله، وسيقوم فريقنا بمراجعة بياناتك والتواصل معك قريباً.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg">العودة للرئيسية</Button>
                </Link>
                <Button variant="outline" size="lg" onClick={() => setIsSubmitted(false)}>
                  إرسال طلب آخر
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="كن شريكاً في الأجر" subtitle="تَلاق لا تعتمد على الجهد الفردي العشوائي، بل على فرق عمل منظمة" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1 space-y-4">
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                <h3 className="font-bold text-gray-900 mb-4">مجالات التطوع</h3>
                <ul className="space-y-3">
                  {['تصوير', 'مونتاج', 'تصميم', 'كتابة محتوى', 'إدارة منصات'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  "خيركم من تعلم القرآن وعلمه"
                  <br/>
                  ونحن نخدم من يعلمه.
                </p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <Card className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="محمد أحمد" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">رقم الجوال</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="05xxxxxxxx" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">مجال التطوع المفضل</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white">
                      <option value="">اختر المجال...</option>
                      <option value="photo">تصوير</option>
                      <option value="video">مونتاج</option>
                      <option value="design">تصميم</option>
                      <option value="writing">كتابة محتوى</option>
                      <option value="management">إدارة منصات</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رابط أعمال سابقة (اختياري)</label>
                    <input type="url" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Behance / Drive / Instagram" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">نبذة عنك / رسالة</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="حدثنا قليلاً عن شغفك وخبرتك..."></textarea>
                  </div>

                  <Button fullWidth size="lg" type="submit">إرسال طلب التطوع</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { SectionTitle, Button, Card } from '../components/UI';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="تواصل معنا" subtitle="نسعد باستفساراتكم وتواصلكم الدائم" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">معلومات الاتصال</h3>
            <p className="text-gray-600">
              سواء كنت ممثلاً لمركز قرآني وترغب في خدماتنا، أو جهة مانحة ترغب في الدعم، أو مجرد مستفسر.. أبوابنا مفتوحة لكم.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MapPin />, title: "العنوان", text: "الرياض، المملكة العربية السعودية" },
                { icon: <Mail />, title: "البريد الإلكتروني", text: "info@talaq.media" },
                { icon: <Phone />, title: "الهاتف", text: "+966 50 000 0000" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <Card className="p-8">
             <form className="space-y-4">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                   <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                   <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">الموضوع</label>
                   <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                   <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"></textarea>
                </div>
                <Button fullWidth>إرسال الرسالة</Button>
             </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

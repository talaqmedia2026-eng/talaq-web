import React, { useState } from 'react';
import { SectionTitle, Button } from '../components/UI';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['الكل', 'فيديو', 'تصميم', 'حملات'];

const PROJECTS = [
  { id: 1, title: 'فيلم "حفاظ الوحي"', category: 'فيديو', image: 'https://picsum.photos/600/400?random=10' },
  { id: 2, title: 'حملة رمضان 1445', category: 'حملات', image: 'https://picsum.photos/600/400?random=11' },
  { id: 3, title: 'هوية مركز النور', category: 'تصميم', image: 'https://picsum.photos/600/400?random=12' },
  { id: 4, title: 'تغطية الحفل الختامي', category: 'فيديو', image: 'https://picsum.photos/600/400?random=13' },
  { id: 5, title: 'إمساكية رمضان', category: 'تصميم', image: 'https://picsum.photos/600/400?random=14' },
  { id: 6, title: 'وثائقي "البداية"', category: 'فيديو', image: 'https://picsum.photos/600/400?random=15' },
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const filteredProjects = activeCategory === 'الكل' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="معرض الأعمال" subtitle="بعض من مخرجاتنا التي نفخر بها في خدمة كتاب الله" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-primary-500 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-32 px-4"
        >
          <div className="text-center max-w-2xl">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <div className="text-7xl font-black text-primary-500 mb-4">قريباً</div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              معرضنا قريب جداً
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              نحن نجهز لك أفضل أعمالنا الإعلامية. قريباً جداً ستشاهد معرضاً مميزاً يعكس جودة وتفاني فريق تَلاق في خدمة القرآن الكريم.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-6xl">🎬</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <span className="text-6xl">🎨</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <span className="text-6xl">📸</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

import { SectionTitle, Card } from '@/components/ui';
import { solutions } from '@/data/solutions';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, Factory, GraduationCap, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  GraduationCap,
};

export function Solutions() {
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-sm font-semibold mb-6">
              解决方案
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              行业专属AI解决方案
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              深入理解行业痛点，提供定制化AI解决方案，助力企业数字化转型
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
                    {getIcon(solution.icon)}
                    <span>{solution.industry}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{solution.title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">行业痛点</h3>
                      <ul className="space-y-2">
                        {solution.painPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-red-500 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">解决方案</h3>
                      <p className="text-gray-600">{solution.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">预期收益</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <Check className="w-5 h-5 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link
                    to="/cases"
                    className="inline-flex items-center gap-2 mt-8 text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    查看相关案例
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        {getIcon(solution.icon)}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.industry}</h3>
                      <p className="text-gray-600 mt-2">{solution.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

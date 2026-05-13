import { SectionTitle, Card, Button } from '@/components/ui';
import { cases } from '@/data/cases';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function Cases() {
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
              客户案例
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              成功故事
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              了解领先企业如何通过我们的AI解决方案实现业务突破
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden -mx-6 -mt-6 mb-6">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-indigo-600 text-xs font-semibold">
                        {caseItem.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-indigo-600 font-semibold">{caseItem.clientName}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1">{caseItem.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{caseItem.description}</p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold text-gray-900">关键成果</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {caseItem.results.map((result, i) => (
                        <div key={i} className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-indigo-600">{result.value}</div>
                          <div className="text-xs text-gray-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '1000+', label: '服务客户' },
              { value: '95%', label: '客户满意度' },
              { value: '300%', label: '平均ROI提升' },
              { value: '50+', label: '覆盖行业' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            成为下一个成功案例
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            与我们的专家团队交流，探讨AI如何为您的业务创造价值
          </p>
          <Button to="/contact" size="lg">
            预约咨询
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

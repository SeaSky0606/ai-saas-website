import { SectionTitle, Card, Button } from '@/components/ui';
import { productFeatures } from '@/data/features';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, LineChart, MessageSquare, FileText, Workflow, Check, ArrowRight, Layers, Cpu, Shield } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  Database,
  LineChart,
  MessageSquare,
  FileText,
  Workflow,
};

export function Products() {
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
              产品中心
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              全栈AI能力平台
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              从数据到洞察，从洞察到行动，我们提供端到端的AI解决方案，助力企业智能化升级
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="核心产品"
            title="六大核心能力，满足多元场景"
            description="覆盖AI全生命周期，从模型开发到应用部署，一站式满足企业AI需求"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
                技术架构
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                企业级技术架构
                <br />
                <span className="text-indigo-600">稳定、安全、可扩展</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                基于云原生架构设计，支持弹性扩缩容，确保业务高峰期稳定运行。多层安全防护体系，保障数据安全合规。
              </p>
              <div className="space-y-4">
                {[
                  { icon: Layers, title: '微服务架构', desc: '模块化设计，独立部署，灵活扩展' },
                  { icon: Cpu, title: '高性能计算', desc: 'GPU集群加速，支持大规模并行计算' },
                  { icon: Shield, title: '安全合规', desc: '通过ISO27001、SOC2等国际认证' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {['数据采集', '数据清洗', '特征工程', '模型训练', '模型评估', '服务部署', '监控告警', '持续优化'].map((step, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 shadow-sm text-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            开始您的AI之旅
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            立即预约产品演示，了解我们如何帮助您的业务实现智能化升级
          </p>
          <Button
            variant="outline"
            size="lg"
            to="/contact"
            className="border-white text-white hover:bg-white hover:text-indigo-600"
          >
            预约演示
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

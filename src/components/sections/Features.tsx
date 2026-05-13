import { SectionTitle, FeatureCard } from '@/components/ui';
import { features } from '@/data/features';
import { Brain, Zap, Shield, Users, BarChart3, Plug } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Zap,
  Shield,
  Users,
  BarChart3,
  Plug,
};

export function Features() {
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-7 h-7" /> : null;
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="核心功能"
          title="全方位AI能力，驱动业务增长"
          description="我们提供完整的AI解决方案，从数据分析到智能决策，帮助企业实现数字化转型"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={getIcon(feature.icon)}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

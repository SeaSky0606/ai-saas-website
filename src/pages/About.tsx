import { SectionTitle, Card } from '@/components/ui';
import { teamMembers, milestones, values } from '@/data/team';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Shield, Globe } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Users,
  Shield,
  Globe,
};

export function About() {
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
              关于我们
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              让AI成为每个企业的核心能力
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              我们致力于降低AI应用门槛，让先进技术惠及更多企业，推动社会智能化进程
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我们的使命</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过创新的AI技术和卓越的服务，帮助企业释放数据价值，提升运营效率，
                创造可持续的竞争优势。我们相信，人工智能不应该只是大企业的专利，
                每个组织都应该能够享受到AI带来的变革力量。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我们的愿景</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                成为全球最受信赖的AI解决方案提供商，构建开放、普惠的AI生态。
                到2030年，帮助超过10万家企业实现智能化转型，让AI技术真正服务于人类社会的进步。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="企业价值观"
            title="指引我们前行的信念"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto mb-6 text-indigo-600">
                    {getIcon(value.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="发展历程"
            title="我们的成长之路"
          />

          <div className="mt-16 relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                <div className="w-16 flex-shrink-0 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-lg z-10" />
                </div>
                <div className="flex-1 pb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="核心团队"
            title="来自全球顶尖科技公司的专家"
            description="汇聚AI领域的顶尖人才，拥有丰富的行业经验和技术积累"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

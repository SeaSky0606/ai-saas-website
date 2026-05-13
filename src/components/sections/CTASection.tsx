import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-cyan-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            14天免费试用，无需信用卡
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            准备好开启您的
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI转型之旅了吗？
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            立即开始免费试用，体验AI为您的业务带来的变革性价值。
            我们的专家团队将全程为您提供支持。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" size="lg" className="w-full sm:w-auto">
              免费开始
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/contact"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
            >
              联系销售团队
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

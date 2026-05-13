import { SectionTitle, Button, Input, TextArea } from '@/components/ui';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
              联系我们
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              让我们开始对话
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              无论您有任何问题或需求，我们的团队都随时准备为您提供帮助
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">与我们取得联系</h2>
              <p className="text-lg text-gray-600 mb-10">
                填写表单，我们的专家将在24小时内与您联系，为您提供专业的咨询服务。
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: '电子邮件', content: 'contact@ai-saas.com', desc: '我们会在24小时内回复' },
                  { icon: Phone, title: '电话', content: '400-888-8888', desc: '周一至周五 9:00-18:00' },
                  { icon: MapPin, title: '地址', content: '北京市海淀区中关村软件园', desc: '欢迎预约参观' },
                  { icon: Clock, title: '工作时间', content: '周一至周五 9:00-18:00', desc: '节假日除外' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-900">{item.content}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">提交成功！</h3>
                    <p className="text-gray-600">感谢您的留言，我们会尽快与您联系。</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="姓名 *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="您的姓名"
                        required
                      />
                      <Input
                        label="邮箱 *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="公司名称"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="您的公司"
                      />
                      <Input
                        label="联系电话"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="您的电话"
                      />
                    </div>
                    <TextArea
                      label="留言内容 *"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="请描述您的需求或问题..."
                      rows={5}
                      required
                    />
                    <Button type="submit" className="w-full">
                      发送消息
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      提交即表示您同意我们的隐私政策
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

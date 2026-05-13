import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  product: {
    title: '产品',
    links: [
      { name: 'AI分析引擎', href: '/products' },
      { name: '智能客服', href: '/products' },
      { name: '预测分析', href: '/products' },
      { name: '定价方案', href: '/pricing' },
    ],
  },
  solutions: {
    title: '解决方案',
    links: [
      { name: '金融科技', href: '/solutions' },
      { name: '医疗健康', href: '/solutions' },
      { name: '零售电商', href: '/solutions' },
      { name: '智能制造', href: '/solutions' },
    ],
  },
  company: {
    title: '公司',
    links: [
      { name: '关于我们', href: '/about' },
      { name: '客户案例', href: '/cases' },
      { name: '博客', href: '/blog' },
      { name: '联系我们', href: '/contact' },
    ],
  },
  resources: {
    title: '资源',
    links: [
      { name: '产品文档', href: '#' },
      { name: 'API文档', href: '#' },
      { name: '开发者社区', href: '#' },
      { name: '帮助中心', href: '#' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">AI SaaS</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-xs">
                为企业提供领先的AI解决方案，助力数字化转型，释放数据价值。
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>contact@ai-saas.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>400-888-8888</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>北京市海淀区中关村</span>
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2024 AI SaaS. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

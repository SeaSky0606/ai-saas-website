import type { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: '基础版',
    price: 2999,
    period: '月',
    description: '适合初创企业和小型团队，快速体验AI能力',
    features: [
      '5个AI模型部署',
      '10万条/月API调用',
      '基础数据分析',
      '邮件技术支持',
      '标准SLA保障',
      '社区版功能更新'
    ],
    highlighted: false,
    cta: '免费试用'
  },
  {
    id: '2',
    name: '专业版',
    price: 9999,
    period: '月',
    description: '适合成长型企业，满足业务扩展需求',
    features: [
      '20个AI模型部署',
      '100万条/月API调用',
      '高级数据分析与可视化',
      '优先技术支持（7×24）',
      '99.9% SLA保障',
      '专属客户成功经理',
      '自定义模型训练',
      '团队协作功能'
    ],
    highlighted: true,
    cta: '立即升级'
  },
  {
    id: '3',
    name: '企业版',
    price: 0,
    period: '定制',
    description: '适合大型企业和集团，提供全方位定制服务',
    features: [
      '无限AI模型部署',
      '无限API调用',
      '全功能数据分析平台',
      '专属技术团队支持',
      '99.99% SLA保障',
      '私有化部署选项',
      '定制算法开发',
      '企业级安全合规',
      '现场培训服务'
    ],
    highlighted: false,
    cta: '联系销售'
  }
];

export const comparisonFeatures = [
  { name: 'AI模型部署数量', basic: '5个', professional: '20个', enterprise: '无限' },
  { name: 'API调用量', basic: '10万条/月', professional: '100万条/月', enterprise: '无限' },
  { name: '数据分析能力', basic: '基础版', professional: '高级版', enterprise: '企业版' },
  { name: '技术支持', basic: '邮件支持', professional: '7×24优先', enterprise: '专属团队' },
  { name: 'SLA保障', basic: '标准', professional: '99.9%', enterprise: '99.99%' },
  { name: '客户成功经理', basic: false, professional: true, enterprise: true },
  { name: '自定义模型训练', basic: false, professional: true, enterprise: true },
  { name: '团队协作', basic: false, professional: true, enterprise: true },
  { name: '私有化部署', basic: false, professional: false, enterprise: true },
  { name: '定制算法开发', basic: false, professional: false, enterprise: true },
  { name: '现场培训', basic: false, professional: false, enterprise: true }
];

export const faqs = [
  {
    question: '如何选择适合的版本？',
    answer: '建议根据您的业务规模和AI使用需求选择。初创企业可从基础版开始，随着业务增长随时升级。如有特殊需求，欢迎联系我们的销售团队获取专业建议。'
  },
  {
    question: '是否提供免费试用？',
    answer: '是的，我们提供14天全功能免费试用，无需信用卡。试用期间您可以充分体验平台的所有功能，评估是否符合您的业务需求。'
  },
  {
    question: 'API调用量超出怎么办？',
    answer: '当接近用量上限时，系统会提前发送通知。您可以选择购买额外的API包或升级到更高版本。超出部分按量计费，确保服务不中断。'
  },
  {
    question: '数据安全如何保障？',
    answer: '我们采用银行级加密技术，通过ISO27001、SOC2等国际安全认证。支持数据加密存储、传输加密、访问控制等多重安全措施，确保您的数据安全。'
  },
  {
    question: '是否支持私有化部署？',
    answer: '企业版支持私有化部署，可将系统部署在您自己的服务器或私有云环境中，满足数据合规和安全性要求。我们的技术团队将提供全程部署支持。'
  },
  {
    question: '如何获取技术支持？',
    answer: '基础版用户可通过邮件获取支持，专业版及以上享受7×24小时优先技术支持。企业版客户还将配备专属客户成功经理和技术团队。'
  }
];

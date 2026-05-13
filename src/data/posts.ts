import type { BlogPost } from '@/types';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: '2024年企业AI应用趋势报告：从试点到规模化落地',
    excerpt: '深入分析企业AI应用的最新趋势，探讨如何从概念验证走向全面部署，以及成功实施的关键因素。',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    category: '行业洞察',
    tags: ['AI趋势', '企业数字化', '行业报告'],
    author: '张明远',
    publishDate: '2024-01-15',
    readTime: 8
  },
  {
    id: '2',
    title: '大语言模型在企业知识管理中的实践与应用',
    excerpt: '探索如何利用LLM技术构建企业智能知识库，提升信息检索效率，实现知识的沉淀与复用。',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop',
    category: '技术实践',
    tags: ['大语言模型', '知识管理', 'NLP'],
    author: '王建国',
    publishDate: '2024-01-10',
    readTime: 12
  },
  {
    id: '3',
    title: '金融行业智能风控系统的架构设计与最佳实践',
    excerpt: '分享在金融行业构建实时风控系统的经验，包括技术选型、架构设计和性能优化策略。',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    category: '解决方案',
    tags: ['金融科技', '风控', '系统架构'],
    author: '李雪琴',
    publishDate: '2024-01-05',
    readTime: 10
  },
  {
    id: '4',
    title: '医疗AI的伦理与合规：平衡创新与责任',
    excerpt: '讨论医疗AI应用中的伦理挑战和合规要求，以及如何在推动技术创新的同时确保患者安全。',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    category: '行业洞察',
    tags: ['医疗AI', 'AI伦理', '合规'],
    author: '陈思雨',
    publishDate: '2023-12-28',
    readTime: 6
  },
  {
    id: '5',
    title: '从0到1构建推荐系统：算法选型与工程实践',
    excerpt: '详细介绍推荐系统的完整构建流程，包括召回、排序算法选择，以及在线服务的工程实现。',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    category: '技术实践',
    tags: ['推荐系统', '机器学习', '工程实践'],
    author: '王建国',
    publishDate: '2023-12-20',
    readTime: 15
  },
  {
    id: '6',
    title: '制造业数字化转型：AI赋能智能工厂的实践路径',
    excerpt: '分析制造业数字化转型的关键场景，探讨AI技术在质量控制、预测维护等领域的应用价值。',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop',
    category: '解决方案',
    tags: ['智能制造', '工业互联网', '数字化转型'],
    author: '李雪琴',
    publishDate: '2023-12-15',
    readTime: 9
  }
];

export const categories = ['全部', '行业洞察', '技术实践', '解决方案', '产品更新'];

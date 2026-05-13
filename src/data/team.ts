import type { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '张明远',
    role: '创始人 & CEO',
    bio: '前Google AI研究员，斯坦福大学计算机博士，在机器学习和计算机视觉领域拥有20余项专利。',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '2',
    name: '李雪琴',
    role: '联合创始人 & CTO',
    bio: '清华大学计算机系博士，曾任阿里云技术总监，主导过多个亿级用户规模的AI产品架构设计。',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '3',
    name: '王建国',
    role: '首席科学家',
    bio: 'MIT人工智能实验室博士后，在NeurIPS、ICML等顶级会议发表论文50余篇，专注深度学习研究。',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '4',
    name: '陈思雨',
    role: '产品副总裁',
    bio: '前字节跳动产品总监，拥有10年B端产品设计经验，主导过多个千万级用户产品的从0到1。',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
  }
];

export const milestones = [
  {
    year: '2019',
    title: '公司成立',
    description: '在北京中关村成立，获得红杉资本天使轮投资'
  },
  {
    year: '2020',
    title: '产品上线',
    description: '首款AI分析产品正式发布，签约首批50家企业客户'
  },
  {
    year: '2021',
    title: 'A轮融资',
    description: '完成5000万美元A轮融资，团队扩展至200人'
  },
  {
    year: '2022',
    title: '国际化布局',
    description: '在新加坡设立亚太总部，服务覆盖10个国家和地区'
  },
  {
    year: '2023',
    title: '大模型发布',
    description: '自研行业大模型发布，服务客户突破1000家'
  },
  {
    year: '2024',
    title: 'B轮融资',
    description: '完成2亿美元B轮融资，估值超10亿美元'
  }
];

export const values = [
  {
    icon: 'Lightbulb',
    title: '创新驱动',
    description: '持续探索AI技术前沿，将最新研究成果转化为实际应用'
  },
  {
    icon: 'Users',
    title: '客户至上',
    description: '深入理解客户需求，提供超越期望的产品和服务体验'
  },
  {
    icon: 'Shield',
    title: '诚信负责',
    description: '坚守数据安全和隐私保护承诺，做值得信赖的AI伙伴'
  },
  {
    icon: 'Globe',
    title: '开放共赢',
    description: '构建开放的AI生态，与合作伙伴共同推动行业进步'
  }
];

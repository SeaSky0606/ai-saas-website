import type { Testimonial, Stat } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '刘建华',
    role: '首席技术官',
    company: '招商银行',
    content: 'AI SaaS平台帮助我们将信贷审批效率提升了3倍，同时风险识别准确率也显著提高。他们的技术团队非常专业，响应速度快，是真正的合作伙伴。',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
  },
  {
    id: '2',
    name: '赵晓燕',
    role: '数字化总监',
    company: '海尔集团',
    content: '通过部署智能质检系统，我们的生产线良品率从95%提升到99.2%，每年节省质量成本超过千万。这套系统的稳定性和准确性都超出了我们的预期。',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
  },
  {
    id: '3',
    name: '孙伟明',
    role: '产品副总裁',
    company: '美团',
    content: '推荐引擎的精准度令人印象深刻，用户点击率提升了40%以上。平台的可扩展性也很好，能够轻松应对我们的业务增长。强烈推荐给需要AI能力的企业。',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
  }
];

export const stats: Stat[] = [
  { id: '1', value: '1000', label: '企业客户', suffix: '+' },
  { id: '2', value: '50', label: '行业覆盖', suffix: '+' },
  { id: '3', value: '99.9', label: '服务可用性', suffix: '%' },
  { id: '4', value: '10', label: '日均处理数据量', suffix: '亿+' }
];

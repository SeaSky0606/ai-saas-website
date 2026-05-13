import type { Case } from '@/types';

export const cases: Case[] = [
  {
    id: '1',
    clientName: '华夏银行',
    industry: '金融科技',
    title: '智能信贷风控系统升级',
    description: '为华夏银行构建新一代智能风控平台，整合内外部数据，实现信贷全流程智能化管理。',
    results: [
      { metric: '审批效率提升', value: '300%' },
      { metric: '坏账率降低', value: '35%' },
      { metric: '自动化审批率', value: '85%' }
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    clientName: '协和医院',
    industry: '医疗健康',
    title: 'AI辅助肺结节筛查系统',
    description: '部署医学影像AI分析系统，辅助放射科医生进行肺结节检测和良恶性判断。',
    results: [
      { metric: '筛查效率提升', value: '4倍' },
      { metric: '微小结节检出率', value: '98%' },
      { metric: '医生阅片时间缩短', value: '60%' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    clientName: '京东集团',
    industry: '零售电商',
    title: '全渠道智能推荐引擎',
    description: '构建统一的推荐中台，整合APP、小程序、Web等多端数据，实现千人千面的个性化推荐。',
    results: [
      { metric: 'GMV提升', value: '25%' },
      { metric: '用户停留时长', value: '+40%' },
      { metric: '推荐点击率', value: '12%' }
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    clientName: '比亚迪汽车',
    industry: '智能制造',
    title: '动力电池智能质检方案',
    description: '基于计算机视觉的电池质检系统，实现电芯外观缺陷自动检测和分类。',
    results: [
      { metric: '检测精度', value: '99.8%' },
      { metric: '检测速度', value: '2秒/件' },
      { metric: '人工成本降低', value: '70%' }
    ],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    clientName: '新东方在线',
    industry: '教育培训',
    title: 'AI作文批改与学习分析',
    description: '开发智能作文批改系统，提供多维度评分和个性化改进建议，同时分析学习行为数据。',
    results: [
      { metric: '批改效率提升', value: '10倍' },
      { metric: '评分一致性', value: '95%' },
      { metric: '学生满意度', value: '92%' }
    ],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    clientName: '顺丰速运',
    industry: '物流运输',
    title: '智能路径规划与调度系统',
    description: '基于运筹优化和机器学习的路径规划系统，实现配送路线智能优化和运力动态调度。',
    results: [
      { metric: '配送效率提升', value: '30%' },
      { metric: '燃油成本降低', value: '20%' },
      { metric: '准时率', value: '98.5%' }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
  }
];

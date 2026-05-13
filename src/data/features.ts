import type { Feature } from '@/types';

export const features: Feature[] = [
  {
    id: '1',
    icon: 'Brain',
    title: '智能分析引擎',
    description: '基于深度学习的智能分析引擎，自动识别数据模式，提供精准的业务洞察和预测分析。'
  },
  {
    id: '2',
    icon: 'Zap',
    title: '实时数据处理',
    description: '毫秒级数据处理能力，支持海量数据实时分析，确保业务决策的时效性和准确性。'
  },
  {
    id: '3',
    icon: 'Shield',
    title: '企业级安全',
    description: '采用银行级加密技术，符合GDPR、ISO27001等国际标准，全方位保护您的数据安全。'
  },
  {
    id: '4',
    icon: 'Users',
    title: '协作平台',
    description: '支持多团队协作，权限精细化管理，让团队成员高效协同，共同推动项目进展。'
  },
  {
    id: '5',
    icon: 'BarChart3',
    title: '可视化报表',
    description: '丰富的图表组件库，拖拽式报表设计，让数据呈现更加直观，洞察一目了然。'
  },
  {
    id: '6',
    icon: 'Plug',
    title: '无缝集成',
    description: '提供完善的API接口，支持与主流ERP、CRM系统无缝对接，快速融入现有业务体系。'
  }
];

export const productFeatures = [
  {
    id: '1',
    icon: 'BrainCircuit',
    title: 'AI模型训练平台',
    description: '零代码模型训练环境，支持自定义算法开发，内置丰富的预训练模型库，快速构建专属AI应用。',
    highlights: ['可视化建模', '自动超参调优', '模型版本管理']
  },
  {
    id: '2',
    icon: 'Database',
    title: '数据资产管理',
    description: '统一的数据资产管理平台，支持多源数据接入、清洗、转换，构建企业级数据资产目录。',
    highlights: ['数据血缘追踪', '质量监控', '元数据管理']
  },
  {
    id: '3',
    icon: 'LineChart',
    title: '预测分析服务',
    description: '基于时序分析和机器学习的预测服务，提供销量预测、设备故障预警、风险评估等能力。',
    highlights: ['时序分析', '异常检测', '风险评估']
  },
  {
    id: '4',
    icon: 'MessageSquare',
    title: '智能客服系统',
    description: '基于大语言模型的智能客服解决方案，支持多轮对话、情感分析、知识库自动构建。',
    highlights: ['多轮对话', '情感分析', '知识图谱']
  },
  {
    id: '5',
    icon: 'FileText',
    title: '文档智能处理',
    description: 'OCR识别、文档分类、信息抽取一体化解决方案，自动化处理各类结构化与非结构化文档。',
    highlights: ['OCR识别', '智能分类', '信息抽取']
  },
  {
    id: '6',
    icon: 'Workflow',
    title: '流程自动化',
    description: 'RPA与AI结合的流程自动化平台，实现业务流程的智能化改造，提升运营效率。',
    highlights: ['流程挖掘', '智能审批', '自动执行']
  }
];

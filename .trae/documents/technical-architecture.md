# AI SaaS 网站技术架构文档

## 1. 技术栈选型

### 1.1 前端框架
- **React 18** - 组件化UI开发
- **TypeScript** - 类型安全

### 1.2 构建工具
- **Vite** - 快速开发服务器和构建工具

### 1.3 样式方案
- **Tailwind CSS** - 原子化CSS框架
- **Lucide React** - 图标库

### 1.4 路由
- **React Router DOM v6** - 客户端路由

### 1.5 状态管理
- **Zustand** - 轻量级状态管理（用于主题切换等）

### 1.6 动画
- **Framer Motion** - React动画库

---

## 2. 项目结构

```
ai-saas-website/
├── public/                    # 静态资源
│   ├── images/               # 图片资源
│   └── favicon.ico
├── src/
│   ├── components/           # 可复用组件
│   │   ├── ui/              # 基础UI组件
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/          # 布局组件
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── sections/        # 页面区块组件
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       ├── Stats.tsx
│   │       ├── Testimonials.tsx
│   │       └── CTASection.tsx
│   ├── pages/               # 页面组件
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── Solutions.tsx
│   │   ├── Cases.tsx
│   │   ├── Pricing.tsx
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── hooks/               # 自定义Hooks
│   │   └── useScrollAnimation.ts
│   ├── store/               # 状态管理
│   │   └── themeStore.ts
│   ├── data/                # 静态数据
│   │   ├── features.ts
│   │   ├── solutions.ts
│   │   ├── cases.ts
│   │   ├── pricing.ts
│   │   ├── team.ts
│   │   └── posts.ts
│   ├── utils/               # 工具函数
│   │   └── helpers.ts
│   ├── types/               # TypeScript类型
│   │   └── index.ts
│   ├── App.tsx              # 根组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── .trae/documents/         # 项目文档
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

---

## 3. 组件架构

### 3.1 基础UI组件

#### Button
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
```

#### Card
```typescript
interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
```

### 3.2 布局组件

#### Header
- Logo
- 导航链接
- CTA按钮
- 移动端菜单

#### Footer
- 网站地图链接
- 社交媒体链接
- 版权信息
- 订阅表单

### 3.3 页面区块组件

| 组件 | 用途 | 位置 |
|------|------|------|
| Hero | 首页主视觉区 | 首页 |
| Features | 产品特性展示 | 首页、产品页 |
| Stats | 数据统计展示 | 首页 |
| Testimonials | 客户评价 | 首页 |
| CTASection | 行动号召 | 多个页面 |
| SolutionCard | 解决方案卡片 | 解决方案页 |
| CaseCard | 案例卡片 | 案例页 |
| PricingCard | 定价卡片 | 定价页 |
| TeamMember | 团队成员 | 关于页 |
| BlogCard | 博客文章卡片 | 博客页 |
| ContactForm | 联系表单 | 联系页 |

---

## 4. 路由配置

```typescript
const routes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/solutions', element: <Solutions /> },
  { path: '/cases', element: <Cases /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/about', element: <About /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> },
];
```

---

## 5. 数据结构

### 5.1 产品特性
```typescript
interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}
```

### 5.2 解决方案
```typescript
interface Solution {
  id: string;
  industry: string;
  title: string;
  painPoints: string[];
  solution: string;
  benefits: string[];
  caseStudy?: CaseStudy;
}
```

### 5.3 客户案例
```typescript
interface Case {
  id: string;
  clientName: string;
  industry: string;
  logo?: string;
  title: string;
  description: string;
  results: {
    metric: string;
    value: string;
  }[];
}
```

### 5.4 定价方案
```typescript
interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}
```

### 5.5 团队成员
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}
```

### 5.6 博客文章
```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: number;
}
```

---

## 6. 样式规范

### 6.1 Tailwind配置
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        secondary: {
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

### 6.2 响应式类名规范
- 移动端优先
- 使用 `sm:`, `md:`, `lg:`, `xl:` 前缀

---

## 7. 性能优化

### 7.1 图片优化
- 使用 WebP 格式
- 懒加载非首屏图片
- 响应式图片

### 7.2 代码分割
- 路由级别代码分割
- 组件懒加载

### 7.3 构建优化
- Tree shaking
- 压缩和混淆
- 资源哈希

---

## 8. 部署配置

### 8.1 GitHub Pages部署
```javascript
// vite.config.ts
export default {
  base: '/ai-saas-website/',
  // ...
};
```

### 8.2 GitHub Actions工作流
- 自动构建和部署
- 分支保护

---

## 9. 开发规范

### 9.1 代码规范
- ESLint + Prettier
- TypeScript严格模式
- 组件文件使用PascalCase

### 9.2 Git规范
- 语义化提交信息
- 分支命名规范

---

## 10. 依赖列表

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "zustand": "^4.4.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0"
  }
}
```

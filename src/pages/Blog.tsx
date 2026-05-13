import { SectionTitle, Card } from '@/components/ui';
import { posts, categories } from '@/data/posts';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, User } from 'lucide-react';
import { useState } from 'react';

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredPosts = activeCategory === '全部'
    ? posts
    : posts.filter(post => post.category === activeCategory);

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
              博客
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              洞察与思考
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              分享AI领域的最新趋势、技术实践和行业见解
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden -mx-6 -mt-6 mb-6">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-indigo-600 text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}分钟阅读
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.publishDate}</span>
                    <span className="inline-flex items-center gap-1 text-indigo-600 font-medium group-hover:gap-2 transition-all">
                      阅读更多
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

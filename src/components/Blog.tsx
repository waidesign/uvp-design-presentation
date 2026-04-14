"use client";
import { motion } from 'motion/react';
import { ExternalLink, Car, TrendingUp } from 'lucide-react';
const blogChartViz = '/assets/blog_chart_viz.png';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Common Tactics Unscrupulous Sellers Use To Hide High Mileage',
      author: 'Mike S.',
      date: 'Aug 14, 2024',
      category: 'TIPS & TRICKS',
      icon: <Car size={48} className="text-[#0EB075]" />
    },
    {
      title: 'Technical Audit: How 330M Records Expose Hidden Lemon Skeletons',
      author: 'Tech Team',
      date: 'Aug 12, 2024',
      category: 'TECHNICAL AUDIT',
      image: blogChartViz
    },
    {
      title: 'The Hidden Cost of Odometer Fraud in 2026',
      author: 'Sarah Data',
      date: 'Aug 10, 2024',
      category: 'MARKET DATA',
      icon: <TrendingUp size={48} className="text-[#0EB075]" />
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <h2
            style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '56px', color: '#191c1e', lineHeight: '1.1' }}
          >
            UsedVehiclePro Blog:<br />
            <span style={{ color: '#0eb075' }}>Valuable Content</span> you don&apos;t want to miss
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={idx}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {/* Card Thumbnail Area */}
              <div
                className="relative w-full aspect-[4/2.5] overflow-hidden sketch-border"
                style={{
                  backgroundColor: '#f1f1f1',
                  borderColor: '#004B22',
                  boxShadow: '2px 2px 0px 0px #004B22',
                }}
              >
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="w-full h-full bg-[#f9fff7] sketch-border flex flex-col items-center justify-center gap-4" style={{ borderColor: '#004B22' }}>
                      {post.icon}
                    </div>
                  </div>
                )}
              </div>

              {/* Article Info Container */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div 
                    className="bg-white px-3 py-1 sketch-border rounded-full"
                    style={{ 
                      borderColor: '#004B22',
                      boxShadow: '2px 2px 0px 0px #004B22' 
                    }}
                  >
                    <span style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, fontSize: '12px', color: '#0eb075' }}>
                      {post.category}
                    </span>
                  </div>
                  <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#3d4a41' }}>
                    {post.date}
                  </span>
                </div>

                <h3
                  className="group-hover:text-[#0eb075] transition-colors"
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '32px', color: '#191c1e', lineHeight: '1.2' }}
                >
                  {post.title}
                </h3>

                <div className="flex items-center gap-3">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author.replace(' ', '')}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                    alt={post.author}
                    className="w-8 h-8 rounded-full border border-[#004B22]"
                  />
                  <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#3d4a41' }}>
                    {post.author}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
            <a 
              href="#" 
              className="secondary-button inline-flex items-center gap-2 px-6 py-4"
              style={{ fontSize: '18px' }}
            >
              See all articles
              <ExternalLink size={20} strokeWidth={2.5} />
            </a>
        </div>
      </div>
    </section>
  );
}

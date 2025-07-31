import Link from 'next/link';

// Sample blog posts data (in a real app, this might come from a CMS or markdown files)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15 SSG",
    excerpt: "Learn how to build lightning-fast static sites with Next.js 15 and the new App Router.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tutorial"
  },
  {
    id: 2,
    title: "Why Static Site Generation Matters",
    excerpt: "Explore the benefits of SSG for performance, SEO, and user experience in modern web development.",
    date: "2024-01-10",
    readTime: "3 min read",
    category: "Concepts"
  },
  {
    id: 3,
    title: "Optimizing Your Static Site for Performance",
    excerpt: "Best practices for making your static site even faster with image optimization and code splitting.",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Performance"
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 font-medium"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          <p className="text-xl text-gray-600 mb-12">
            Insights and tutorials about static site generation and modern web development.
          </p>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Want to see more content?
              </h3>
              <p className="text-gray-600 mb-4">
                This is a demo blog page. In a real application, you would fetch posts from a CMS, 
                markdown files, or a database during the build process.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Contentful
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Strapi
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Markdown
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Sanity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

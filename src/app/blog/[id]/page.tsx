import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15 SSG",
    excerpt: "Learn how to build lightning-fast static sites with Next.js 15 and the new App Router.",
    content: `
      <p>Static Site Generation (SSG) with Next.js 15 represents a powerful approach to building modern web applications. In this comprehensive guide, we'll explore how to leverage the latest features of Next.js to create lightning-fast, SEO-friendly websites.</p>
      
      <h2>What's New in Next.js 15?</h2>
      <p>Next.js 15 introduces several improvements to the SSG workflow:</p>
      <ul>
        <li>Enhanced App Router with improved performance</li>
        <li>Better TypeScript integration</li>
        <li>Optimized build processes</li>
        <li>Improved developer experience</li>
      </ul>
      
      <h2>Setting Up Your First SSG Project</h2>
      <p>To get started with Next.js 15 SSG, you'll need to configure your project for static export. This involves updating your next.config.js file and ensuring your pages are compatible with static generation.</p>
      
      <h2>Best Practices</h2>
      <p>When building SSG applications, consider these best practices:</p>
      <ul>
        <li>Optimize images for static export</li>
        <li>Use proper meta tags for SEO</li>
        <li>Implement proper error handling</li>
        <li>Consider your data fetching strategy</li>
      </ul>
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tutorial",
    author: "Next.js Team"
  },
  {
    id: 2,
    title: "Why Static Site Generation Matters",
    excerpt: "Explore the benefits of SSG for performance, SEO, and user experience in modern web development.",
    content: `
      <p>In today's fast-paced digital world, website performance can make or break user experience. Static Site Generation (SSG) has emerged as a powerful solution that addresses many of the challenges faced by modern web applications.</p>
      
      <h2>The Performance Advantage</h2>
      <p>Static sites load incredibly fast because they serve pre-built HTML files directly from a CDN. There's no server-side processing, no database queries, and no wait time for dynamic content generation.</p>
      
      <h2>SEO Benefits</h2>
      <p>Search engines love static sites because:</p>
      <ul>
        <li>Content is immediately available in the HTML</li>
        <li>Fast loading times improve search rankings</li>
        <li>Clean URLs and proper meta tags are easier to implement</li>
        <li>No JavaScript dependency for content rendering</li>
      </ul>
      
      <h2>Security and Reliability</h2>
      <p>Static sites are inherently more secure because there's no server-side code to exploit. They're also more reliable, as there are fewer moving parts that can fail.</p>
    `,
    date: "2024-01-10",
    readTime: "3 min read",
    category: "Concepts",
    author: "Web Dev Expert"
  },
  {
    id: 3,
    title: "Optimizing Your Static Site for Performance",
    excerpt: "Best practices for making your static site even faster with image optimization and code splitting.",
    content: `
      <p>While static sites are inherently fast, there are many techniques you can use to make them even faster and provide an exceptional user experience.</p>
      
      <h2>Image Optimization</h2>
      <p>Images often represent the largest portion of a website's payload. Here's how to optimize them:</p>
      <ul>
        <li>Use modern image formats like WebP and AVIF</li>
        <li>Implement responsive images with different sizes</li>
        <li>Use lazy loading for images below the fold</li>
        <li>Compress images without losing quality</li>
      </ul>
      
      <h2>Code Splitting and Bundling</h2>
      <p>Next.js automatically splits your code, but you can optimize further:</p>
      <ul>
        <li>Use dynamic imports for heavy components</li>
        <li>Implement route-based code splitting</li>
        <li>Optimize your bundle size with tree shaking</li>
        <li>Use a CDN for static assets</li>
      </ul>
      
      <h2>Caching Strategies</h2>
      <p>Implement proper caching headers and use service workers to cache resources effectively. This ensures returning visitors have an even faster experience.</p>
      
      <h2>Measuring Performance</h2>
      <p>Use tools like Lighthouse, WebPageTest, and Core Web Vitals to measure and monitor your site's performance over time.</p>
    `,
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Performance",
    author: "Performance Guru"
  }
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id.toString() === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 font-medium"
          >
            ← Back to Blog
          </Link>
          
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-semibold text-lg">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-gray-500 text-sm">Published on {post.date}</p>
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Enjoyed this article?
              </h3>
              <p className="text-gray-600 mb-6">
                Check out more articles on our blog or return to the homepage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  More Articles
                </Link>
                <Link 
                  href="/"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

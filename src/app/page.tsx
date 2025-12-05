import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Next.js 15 SSG
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This is a simple Static Site Generation (SSG) app built with Next.js 15, 
            TypeScript, and Tailwind CSS. All pages are pre-rendered at build time.
            Change... Env: TEST={process.env.TEST || 'Not set'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              About Page
            </Link>
            <Link 
              href="/blog" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Blog Posts
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">⚡ Fast</h3>
              <p className="text-gray-600">
                Pre-rendered at build time for lightning-fast loading speeds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">🔍 SEO Friendly</h3>
              <p className="text-gray-600">
                Static HTML pages are perfect for search engine optimization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">📱 Responsive</h3>
              <p className="text-gray-600">
                Built with Tailwind CSS for beautiful responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

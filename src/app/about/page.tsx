import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 font-medium"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About This App</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Static Site Generation?</h2>
            <p className="text-gray-600 mb-4">
              Static Site Generation (SSG) is a method of building websites where pages are 
              pre-rendered at build time. This means that when a user visits your site, 
              they receive fully-formed HTML pages that load instantly.
            </p>
            <p className="text-gray-600">
              This approach offers excellent performance, SEO benefits, and security advantages 
              since there&apos;s no server-side processing required at runtime.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <strong>Next.js 15:</strong> React framework with built-in SSG support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <strong>TypeScript:</strong> Type-safe JavaScript for better development experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <strong>Tailwind CSS:</strong> Utility-first CSS framework for rapid styling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <strong>App Router:</strong> Next.js 13+ file-based routing system
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">🚀 Performance</h3>
                <p className="text-gray-600 text-sm">
                  Lightning-fast page loads with pre-rendered HTML
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">🔒 Security</h3>
                <p className="text-gray-600 text-sm">
                  No server-side vulnerabilities with static files
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">💰 Cost-Effective</h3>
                <p className="text-gray-600 text-sm">
                  Host anywhere with minimal infrastructure costs
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📈 Scalable</h3>
                <p className="text-gray-600 text-sm">
                  Handle high traffic with CDN distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

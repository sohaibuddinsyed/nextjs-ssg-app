# Next.js 15 SSG App

A simple Static Site Generation (SSG) application built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Static Site Generation**: All pages are pre-rendered at build time for maximum performance
- 🎨 **Modern Design**: Beautiful, responsive UI built with Tailwind CSS
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 🔍 **SEO Optimized**: Pre-rendered HTML for excellent search engine optimization
- 🚀 **Fast Loading**: Lightning-fast page loads with static files served from CDN
- 📝 **Blog System**: Sample blog with dynamic routes and static generation
- 🎯 **TypeScript**: Full type safety throughout the application

## Pages

- **Home** (`/`): Landing page with app overview and navigation
- **About** (`/about`): Information about SSG and the technologies used
- **Blog** (`/blog`): Blog listing page with sample posts
- **Blog Posts** (`/blog/[id]`): Individual blog post pages with dynamic routing

## Technologies Used

- **Next.js 15**: React framework with built-in SSG support
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **App Router**: Next.js 13+ file-based routing system

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-ssg-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the static site for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will generate static HTML files in the `out` directory that can be deployed to any static hosting service.

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx      # Dynamic blog post pages
│   │   └── page.tsx          # Blog listing page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Reusable components (if any)
└── lib/                      # Utility functions (if any)
```

## Configuration

The app is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

## Deployment

This static site can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `out` folder contents to your GitHub Pages repository

### AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload the `out` folder contents to an S3 bucket
3. Configure CloudFront for CDN distribution

## Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your component
3. The page will be automatically included in the static build

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Customize the Tailwind configuration in `tailwind.config.ts`

### Blog Content
- Blog posts are currently stored as static data in the components
- For a real application, consider using:
  - Markdown files with frontmatter
  - Headless CMS (Contentful, Strapi, Sanity)
  - External APIs during build time

## Performance

This SSG app is optimized for performance:
- Pre-rendered HTML for instant loading
- Automatic code splitting
- Optimized images (when using Next.js Image component)
- CSS optimization with Tailwind
- Static file caching

## SEO

The app includes SEO best practices:
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags (can be extended with next/head)
- Fast loading times
- Mobile-responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build process
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

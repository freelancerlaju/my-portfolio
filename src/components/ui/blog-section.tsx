import { useState } from "react";
import { BlogModal } from "./blog-modal";
import { ArrowRight, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";

import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const blogs = [
  {
    title: "React 19: What's New and Game-Changing",
    slug: "#",
    description:
      "Explore the latest features in React 19, including Server Components, improved Suspense, and new hooks that will transform your development workflow.",
    content:
      "React 19 introduces groundbreaking features that revolutionize how we build web applications. Server Components allow you to render components on the server, reducing JavaScript bundle sizes and improving performance. The new use() hook simplifies data fetching and resource management, while improved Suspense boundaries make loading states more predictable. React Compiler automatically optimizes your code, eliminating the need for manual memoization in many cases. These features combined create a more efficient, maintainable, and performant React ecosystem.",
    learningPoints:
      "React Server Components fundamentally change how we think about rendering by allowing components to run exclusively on the server, dramatically reducing client-side JavaScript and improving initial page load times. The new use() hook provides a cleaner API for handling promises and async operations directly within components without complex patterns. React Compiler automatically memoizes components and values, eliminating manual optimization with useMemo and useCallback in most cases. Enhanced Suspense boundaries offer better error handling and loading states, making it easier to create smooth user experiences. Improved concurrent rendering ensures your UI remains responsive even during heavy computations. Form actions provide built-in support for progressive enhancement and server-side form handling. The new document metadata API simplifies SEO optimization by managing title, meta tags, and link elements declaratively within components.",
    keyTakeaway:
      "React 19 represents a major leap forward in web development, offering powerful tools for building faster, more efficient applications with less boilerplate code.",
    learnMoreUrl: "https://react.dev/blog/2024/04/25/react-19",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-10-15",
    author: "Freelancer Laju",
    readTime: "8 min read",
  },
  {
    title: "TypeScript Best Practices in 2025",
    slug: "#",
    description:
      "Master advanced TypeScript patterns, utility types, and type guards to write safer and more maintainable code in modern web applications.",
    content:
      "TypeScript has become essential for building scalable web applications. This comprehensive guide covers advanced patterns including discriminated unions, branded types, and conditional types. Learn how to leverage utility types like Partial, Pick, and Omit to create flexible, reusable type definitions. Discover type guards and assertion functions that ensure type safety at runtime. Master the art of generic constraints and mapped types to build robust, type-safe APIs. These patterns will help you catch bugs early and improve code maintainability.",
    learningPoints:
      "Advanced TypeScript patterns like discriminated unions enable exhaustive type checking and eliminate entire categories of runtime errors through compile-time validation. Utility types such as Partial, Required, Pick, Omit, and Record transform existing types into new variations, reducing code duplication and improving maintainability. Type guards and assertion functions provide runtime type safety by narrowing types within conditional blocks, ensuring your code handles all possible cases correctly. Generic constraints allow you to write flexible, reusable functions and classes while maintaining strict type safety across your codebase. Mapped types enable programmatic transformation of object types, creating powerful abstractions for complex data structures. Template literal types provide string manipulation at the type level, enabling sophisticated API design patterns. Const assertions preserve literal types and create deeply readonly structures for configuration objects and constant data.",
    keyTakeaway:
      "Strong TypeScript skills are crucial for modern web development. These best practices will help you write safer, more maintainable code and catch bugs before they reach production.",
    learnMoreUrl: "https://www.typescriptlang.org/docs/handbook/intro.html",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-10-08",
    author: "Freelancer Laju",
    readTime: "10 min read",
  },
  {
    title: "Tailwind CSS: From Zero to Hero",
    slug: "#",
    description:
      "Learn how to build beautiful, responsive interfaces with Tailwind CSS. Discover utility-first patterns, custom configurations, and performance optimization.",
    content:
      "Tailwind CSS revolutionizes how we write CSS with its utility-first approach. This guide takes you from basic concepts to advanced techniques. Learn how to configure Tailwind for your design system, create custom utilities, and optimize bundle sizes with PurgeCSS. Master responsive design with Tailwind's mobile-first breakpoint system. Discover how to use @apply directives strategically, implement dark mode effortlessly, and create reusable component classes. Build beautiful, consistent UIs faster than ever before.",
    learningPoints:
      "Utility-first CSS methodology revolutionizes styling by composing designs from single-purpose utility classes, dramatically speeding up development and reducing context switching. Custom Tailwind configuration allows you to define your design system tokens including colors, spacing, typography, and breakpoints, ensuring consistency across your entire application. The JIT (Just-In-Time) compiler generates styles on-demand, enabling arbitrary values and reducing build times significantly. Responsive design becomes intuitive with mobile-first breakpoint prefixes, making it easy to create adaptive layouts for any screen size. Dark mode implementation requires minimal effort with the built-in dark variant, automatically handling theme switching throughout your application. Component extraction using @apply directive helps balance utility classes with component reusability when needed. PurgeCSS integration automatically removes unused styles in production, resulting in tiny CSS bundles typically under 10KB gzipped.",
    learnMoreUrl: "https://tailwindcss.com/docs",
    keyTakeaway:
      "Tailwind CSS dramatically speeds up UI development while maintaining design consistency. Once you master its utility-first approach, you'll never want to go back to traditional CSS.",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-09-28",
    author: "Freelancer Laju",
    readTime: "12 min read",
  },
  {
    title: "Next.js 15 App Router Deep Dive",
    slug: "#",
    description:
      "A comprehensive guide to Next.js App Router, server actions, streaming, and building performant full-stack applications with modern React.",
    content:
      "Next.js 15's App Router represents the future of React development. This in-depth guide explores Server and Client Components, data fetching patterns, and streaming with Suspense. Learn how to implement Server Actions for type-safe mutations, use parallel and intercepting routes for complex layouts, and optimize performance with partial pre-rendering. Discover advanced caching strategies, middleware patterns, and how to build truly full-stack applications with Next.js. Master the paradigm shift from pages to app directory.",
    learningPoints:
      "Server and Client Components architecture enables optimal data fetching patterns by fetching data close to its source on the server while maintaining interactivity through client components. Server Actions provide a revolutionary way to handle mutations and form submissions with automatic progressive enhancement and type-safety end-to-end. The App Router's file-based routing system with layouts, loading, and error boundaries creates predictable patterns for building complex applications with nested routes. Streaming with Suspense allows you to progressively render UI chunks as data becomes available, improving perceived performance dramatically. Partial Pre-Rendering (PPR) combines static and dynamic rendering on the same page, delivering instant static shell while streaming dynamic content. Built-in caching strategies across multiple layers ensure optimal performance without manual cache management. Middleware enables powerful edge computing capabilities for authentication, redirects, and request modification before rendering.",
    learnMoreUrl: "https://nextjs.org/docs",
    keyTakeaway:
      "Next.js 15 App Router combines the best of server and client rendering, enabling you to build incredibly fast, SEO-friendly, and interactive web applications with minimal configuration.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-09-20",
    author: "Freelancer Laju",
    readTime: "15 min read",
  },
  {
    title: "Web Performance Optimization Tips",
    slug: "#",
    description:
      "Boost your website speed with code splitting, lazy loading, image optimization, and lighthouse score improvements. Make your users happy!",
    content:
      "Website performance directly impacts user experience and conversion rates. This guide covers essential optimization techniques: implement code splitting to reduce initial bundle size, use lazy loading for images and components, optimize web fonts with font-display strategies, and leverage browser caching effectively. Learn about Core Web Vitals (LCP, FID, CLS) and how to improve them. Discover tools like Lighthouse, WebPageTest, and Chrome DevTools for measuring and debugging performance issues. Every millisecond counts!",
    learningPoints:
      "Code splitting strategies using dynamic imports reduce initial bundle sizes by loading JavaScript only when needed, significantly improving Time to Interactive. Image optimization through modern formats like WebP and AVIF combined with responsive images using srcset delivers appropriate image sizes for each device and viewport. Core Web Vitals including Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) directly impact SEO rankings and user experience metrics. Resource hints like preload, prefetch, and preconnect optimize critical resource loading and reduce latency for important assets. Font optimization strategies including font-display swap and subsetting prevent flash of invisible text while minimizing download sizes. Third-party script optimization through async, defer, and script strategies prevents blocking main thread execution. Performance monitoring with Real User Monitoring (RUM) provides insights into actual user experiences across different devices and network conditions.",
    learnMoreUrl: "https://web.dev/learn-web-vitals/",
    keyTakeaway:
      "Performance optimization is not optional—it's essential. A fast website improves user satisfaction, SEO rankings, and ultimately your business success.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-09-12",
    author: "Freelancer Laju",
    readTime: "9 min read",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    slug: "#",
    description:
      "Understand the differences between CSS Grid and Flexbox, their strengths, weaknesses, and practical examples of when to use each layout system.",
    content:
      "CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Flexbox excels at one-dimensional layouts—arranging items in rows or columns. Use it for navigation bars, card layouts, and flexible component spacing. CSS Grid shines with two-dimensional layouts—creating complex page structures with rows and columns simultaneously. Learn when to use each, how to combine them effectively, and common layout patterns for both. Master auto-fit, auto-fill, minmax(), and flexible track sizing.",
    learningPoints:
      "Flexbox excels at one-dimensional layouts arranging items along a single axis with powerful alignment and distribution options like space-between and flex-grow. CSS Grid provides two-dimensional layout control managing both rows and columns simultaneously through explicit grid lines and implicit grid behavior. Common Flexbox patterns include navigation bars with space-between, card layouts with flex-wrap, and centering elements both horizontally and vertically. Grid template areas provide a semantic way to define layout structure using named grid areas that make complex responsive layouts intuitive. Auto-fit and auto-fill combined with minmax() create responsive grids that adapt to available space without media queries. Combining both technologies leverages their strengths using Grid for page-level structure and Flexbox for component-level alignment. Understanding when to use each prevents over-complicating solutions and results in more maintainable, performant CSS code.",
    learnMoreUrl:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
    keyTakeaway:
      "Flexbox and Grid aren't competitors—they're complementary tools. Use Flexbox for component-level layouts and Grid for page-level structure to build modern, responsive designs.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-09-05",
    author: "Freelancer Laju",
    readTime: "7 min read",
  },
  {
    title: "State Management in React: 2025 Edition",
    slug: "#",
    description:
      "Compare modern state management solutions: Zustand, Jotai, Redux Toolkit, and React Context. Find the best fit for your project needs.",
    content:
      "State management has evolved significantly in React. This comprehensive comparison covers modern solutions: Zustand for simplicity, Jotai for atomic state, Redux Toolkit for predictable state containers, and React Context for prop drilling solutions. Learn when to use local state vs global state, how to structure your state for scalability, and patterns for async state management. Discover performance implications, DevTools integration, and migration strategies. Choose the right tool for your specific use case.",
    learningPoints:
      "Modern state management has evolved beyond Redux with lighter alternatives like Zustand offering minimal boilerplate while maintaining predictability. Atomic state with Jotai enables fine-grained reactivity where components subscribe only to atoms they use, preventing unnecessary re-renders. Redux Toolkit dramatically simplifies traditional Redux patterns with createSlice, eliminating action types and reducers boilerplate while maintaining time-travel debugging. React Context provides built-in state sharing perfect for theme, authentication, and configuration data without external dependencies. Understanding when to colocate state versus lifting it up prevents premature optimization and over-engineering simple scenarios. Derived state and selectors with libraries like Reselect ensure computed values update efficiently without manual memoization. Async state management patterns including optimistic updates and error boundaries create robust user experiences even with unreliable networks.",
    learnMoreUrl: "https://react.dev/learn/managing-state",
    keyTakeaway:
      "There's no one-size-fits-all state solution. Understand your app's needs—Zustand for simplicity, Redux for predictability, Jotai for flexibility, or Context for simple cases.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-08-30",
    author: "Freelancer Laju",
    readTime: "11 min read",
  },
  {
    title: "Building APIs with Node.js and Express",
    slug: "#",
    description:
      "Create robust RESTful APIs with Node.js and Express. Learn about middleware, error handling, validation, and securing your endpoints.",
    content:
      "Build production-ready RESTful APIs with Node.js and Express. This guide covers everything from project setup to deployment. Learn proper route structuring, middleware chains, error handling strategies, and request validation with Zod or Joi. Implement authentication with JWT, secure your API against common vulnerabilities (CORS, XSS, SQL injection), and optimize performance with caching and rate limiting. Master async/await patterns, database integration, and API documentation with Swagger. Build APIs that scale.",
    learningPoints:
      "Professional Express.js project structure separates concerns using routers, controllers, middleware, and service layers for maintainability at scale. Middleware chains enable powerful composition patterns for authentication, validation, logging, and error handling without cluttering route handlers. Request validation using Zod or Joi ensures type-safe inputs, preventing injection attacks and malformed data from reaching your business logic. JWT authentication provides stateless, scalable auth perfect for microservices while refresh tokens enable secure long-lived sessions. Security best practices including helmet for headers, cors configuration, rate limiting, and input sanitization protect against common vulnerabilities. Error handling middleware with proper logging and monitoring ensures production reliability and quick incident response. API documentation using Swagger or OpenAPI specifications improves developer experience and enables automatic client generation.",
    learnMoreUrl: "https://expressjs.com/en/guide/routing.html",
    keyTakeaway:
      "A well-architected API is the backbone of modern applications. Master Express.js patterns, security best practices, and error handling to build reliable backend services.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-08-22",
    author: "Freelancer Laju",
    readTime: "13 min read",
  },
  {
    title: "JavaScript ES2024 Features You Should Know",
    slug: "#",
    description:
      "Discover the latest JavaScript features including Array grouping, Promise.withResolvers, and other powerful additions to modern JavaScript.",
    content:
      "JavaScript continues to evolve with ES2024 bringing exciting new features. Explore Array grouping for elegant data organization, Promise.withResolvers for cleaner async control, and temporal API for better date/time handling. Learn about new string methods, decorator patterns, and pipeline operators. Understand how these features improve code readability and developer experience. Discover browser support and polyfill strategies. Stay current with the language that powers the web and write more expressive, maintainable code.",
    learningPoints:
      "Array grouping methods enable elegant data organization by categorizing items based on computed keys, replacing verbose reduce patterns with intuitive syntax. Promise.withResolvers provides explicit control over promise resolution and rejection, simplifying async patterns in event-driven architectures. The Temporal API finally solves JavaScript's notorious date handling problems with immutable, timezone-aware objects that make calendar math intuitive. New string methods including isWellFormed and toWellFormed ensure proper Unicode handling in internationalized applications. Record and tuple proposals introduce immutable data structures enabling efficient comparison and memoization without deep equality checks. Pattern matching proposals bring declarative conditional logic similar to switch statements but vastly more powerful and expressive. Top-level await in modules simplifies async initialization without awkward IIFE wrappers or initialization functions.",
    learnMoreUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    keyTakeaway:
      "JavaScript's evolution continues to make development more enjoyable. ES2024 features help you write cleaner, more expressive code—stay updated to leverage these powerful tools.",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-08-15",
    author: "Freelancer Laju",
    readTime: "8 min read",
  },
  {
    title: "Framer Motion: Creating Smooth Animations",
    slug: "#",
    description:
      "Master Framer Motion to create buttery smooth animations in React. From basic transitions to complex orchestrated sequences.",
    content:
      "Framer Motion makes animation in React delightful and powerful. Learn the fundamentals of motion components, variants, and animation controls. Create smooth page transitions, implement gesture-based interactions (drag, hover, tap), and orchestrate complex animation sequences with stagger effects. Master layout animations that automatically animate position and size changes. Explore AnimatePresence for exit animations, and optimize performance with will-change and transform properties. Build interfaces that feel alive and responsive.",
    learningPoints:
      "Motion components wrap standard HTML elements with animation capabilities while maintaining full TypeScript support and React integration. Variants enable declarative animation orchestration defining multiple animation states that cascade through component trees with automatic stagger effects. Gesture recognition for drag, hover, tap, pan, and focus provides rich interactivity with physics-based motion and spring animations. Layout animations automatically animate position and size changes even when triggered by external state, eliminating manual calculation of transform values. AnimatePresence enables exit animations for components leaving the DOM, crucial for modals, dropdowns, and page transitions. Performance optimization through transform and opacity animations leverages GPU acceleration while avoiding layout thrashing. Scroll-triggered animations using useScroll and useTransform create engaging parallax effects and reveal animations tied to scroll position.",
    learnMoreUrl: "https://www.framer.com/motion/",
    keyTakeaway:
      "Great animations enhance user experience without overwhelming users. Framer Motion gives you the power to create professional, performant animations that delight your users.",
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-08-08",
    author: "Freelancer Laju",
    readTime: "10 min read",
  },
  {
    title: "Git & GitHub Workflow for Teams",
    slug: "#",
    description:
      "Learn professional Git workflows, branching strategies, pull requests, code reviews, and collaboration best practices for development teams.",
    content:
      "Effective Git workflows are essential for team productivity. Master branching strategies like Git Flow and GitHub Flow. Learn how to write meaningful commit messages, create effective pull requests, and conduct thorough code reviews. Understand rebasing vs merging, conflict resolution strategies, and when to use interactive rebase. Discover GitHub Actions for CI/CD automation, protected branches, and team collaboration patterns. Set up pre-commit hooks and establish code quality gates. Build a workflow that scales with your team.",
    learningPoints:
      "Branching strategies like Git Flow and GitHub Flow provide structure for feature development, releases, and hotfixes preventing merge conflicts and deployment chaos. Meaningful commit messages following conventional commits enable automatic changelog generation and semantic versioning through CI/CD pipelines. Pull request best practices including atomic commits, clear descriptions, and linked issues facilitate efficient code reviews and maintain project documentation. Code review techniques focusing on architecture, logic, and edge cases improve code quality while mentoring junior developers through constructive feedback. GitHub Actions automate testing, linting, building, and deployment creating reliable CI/CD pipelines that catch issues before production. Protected branches with required reviews and status checks enforce quality gates preventing direct pushes to main branches. Pre-commit hooks using Husky enforce code formatting, linting, and tests locally before code reaches remote repositories.",
    learnMoreUrl:
      "https://docs.github.com/en/get-started/quickstart/github-flow",
    keyTakeaway:
      "Good Git practices prevent chaos in team projects. Master workflows, communication, and automation to collaborate effectively and ship code confidently.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-08-01",
    author: "Freelancer Laju",
    readTime: "9 min read",
  },
  {
    title: "Debugging React Apps Like a Pro",
    slug: "#",
    description:
      "Essential debugging techniques, React DevTools tips, error boundaries, and common pitfalls to avoid when building React applications.",
    content:
      "Effective debugging is crucial for React development. Master React DevTools for inspecting component trees, props, and state. Learn to use Profiler for identifying performance bottlenecks and unnecessary re-renders. Implement error boundaries for graceful error handling, and use React's strict mode to catch potential issues early. Discover debugging techniques for hooks, context, and async operations. Use source maps effectively, leverage browser debugger breakpoints, and learn console debugging strategies. Catch bugs before they reach production.",
    learningPoints:
      "React DevTools Components tab reveals component hierarchy, props, and state enabling quick inspection of data flow and component relationships. Profiler tab identifies performance bottlenecks by measuring render times and frequencies, highlighting components causing unnecessary re-renders. Error boundaries catch JavaScript errors in component tree preventing entire app crashes while providing graceful fallback UI and error logging. Strict Mode catches side effects in render phase and unsafe lifecycle methods during development preventing subtle bugs in production. Console debugging strategies using console.table for objects and console.trace for call stacks improve debugging efficiency over basic console.log. Source maps enable debugging minified production code by mapping bundled code back to original source files in browser DevTools. Browser debugger breakpoints combined with React-specific debugging techniques catch state updates and effect executions at precise moments.",
    learnMoreUrl: "https://react.dev/learn/react-developer-tools",
    keyTakeaway:
      "Great developers aren't those who write bug-free code—they're those who can debug efficiently. Master these tools and techniques to become a more effective React developer.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=640&h=360&fit=crop&q=80",
    createdAt: "2025-07-25",
    author: "Freelancer Laju",
    readTime: "12 min read",
  },
];

export function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogs)[0] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBlogClick = (blog: (typeof blogs)[0]) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBlog(null), 300);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <AnimatedText
          text="Latest Blogs"
          textClassName="text-2xl md:text-4xl font-extrabold text-blue-600"
          underlineClassName="text-blue-500"
          underlinePath="M 0,10 Q 100,0 200,10 Q 300,20 400,10"
          underlineHoverPath="M 0,10 Q 100,20 200,10 Q 300,0 400,10"
          underlineDuration={2.0}
        />
        <p className="mt-3 sm:mt-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
          Explore the latest insights, tutorials, and trends in web development
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-6 lg:gap-7 pb-8 sm:pb-12">
        {blogs.map((blog) => (
          <motion.div key={blog.title} className="h-full">
            <Card
              onClick={() => handleBlogClick(blog)}
              className="group relative overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-lg sm:rounded-xl h-full flex flex-col cursor-pointer hover:shadow-lg dark:hover:shadow-xl hover:shadow-gray-300/50 dark:hover:shadow-gray-900/50 active:scale-[0.98]"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden p-2.5 sm:p-3 pb-0 rounded-t-lg sm:rounded-t-xl">
                <div className="relative aspect-video rounded-md sm:rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out"
                  />
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pb-1.5 sm:pb-2 flex-1 flex flex-col p-3 sm:p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <CardTitle className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pb-2 sm:pb-3 flex-1 px-3 sm:px-4">
                <CardDescription className="text-[11px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                  {blog.description}
                </CardDescription>
              </CardContent>

              {/* Footer with Meta Info */}
              <CardFooter className="pt-0 pb-3 sm:pb-4 px-3 sm:px-4">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full">
                  <div className="flex items-center gap-1 px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200/50 dark:border-gray-600/50 shadow-sm">
                    <User className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                    <span className="text-[9px] sm:text-[10px] font-medium text-gray-600 dark:text-gray-400 truncate max-w-[60px] sm:max-w-none">
                      {blog.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200/50 dark:border-gray-600/50 shadow-sm">
                    <Clock className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                    <span className="text-[9px] sm:text-[10px] font-medium text-gray-600 dark:text-gray-400">
                      {blog.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200/50 dark:border-gray-600/50 shadow-sm">
                    <time
                      dateTime={blog.createdAt}
                      className="text-[9px] sm:text-[10px] font-medium text-gray-600 dark:text-gray-400"
                    >
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-[10px] sm:text-xs md:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 px-1.5 sm:px-2 h-6 sm:h-7"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBlogClick(blog);
                    }}
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-0.5" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <BlogModal
        isOpen={isModalOpen}
        onClose={closeModal}
        blog={selectedBlog}
      />
    </div>
  );
}

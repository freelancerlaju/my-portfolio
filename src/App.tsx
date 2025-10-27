import { lazy, Suspense } from "react";
import { NavBarDemo } from "./components/ui/navbar-demo";
import { Hero } from "./components/Hero";
import LoadingScreen from "./components/loading/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import { useLoading } from "./hooks/useLoading";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { Analytics } from "@vercel/analytics/react";

// Lazy load heavy components for better initial load performance
const About = lazy(() =>
  import("./components/About").then((m) => ({ default: m.About }))
);
const Skills = lazy(() =>
  import("./components/Skills").then((m) => ({ default: m.Skills }))
);
const Projects = lazy(() =>
  import("./components/Projects").then((m) => ({ default: m.Projects }))
);
const Blogs = lazy(() =>
  import("./components/Blogs").then((m) => ({ default: m.Blogs }))
);
const ServicesSimple = lazy(() =>
  import("./components/ServicesSimple").then((m) => ({
    default: m.ServicesSimple,
  }))
);
const Certifications = lazy(() =>
  import("./components/Certifications").then((m) => ({
    default: m.Certifications,
  }))
);
const Education = lazy(() =>
  import("./components/Education").then((m) => ({ default: m.Education }))
);
const Testimonials = lazy(() =>
  import("./components/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer }))
);

function App() {
  const isLoading = useLoading();

  console.log("App rendering, isLoading:", isLoading);

  return (
    <ErrorBoundary>
      <LoadingScreen isLoading={isLoading} />
      <div
        className={`min-h-screen bg-background text-foreground transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <NavBarDemo />
        <Hero />
        <ErrorBoundary
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="max-w-md p-8 text-center">
                <p className="text-red-600 dark:text-red-400 mb-4">
                  Some sections failed to load. Please refresh the page.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Reload Page
                </button>
              </div>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Loading content...
                  </p>
                </div>
              </div>
            }
          >
            <About />
            <Skills />
            <Projects />
            <Blogs />
            <ServicesSimple />
            <Certifications />
            <Education />
            <Testimonials />
            <Contact />
            <Footer />
          </Suspense>
        </ErrorBoundary>
        <ScrollToTop />
        <ScrollProgressBar />
        <Analytics />
      </div>
    </ErrorBoundary>
  );
}

export default App;

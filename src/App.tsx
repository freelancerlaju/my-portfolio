import { lazy, Suspense } from "react";
import { NavBarDemo } from "./components/ui/navbar-demo";
import { Hero } from "./components/Hero";
import LoadingScreen from "./components/loading/LoadingScreen";
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

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div
        className={`min-h-screen bg-background text-foreground transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <NavBarDemo />
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
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
        <ScrollToTop />
        <ScrollProgressBar />
        <Analytics />
      </div>
    </>
  );
}

export default App;

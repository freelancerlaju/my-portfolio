import { NavBarDemo } from "./components/ui/navbar-demo";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Blogs } from "./components/Blogs";
import { ServicesSimple } from "./components/ServicesSimple";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import LoadingScreen from "./components/loading/LoadingScreen";
import { useLoading } from "./hooks/useLoading";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { Analytics } from "@vercel/analytics/react";

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
        <ScrollToTop />
        <ScrollProgressBar />
        <Analytics />
      </div>
    </>
  );
}

export default App;

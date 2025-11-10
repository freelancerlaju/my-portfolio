import { BlogSection } from "./ui/blog-section";
import { useEffect } from "react";

export function Blogs() {
  useEffect(() => {
    console.log("Blogs section mounted successfully");
  }, []);

  return (
    <section id="blogs" className="py-10 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />

      {/* Content */}
      <div className="relative z-10">
        <BlogSection />
      </div>
    </section>
  );
}

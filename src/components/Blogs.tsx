import { BlogSection } from "./ui/blog-section";
import { useEffect } from "react";

export function Blogs() {
  useEffect(() => {
    console.log("Blogs section mounted successfully");
  }, []);

  return (
    <section id="blogs" className="py-10 bg-gray-50 dark:bg-gray-800 relative">
      <BlogSection />
    </section>
  );
}

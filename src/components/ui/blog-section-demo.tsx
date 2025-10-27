import { BlogSection } from "./blog-section";

/**
 * Demo component to test BlogSection independently
 * Access this by temporarily replacing App content
 */
export default function BlogSectionDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Blog Section Test
        </h1>
        <BlogSection />
      </div>
    </div>
  );
}

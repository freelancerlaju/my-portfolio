import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./ui/BlogCard";
import { SectionTitle } from "./ui/SectionTitle";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

export function Blogs() {
  const { blogs, loading } = useBlogs();

  return (
    <section id="blogs" className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>
          <AnimatedText
            text="Latest Blogs"
            textClassName="text-2xl md:text-4xl font-extrabold text-blue-600"
            underlineClassName="text-red-500"
            underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            underlineDuration={2.0}
          />
        </SectionTitle>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading blogs...
          </p>
        ) : (
          <>
            <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <BlogCard key={blog.slug} {...blog} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

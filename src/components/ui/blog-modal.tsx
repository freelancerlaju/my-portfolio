import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  User,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: {
    title: string;
    description: string;
    content: string;
    learningPoints: string;
    keyTakeaway: string;
    learnMoreUrl: string;
    image: string;
    author: string;
    createdAt: string;
    readTime: string;
  } | null;
}

export function BlogModal({ isOpen, onClose, blog }: BlogModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";

      // Enable smooth scrolling and reset expanded state
      const modalElement = document.querySelector(".modal-content");
      if (modalElement) {
        modalElement.scrollTop = 0; // Start from top
      }
      setIsExpanded(false); // Reset to collapsed when modal opens
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!blog) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="relative w-full max-w-4xl max-h-[90vh] pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="modal-content relative w-full h-full max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl scrollbar-hide scroll-smooth"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors group"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>

                {/* Hero Image */}
                <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 -mt-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://placehold.co/800x400?text=Blog+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 lg:p-10 pb-40">
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.createdAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    {blog.title}
                  </h2>

                  {/* Description/Content */}
                  <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
                    <div className="relative">
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : "90px",
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden relative"
                      >
                        <p className="text-foreground/90 leading-relaxed text-lg">
                          {blog.content}
                        </p>
                      </motion.div>

                      {/* Gradient Fade - Only show when collapsed */}
                      {!isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none" />
                      )}
                    </div>

                    {/* See More/Less Button */}
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group"
                    >
                      {isExpanded ? (
                        <>
                          See less
                          <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                        </>
                      ) : (
                        <>
                          See more
                          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                        </>
                      )}
                    </button>
                    {/* Additional Content Section */}
                    <div className="mt-2 space-y-6">
                      <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-500/5 rounded-r-lg">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          What You'll Learn
                        </h3>
                        <p className="text-foreground/80 leading-relaxed text-base">
                          {blog.learningPoints}
                        </p>
                      </div>

                      <div className="bg-accent/50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          Key Takeaway
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {blog.keyTakeaway}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                          Web Development
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                          Frontend
                        </span>
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                          Best Practices
                        </span>
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                          Tutorial
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4 justify-center">
                    <a
                      href={blog.learnMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Learn more details
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={onClose}
                      className="px-8 py-3 border-2 border-border hover:bg-accent rounded-lg font-semibold transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Fade/Blur Effect - Fixed at bottom of modal viewport */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none rounded-b-2xl"
                style={{
                  background:
                    "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 20%, hsl(var(--background) / 0.7) 50%, transparent 100%)",
                  zIndex: 15,
                }}
              />
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Clock,
  User,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Button } from "./button";

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-24 sm:pt-28 md:pt-20 lg:pt-16 pointer-events-none">
            <div className="relative w-full max-w-4xl max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-7rem)] pointer-events-auto mt-4 sm:mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="modal-content relative w-full h-full max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-7rem)] overflow-y-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-2xl scrollbar-hide scroll-smooth"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group shadow-md"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </button>

                {/* Hero Image */}
                <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <div className="relative overflow-hidden p-5 pb-0">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
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
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 lg:p-10 pb-40">
                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <div className="flex items-center gap-1.5 px-2.5 py-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200/50 dark:border-gray-600/50 shadow-sm">
                      <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200/50 dark:border-gray-600/50 shadow-sm">
                      <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{blog.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200/50 dark:border-gray-600/50 shadow-sm">
                      <time dateTime={blog.createdAt} className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {blog.description}
                  </p>

                  {/* Content */}
                  <div className="mb-6">
                    <div className="relative">
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : "120px",
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden relative"
                      >
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                          {blog.content}
                        </p>
                      </motion.div>

                      {/* Gradient Fade - Only show when collapsed */}
                      {!isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 dark:from-gray-800/90 via-white/60 dark:via-gray-800/60 to-transparent pointer-events-none" />
                      )}
                    </div>

                    {/* See More/Less Button */}
                    <Button
                      variant="ghost"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                    >
                      {isExpanded ? (
                        <>
                          See less
                          <ChevronUp className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-0.5" />
                        </>
                      ) : (
                        <>
                          See more
                          <ChevronDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Additional Content Section */}
                  <div className="mt-8 space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-500/5 dark:bg-blue-500/10 rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                        What You'll Learn
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                        {blog.learningPoints}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-gray-200/50 dark:border-gray-600/50">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                        Key Takeaway
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {blog.keyTakeaway}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1.5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 text-sm font-medium shadow-sm">
                        Web Development
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50 text-sm font-medium shadow-sm">
                        Frontend
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-800/50 text-sm font-medium shadow-sm">
                        Best Practices
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50 text-sm font-medium shadow-sm">
                        Tutorial
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-700/60 flex flex-wrap gap-4 justify-center">
                    <Button
                      asChild
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <a
                        href={blog.learnMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={onClose}
                      className="px-8 py-3 border-2 border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-300"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Fade/Blur Effect */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none rounded-b-2xl bg-gradient-to-t from-white/50 via-white/25 to-transparent dark:from-gray-800/50 dark:via-gray-800/25"
                style={{
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

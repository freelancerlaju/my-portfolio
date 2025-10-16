"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "../Link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let mostVisibleSection = null;
        let highestRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
            highestRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target;
          }
        });

        if (mostVisibleSection) {
          const sectionId = (mostVisibleSection as HTMLElement).id;
          const correspondingItem = items.find(
            (item) => item.url === `#${sectionId}`
          );
          if (correspondingItem) {
            setActiveTab(correspondingItem.name);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "-20% 0px -20% 0px", // More sensitive detection
      }
    );

    // Enhanced scroll detection for better responsiveness
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          const sectionId = element.id;
          const correspondingItem = items.find(
            (item) => item.url === `#${sectionId}`
          );
          if (correspondingItem && activeTab !== correspondingItem.name) {
            setActiveTab(correspondingItem.name);
          }
        }
      });
    };

    // Use both IntersectionObserver and scroll listener for better detection
    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, activeTab]);

  return (
    <motion.div
      className={cn(
        "fixed top-0 -translate-x-1/2 z-50 pt-3 pb-2 px-2 sm:px-4 w-full",
        className
      )}
      initial={{ y: -100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      }}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 bg-background/95 border border-border/50 backdrop-blur-lg py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 lg:px-5 rounded-full shadow-lg ring-1 ring-border/20 mx-auto w-fit max-w-[calc(100vw-1rem)] sm:max-w-none">
        <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={item.url}
                  onClick={() => {
                    setActiveTab(item.name);
                  }}
                  className={cn(
                    "relative cursor-pointer text-xs sm:text-sm font-semibold px-1.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 flex-shrink-0",
                    "text-foreground/80 hover:text-primary hover:scale-105",
                    isActive && "bg-muted text-primary scale-105"
                  )}
                >
                  <span className="hidden sm:inline whitespace-nowrap text-xs sm:text-sm">
                    {item.name}
                  </span>
                  <span className="sm:hidden flex items-center justify-center">
                    <Icon size={16} strokeWidth={2.5} className="w-4 h-4" />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="flex-shrink-0 ml-1 sm:ml-2 pl-1 sm:pl-2 border-l border-border/30">
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  );
}

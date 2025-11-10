import { memo } from "react";
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface TechStackItem {
  icon: IconType;
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  category?: string;
  techStack: TechStackItem[];
}

export const ProjectCard = memo(function ProjectCard({
  title,
  description,
  image,
  link,
  github,
  category,
  techStack,
}: ProjectCardProps) {
  return (
    <motion.div
      className="h-full"
    >
      <Card className="group relative overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl h-full flex flex-col hover:shadow-lg dark:hover:shadow-xl hover:shadow-gray-300/50 dark:hover:shadow-gray-900/50">
        {/* Image Container */}
        <div className="relative overflow-hidden p-5 pb-0 rounded-t-2xl">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
            <img
              src={image}
              alt={`Screenshot of ${title}`}
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out"
            />

            {/* Category Badge - Top Right */}
            {category && (
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 shadow-md">
                  {category}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <CardHeader className="pb-2 flex-1 flex flex-col">
          <div className="flex items-center justify-between gap-3 mb-1">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </CardTitle>
            <div className="flex gap-1 flex-shrink-0">
              {github && github !== "#" && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                        asChild
                      >
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View on GitHub"
                        >
                          <SiGithub className="h-5 w-5" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View on GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {link && link !== "#" && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                        asChild
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit website"
                        >
                          <FaGlobe className="h-5 w-5" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Visit website</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-3 pt-0 flex-1">
          <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>

        {/* Tech Stack Icons */}
        <CardFooter className="pt-0 pb-5">
          <div className="flex flex-wrap gap-2 w-full">
            {techStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-200 cursor-default border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-300/50 dark:hover:border-blue-600/50 shadow-sm hover:shadow-md"
                      >
                        <Icon className="w-5 h-5" color={item.color} />
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
});

import { motion } from "framer-motion";
import { FileText, Mail, ArrowRight } from "lucide-react";
import { Link } from "../Link";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4 justify-center md:justify-start mt-4 sm:mt-5 md:mt-6">
      {/* View Resume Button - Primary */}
      <motion.a
        href="#"
        className="group relative flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm md:text-base shadow-lg shadow-indigo-500/30 dark:shadow-indigo-500/20 overflow-hidden"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          initial={false}
        />
        
        <FileText className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        <span className="relative z-10">View Resume</span>
        <ArrowRight className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
      </motion.a>

      {/* Contact Me Button - Secondary */}
      <Link href="#contact">
        <motion.div
          className="group relative flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-lg sm:rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-indigo-500/50 dark:border-indigo-400/50 text-indigo-600 dark:text-indigo-400 font-semibold text-xs sm:text-sm md:text-base shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Hover gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-900/20 dark:via-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
          
          {/* Border glow effect */}
          <motion.div
            className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-indigo-400 dark:border-indigo-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
            initial={false}
          />
          
          <Mail className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative z-10">Contact Me</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </motion.div>
      </Link>
    </div>
  );
}

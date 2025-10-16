import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { Link } from "../Link";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <motion.a
        href="#"
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </motion.a>
      <Link href="#contact">
        <motion.div
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base text-blue-600 dark:text-blue-400 border-2 border-blue-600 transition-colors duration-300 cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Mail className="w-5 h-5" />
          <span>Contact Me</span>
        </motion.div>
      </Link>
    </div>
  );
}

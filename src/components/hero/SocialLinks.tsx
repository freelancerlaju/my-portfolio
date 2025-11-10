import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    href: "https://github.com/freelancerlaju",
    icon: Github,
    label: "GitHub",
    color: "text-gray-900 dark:text-white",
    hoverColor: "hover:bg-gray-900 dark:hover:bg-white",
    iconColor: "text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-gray-900",
    isGradient: false,
  },
  {
    href: "https://linkedin.com/in/freelancerlaju",
    icon: Linkedin,
    label: "LinkedIn",
    color: "text-[#0077B5]",
    hoverColor: "hover:bg-[#0077B5]",
    iconColor: "text-[#0077B5] group-hover:text-white",
    isGradient: false,
  },
  {
    href: "https://instagram.com/freelancerlaju",
    icon: Instagram,
    label: "Instagram",
    color: "text-[#E1306C]",
    hoverColor: "hover:bg-[#E1306C]",
    iconColor: "text-[#E1306C] group-hover:text-white",
    isGradient: true,
  },
  {
    href: "https://wa.me/01302144805",
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "text-[#25D366]",
    hoverColor: "hover:bg-[#25D366]",
    iconColor: "text-[#25D366] group-hover:text-white",
    isGradient: false,
  },
  {
    href: "https://x.com/freelancerlaju",
    icon: FaXTwitter,
    label: "Twitter",
    color: "text-gray-900 dark:text-white",
    hoverColor: "hover:bg-gray-900 dark:hover:bg-white",
    iconColor: "text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-gray-900",
    isGradient: false,
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4 justify-center md:justify-start mt-4 sm:mt-5 md:mt-6">
      {links.map(({ href, icon: Icon, label, hoverColor, iconColor, isGradient }, index) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`group relative p-2.5 sm:p-3 md:p-3.5 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${!isGradient ? hoverColor : ''}`}
          whileHover={{ scale: 1.1, y: -4, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: index * 0.1,
          }}
        >
          {/* Instagram gradient background on hover */}
          {isGradient && (
            <motion.div
              className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          )}
          
          {/* Regular hover background for non-gradient items */}
          {!isGradient && (
            <motion.div
              className={`absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoverColor.replace('hover:', '')}`}
              initial={false}
            />
          )}
          
          {/* Inner glow */}
          <motion.div
            className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
          
          {/* Icon */}
          <div className="relative z-10">
            <Icon className={`w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300 ${iconColor}`} />
          </div>
          
          {/* Tooltip effect */}
          <motion.div
            className="absolute -top-9 sm:-top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[10px] sm:text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-20"
            initial={false}
          >
            {label}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
}

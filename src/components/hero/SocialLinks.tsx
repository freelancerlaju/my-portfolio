import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    href: "https://github.com/freelancerlaju",
    icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/freelancerlaju",
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/freelancerlaju",
    icon: <Instagram className="w-6 h-6 text-[#E1306C]" />,
    label: "Instagram",
  },
  {
    href: "https://wa.me/01302144805",
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: "WhatsApp",
  },
  {
    href: "https://x.com/freelancerlaju",
    icon: <FaXTwitter className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: "Twitter",
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }, index) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-gray-200 dark:bg-gray-800 rounded-lg"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: index * 0.1,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div className="relative z-10">{icon}</div>
        </motion.a>
      ))}
    </div>
  );
}

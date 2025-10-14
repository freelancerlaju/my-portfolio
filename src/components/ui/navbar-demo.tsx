import {
  Home,
  User,
  Code,
  Briefcase,
  BookOpen,
  MessageSquare,
  Mail,
  Settings,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Skills", url: "#skills", icon: Code },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Blogs", url: "#blogs", icon: BookOpen },
    { name: "Services", url: "#services", icon: Settings },
    { name: "Testimonial", url: "#testimonials", icon: MessageSquare },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}

import {
  Home,
  User,
  Code,
  Layers,
  Zap,
  MessageSquare,
  Mail,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Skills", url: "#skills", icon: Code },
    { name: "Projects", url: "#projects", icon: Layers },
    { name: "Services", url: "#services", icon: Zap },
    { name: "Testimonials", url: "#testimonials", icon: MessageSquare },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}

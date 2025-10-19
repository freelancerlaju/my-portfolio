import { Home, User, FolderOpen, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "About", url: "#", icon: User },
    { name: "Projects", url: "#", icon: FolderOpen },
    { name: "Resume", url: "#", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}

function DefaultDemo() {
  return <AnimatedText text="Namaste World!" />;
}

function CustomStyleDemo() {
  return (
    <AnimatedText
      text="Namaste World!"
      textClassName="text-5xl font-bold mb-2"
      underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
      underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
      underlineDuration={1.5}
    />
  );
}

export { DefaultDemo, CustomStyleDemo };

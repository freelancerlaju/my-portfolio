import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
} from "react-icons/si";

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: "#00cfff" },
  node: { icon: SiNodedotjs, name: "Node.js", color: "#228b22" },
  firebase: { icon: SiFirebase, name: "Firebase", color: "#fbbf00" },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06b6d4" },
  typescript: { icon: SiTypescript, name: "TypeScript", color: "#1f6feb" },
  next: { icon: SiNextdotjs, name: "Next.js", color: "#" },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: "#10b981" },
  prisma: { icon: SiPrisma, name: "Prisma", color: "#186997" },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: "#6366f1" },
  framer: { icon: SiFramer, name: "Framer Motion", color: "#2563eb" },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: "#" },
  stripe: { icon: SiStripe, name: "Stripe", color: "#5b4df1" },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: "#ff3d00" },
};

// Define projects data
const projects = [
  {
    title: "LaslesVPN",
    description:
      "LaslesVPN is a private virtual network that has unique features and has high security.Provide a network for all your needs with ease and fun using",
    image: "/assets/project1.png",
    link: "https://next-lasles-vpn-landing-page.vercel.app/",
    github: "https://github.com/freelancerlaju/LaslesVPN-Landing-Page",
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },

  {
    title: "Jadoo",
    description:
      "The Jadoo landing page is a modern, responsive website. Built with React, TypeScript, and Vite, it offers a sleek user interface optimized for performance",
    image: "/assets/project7.png",
    link: "https://jadoo-react-landing-page.vercel.app/",
    github: "https://github.com/freelancerlaju/jadoo-react-landing-page",
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.socket,
      techStacks.mongodb,
    ],
  },

  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, blogs, and contact section with responsive design and modern UI/UX styling.",
    image: "/assets/portfolioProject.png",
    link: "#",
    github: "#",
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },

  {
    title: "Haircut",
    description:
      "Lists various offerings, including Haircut, Beard Trim, Mans Shave, Hair Dyeing, Mustache grooming, and Stacking, with prices starting from $15.",
    image: "/assets/project2.png",
    link: "https://salon-landingpage.vercel.app/",
    github: "https://github.com/freelancerlaju/HairCut-Salon-Landing-Page",
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.mongodb,
      techStacks.prisma,
    ],
  },

  {
    title: "Good food",
    description:
      "Provides information about the food offerings, emphasizing quality and variety. Highlights popular items with a promotional offer of 50% off",
    image: "/assets/project3.png",
    link: "https://goid-food-website.vercel.app/",
    github: "https://github.com/freelancerlaju/goid-food-website",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.appwrite,
      techStacks.framer,
    ],
  },

  {
    title: "Hospital",
    description:
      "The website Mico Hospital is a free, responsive hospital website template designed to help healthcare providers establish a professional online presence.",
    image: "/assets/project4.png",
    link: "https://mico-hospital-webpage.vercel.app/",
    github: "https://github.com/freelancerlaju/mico-hospital-webpage",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
      techStacks.appwrite,
    ],
  },

  {
    title: "Kider",
    description:
      "The Kider Website is a free, responsive landing page designed for educational institutions, particularly kindergartens and preschools. it offers early childhood education services.",
    image: "/assets/project5.png",
    link: "https://kider-landing-page.vercel.app/",
    github: "https://github.com/freelancerlaju/kider-landing-page",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.firebase,
      techStacks.framer,
    ],
  },

  {
    title: "JobEntry",
    description:
      "JobEntry is a sleek, responsive job portal template designed to connect employers and job seekers. Hosted on Vercel, it offers a clean, modern layout suitable for startups, recruitment agencies",
    image: "/assets/project6.png",
    link: "https://jobentry-job-portal-website.vercel.app/",
    github: "https://github.com/freelancerlaju/jobentry-job-portal-website",
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.mongodb,
      techStacks.prisma,
      techStacks.shadcn,
    ],
  },

  {
    title: "Sine MKT",
    description:
      "Sine MKT is a modern, responsive e-commerce website template designed for furniture retailers. it offers user-friendly layout suitable for showcasing a variety of home furnishings.",
    image: "/assets/project8.png",
    link: "https://sine-mkt.vercel.app/",
    github: "https://github.com/freelancerlaju/sine-mkt",
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.stripe,
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

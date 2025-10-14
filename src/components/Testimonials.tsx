import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahdev",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Working with Laju has been an incredible experience. His attention to detail and problem-solving skills are outstanding. The projects he delivered exceeded our expectations.",
    href: "https://twitter.com/sarahdev",
  },

  {
    author: {
      name: "Michael Chen",
      handle: "@mikechen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Laju's expertise in React and modern web technologies is impressive. He delivered a complex application on time and with excellent code quality.",
    href: "https://twitter.com/mikechen",
  },

  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyrod",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Professional, reliable, and highly skilled. Laju transformed our ideas into a beautiful, functional web application. Highly recommended!",
  },

  {
    author: {
      name: "David Kim",
      handle: "@davidkim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Outstanding communication and technical skills. Laju delivered exactly what we needed and provided excellent support throughout the project.",
    href: "https://twitter.com/davidkim",
  },

  {
    author: {
      name: "Lisa Wang",
      handle: "@lisawang",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "The quality of work and dedication Laju shows is remarkable. He goes above and beyond to ensure client satisfaction.",
  },
];

export function Testimonials() {
  return (
    <TestimonialsSection
      title="What Clients Say"
      description="Don't just take my word for it. Here's what clients have to say about working with me."
      testimonials={testimonials}
    />
  );
}

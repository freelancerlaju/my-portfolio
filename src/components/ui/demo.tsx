import { Timeline } from "@/components/ui/timeline";
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Users,
  Lightbulb,
} from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  status: "completed" | "active" | "pending";
  icon?: React.ReactNode;
}

export default function DemoOne() {
  const educationItems: TimelineItem[] = [
    {
      id: "1",
      title: "B.Tech in Computer Science Engineering",
      description:
        "St. Andrews Institute of Technology and Management, Gurgaon",
      timestamp: new Date("2022-09-01"),
      status: "active",
      icon: <GraduationCap className="h-3 w-3" />,
    },
    {
      id: "2",
      title: "Senior Secondary (XII)",
      description: "Inter Science College, Hazaribagh - 88%",
      timestamp: new Date("2021-05-01"),
      status: "completed",
      icon: <Award className="h-3 w-3" />,
    },
    {
      id: "3",
      title: "Secondary (X)",
      description: "St. Paul's School, Hazaribagh - 85.6%",
      timestamp: new Date("2019-05-01"),
      status: "completed",
      icon: <Award className="h-3 w-3" />,
    },
  ];

  const experienceItems: TimelineItem[] = [
    {
      id: "1",
      title: "Full-Stack Developer",
      description: "Freelance Projects - React, Node.js, MongoDB",
      timestamp: new Date("2023-06-01"),
      status: "active",
      icon: <Code className="h-3 w-3" />,
    },
    {
      id: "2",
      title: "Web Development Bootcamp",
      description: "Intensive 6-month program covering modern web technologies",
      timestamp: new Date("2023-01-01"),
      status: "completed",
      icon: <Briefcase className="h-3 w-3" />,
    },
    {
      id: "3",
      title: "Team Collaboration Projects",
      description:
        "Worked on agile development teams and collaborative projects",
      timestamp: new Date("2022-08-01"),
      status: "completed",
      icon: <Users className="h-3 w-3" />,
    },
    {
      id: "4",
      title: "Continuous Learning",
      description:
        "Committed to staying updated with latest technologies and industry trends",
      timestamp: new Date("2022-01-01"),
      status: "completed",
      icon: <Lightbulb className="h-3 w-3" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Education
        </h3>
        <Timeline items={educationItems} variant="spacious" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">
          Experience
        </h3>
        <Timeline items={experienceItems} variant="spacious" />
      </div>
    </div>
  );
}

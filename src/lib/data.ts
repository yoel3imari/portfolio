import { FaLaravel, FaNodeJs, FaVuejs } from "react-icons/fa";
import {
  SiAntdesign,
  SiExpo,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiNumpy,
  SiNuxtdotjs,
  SiPandas,
  SiPhp,
  SiPython,
  SiRust,
  SiScikitlearn,
  SiShadcnui,
  SiSqlite,
  SiTensorflow,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import ElementPlusIcon from "@/components/icons/ElementPlusIcon";
import { BsAndroid, BsBootstrapFill } from "react-icons/bs";
import MatplotlinIcon from "@/components/icons/MatplotlinIcon";
import SeabornIcon from "@/components/icons/SeabornIcon";
import { TbBrandReactNative } from "react-icons/tb";
import {
  DiDocker,
  DiJava,
  DiMysql,
  DiPostgresql,
  DiUbuntu,
} from "react-icons/di";
import { GitBranch } from "lucide-react";
import { ChartScatter, Globe, Smartphone } from "lucide-react";

export const services = [
  {
    title: "Web Developer",
    icon: Globe,
    details: [
      "Frontend & Backend",
      "Database Modeling",
      "Ecommerce Stores",
      "CRM Dashboards",
      "CMS Applications",
      "SEO & Performance in Mind",
    ],
  },
  {
    title: "Mobile Developer",
    icon: Smartphone,
    details: ["Cross-Platforme Developement", "Performance in Mind"],
  },
  {
    title: "Data Science",
    icon: ChartScatter,
    details: [
      "Machine Learning",
      "Deep Learning",
      "Image Processing",
      "Recommendation Systems",
      "Chatbots & Virtual Assistants",
      "Phenomena Prediction",
    ],
  },
];

export const tabs = [
  {
    name: "web",
    label: "Web",
    title: "Web Frameworks & Libraries",
    items: [
      {
        name: "Vue",
        icon: FaVuejs,
      },
      {
        name: "Nuxt",
        icon: SiNuxtdotjs,
      },
      {
        name: "React",
        icon: GrReactjs,
      },
      {
        name: "Next",
        icon: RiNextjsFill,
      },
      {
        name: "Laravel",
        icon: FaLaravel,
      },
      {
        name: "NodeJS",
        icon: FaNodeJs,
      },
      {
        name: "Tailwindcss",
        icon: RiTailwindCssFill,
      },
      {
        name: "Bootstrap",
        icon: BsBootstrapFill,
      },
      {
        name: "shadcn/ui",
        icon: SiShadcnui,
      },
      {
        name: "Element Plus",
        icon: ElementPlusIcon,
      },
      {
        name: "Ant Design",
        icon: SiAntdesign,
      },
    ],
  },
  {
    name: "datascience",
    label: "Data Science",
    items: [
      {
        name: "Pandas",
        icon: SiPandas,
      },
      {
        name: "Numpy",
        icon: SiNumpy,
      },
      {
        name: "Matplotlib",
        icon: MatplotlinIcon,
      },
      {
        name: "Seaborn",
        icon: SeabornIcon,
      },
      {
        name: "Sci-kit Learn",
        icon: SiScikitlearn,
      },
      {
        name: "Tensorflow",
        icon: SiTensorflow,
      },
    ],
  },
  {
    name: "mobile",
    label: "Mobile",
    items: [
      {
        name: "Expo",
        icon: SiExpo,
      },
      {
        name: "React Native",
        icon: TbBrandReactNative,
      },
      {
        name: "Android Studio",
        icon: BsAndroid,
      },
    ],
  },
  {
    name: "databses",
    label: "Databases",
    items: [
      {
        name: "MySQL",
        icon: DiMysql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "PostgreSQL",
        icon: DiPostgresql,
      },
      {
        name: "SQLite",
        icon: SiSqlite,
      },
    ],
  },
  {
    name: "tools",
    label: "Tools",
    items: [
      {
        name: "Docker",
        icon: DiDocker,
      },
      {
        name: "Git",
        icon: GitBranch,
      },
      {
        name: "Linux",
        icon: DiUbuntu,
      },
    ],
  },
  {
    name: "languages",
    label: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "PHP",
        icon: SiPhp,
      },
      {
        name: "Java",
        icon: DiJava,
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
      },
      {
        name: "Rust",
        icon: SiRust,
      },
    ],
  },
];

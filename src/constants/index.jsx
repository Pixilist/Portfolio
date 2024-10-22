
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import personImage from "../assets/BryanChavez.jfif";
import { SiLinux } from 'react-icons/si';
import { SiUnrealengine } from 'react-icons/si';
import { SiBlender } from 'react-icons/si';
import { SiAdobeaftereffects } from 'react-icons/si';
import { SiDavinciresolve } from 'react-icons/si';
import { SiCesium } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiJavaFill,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Nicolas Desprez",
  igname: "PixilArts",
  role: "Software Engineer",
  subheading:
    "Software Engineer with 5+ years of coding experience and proven success in delivering services to clients. Skilled in leading and developing web applications and other software-driven projects, as well as spearheading the creation of 3D animation content with millions of impressions online. My unique blend of creative and artistic expertise, coupled with my background as a software developer, positions me as an exceptional candidate for any company.",

};

export const ABOUT = {
  subheading:
    "Hi! I’m Nicolas, a computer science student at UMass Dartmouth with a passion for art and technology. With 8 years of 3D artistry experience and 4+ years of Coding experience, I've had the chance to contribute Art to games like Valorant and Apex Legends, and to take part in many coding projects, all deepening my love for creative problem-solving. I’m always exploring ways to push my limits, whether it’s through personal projects or outside the screen in things like Disc-golf. I love dogs and all animals they are all my friends and I cannot resist petting one should it come up to me (I ask of course). You can see, on the right, my dog Sully! Outside of that i just love exploring and getting out and finding local fun things!"
};

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS",],
    imgSrc: project1,
    link: "https://myportfolio.com",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "C",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "C++",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Java",
    icon: <RiJavaFill className="text-teal-400" />,
  },
  {
    name: "Linux",
    icon: <SiLinux className="text-teal-400" />,
  },
  {
    name: "Unreal Engine",
    icon: <SiUnrealengine className="text-teal-400" />,
  },
  {
    name: "Blender",
    icon: <SiBlender className="text-teal-400" />,
  },
  {
    name: "After Effects CC 2019",
    icon: <SiAdobeaftereffects className="text-teal-400" />,
  },
  {
    name: "Davinci Resolve",
    icon: <SiDavinciresolve className="text-teal-400" />,
  },
  {
    name: "Cesium",
    icon: <SiCesium className="text-teal-400" />,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-teal-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Sep 2024 - Present",
    role: "Assistant Team Lead",
    company: "HII Unmanned Systems",
    description:
      "Assisting Leading a team in developing an improved simulation enviornment for HII unmanned systems REUMS platform based in Unreal Engine. Developing Noise Algorithms for Terrain Generation, and development of 3d tiles for rendering enviornment. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["C++", "Unreal Engine", "Cesium Ion", "Agile", "GitHub"],
  },
  {
    yearRange: "Jun 2023 - Aug 2023",
    role: "Riot Games Freelance 3D Animator",
    company: "Rosewood Creative",
    description:
      "Concepted and led Creative Design on captivating 3D sequences highlighting game assets for advertisement. Collaborated with a cross-functional creative team to develop a captivating motivation video for E-sports teams and video game players alike. Garnered over a million views across social platforms on a tight schedule.",
    techStack: ["Blender", "After Effects", "Embergen", "Davinci Resolve", "Photoshop"],
  },
  {
    yearRange: "Mar 2023 - Apr 2023",
    role: "Riot Games Freelance 3D Animator",
    company: "Rosewood Creative",
    description:
      "Created stunning 3d sequences for promotions for Riot Games world renowned E-sports title VALORANT! A wonderful collaboration between the lovely people at Rosewood Creative and I, the video garnered hundreds of thousands of views and is one of the more popular videos posted by the organization across all media.",
    techStack: ["Blender", "After Effects", "Davinci Resolve", "Photoshop"],
  },
  {
    yearRange: "Oct 2022 - Apr 2023",
    role: "QA Chatbot Developer",
    company: "University of Massachusetts Dartmouth",
    description:
      "Developed a simple QA chatbot utilizing pre-trained BERT, Python, PyTorch, Pandas, NumPy, and TensorFlow. The Chatbot utilized scraped information from UMASS Dartmouth's website to assist students with dissabilties get access to helpful info. Focused on learning transformers and more in-depth AI knowledge",
    techStack: ["Python", "PyTorch", "NumPy", "TensorFlow", "Pandas"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Massachusetts Dartmouth",
    duration: "September 2021 - May 2025",
    description:
      "Graduating in Computer Science with an option in Software Engineering, focusing on algorithms, data structures, and web development. In-progress capstone project on Maritime Simulation Enviornments",
  },

];

export const TESTIMONIAL = {
  name: "Byran Chavez",
  title: "Team Lead, HII Unmanned Systems (Senior Capstone)",
  quote:
    "A dedicated software engineer, a passionate learner, a creative mind, and a wonderful friend.",
  image: personImage,
};

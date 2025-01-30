import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ClickCart,
  TheBlogzz,
  MyProps,
  threejs,
  KhanaDotCom,
  ATG,
  NextJs,
  Appwrite
} from "../assets";


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Next JS",
    icon: NextJs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Appwrite",
    icon: Appwrite,
  },
];

const experiences = [
  {
    title: "FrontEnd Developer Intern",
    company_name: "KhanaDotCom",
    icon: KhanaDotCom,
    iconBg: "#064b39",
    date: "June 2024 - Dec 2024",
    points: [
      "KhanaDotCom is a startup company working on food delivery app.",
      "We builded the frontend official website of the company.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js Developer Intern",
    company_name: "Across the Globe (ATG)",
    icon: ATG,
    iconBg: "#064b39",
    date: "Dec 2024 - Present",
    points: [
      "Across the Globe (ATG) is a dynamic startup providing B2B and B2C solutions across various industries.",
      "We specialize in building scalable and efficient websites tailored to clients' business needs.",
      "Collaborate with cross-functional teams to deliver high-quality web applications using Next.js and other modern technologies.",
      "Responsible for optimizing websites for performance, scalability, and user experience.",
    ],  
  }
];


const projects = [
  {
    name: "Click Cart",
    description:
      "Click Cart was a front end of an e-commerce website. Site has responsiveness, intuitive navigation, and interactive product displays, providing users with a smooth experience. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: ClickCart,
    source_code_link: "https://maaz80.github.io/Click-Cart",
  },
  {
    name: "The Blogzz",
    description:
      "Developed a fully functional blog website with user registration, posting, liking, and commenting features. It also had a feedback system for users and dashboard for admin.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwi",
        color: "red-text-gradient",
      },
    ],
    image: TheBlogzz,
    source_code_link: "https://theblogzz.netlify.app",
  },
  {
    name: "My Props",
    description:
      "This project helps users find and book their properties. Users can filter props by location, rooms, and price, view detailed props info, and can pay online or (COD).",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "yellow-text-gradient",
      },
      {
        name: "react",
        color: "red-text-gradient",
      },
    ],
    image: MyProps,
    source_code_link: "https://myprop.netlify.app",
  },
];

export { technologies, experiences, projects };

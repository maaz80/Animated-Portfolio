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
    title: "FrontEnd Developer",
    company_name: "KhanaDotCom",
    icon: KhanaDotCom,
    iconBg: "#064b39",
    date: "June 2024 - Present",
    points: [
      "KhanaDotCom is a startup company working on food delivery app.",
      "We are building the frontend official website of our company.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      "Under Construction, functional Blog website where anyone can register share there thoughts using images, tags, customized text etc. Used appwrite as backend.",
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

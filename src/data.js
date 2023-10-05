import KatataImage from "./assets/project2.png";
import DianeliImage from "./assets/project1.png";
import AspectaImage from "./assets/project3.png";
import { BiLogoReact, BiLogoNodejs } from "react-icons/bi";
import { TbBrandFirebase, TbCircleLetterD } from "react-icons/tb";
import { DiCss3, DiSass } from "react-icons/di";
import { FaBootstrap, FaWordpressSimple } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "KATATA Fashion",
    imgUrl: KatataImage,
    text: "KATATA Fashion a fully functioning e-commerce website for men's and women's clothing and footwear. It focuses on simplicity and clean design, making it easy for users to find and purchase the products they need.",
    icons: [
      { icon: BiLogoReact, tooltip: "React.js" },
      { icon: BiLogoNodejs, tooltip: "Node.js" },
      { icon: TbBrandFirebase, tooltip: "Firebase" },
    ],
  },
  {
    id: 2,
    title: "Dianeli Lepotni Studio",
    imgUrl: DianeliImage,
    text: "Fully responsive website for a nail beauty salon. The website provides an interface for displaying business courses and services. It offers an online form for applying to courses online.",

    icons: [
      { icon: IoLogoJavascript, tooltip: "Javascript" },
      { icon: FaBootstrap, tooltip: "Bootstrap" },
      { icon: DiCss3, tooltip: "Css" },
    ],
  },
  {
    id: 3,
    title: "ASPECTA",
    imgUrl: AspectaImage,
    text: "This website, created with WordPress and Divi, showcases an amalgamation of captivating visuals and intuitive user interactions. The integration of custom CSS and Javascript elevates the aesthetic appeal and user experience.",
    icons: [
      { icon: FaWordpressSimple, tooltip: "Wordpress" },
      { icon: TbCircleLetterD, tooltip: "Divi" },
      { icon: IoLogoJavascript, tooltip: "Javascript" },
    ],
  },
];


export const techStackIcons = [
  BiLogoReact,
  BiLogoNodejs,
  TbBrandFirebase,
  IoLogoJavascript,
  SiTypescript,
  SiTailwindcss,
  DiSass,
  DiCss3,
  FaBootstrap,
  FaWordpressSimple,
]
import KatataImage from "./assets/project2.png";
import DianeliImage from "./assets/project1.png";
import AspectaImage from "./assets/project3.png";
import { BiLogoReact, BiLogoNodejs } from "react-icons/bi";
import { TbBrandFirebase, TbCircleLetterD } from "react-icons/tb";
import { DiCss3, DiSass } from "react-icons/di";
import { FaBootstrap, FaWordpressSimple } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiTypescript, SiReactrouter, SiStyledcomponents, SiHtml5 } from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "KATATA Fashion",
    imgUrl: KatataImage,
    text: "KATATA Fashion is a fully functioning e-commerce website for men's and women's clothing and footwear. It focuses on simplicity and clean design, making it easy for users to find and purchase the desired products.",
    workflow1: "The front-end of the website is built using React.js with React Router DOM for seamless navigation. Styling is handled with a combination of SCSS and Styled Components, ensuring a visually appealing and responsive layout. The Context API manages state, providing an efficient way to handle global data across components. On the back end, Node.js powers the server-side operations, while Firebase serves as the database, enabling secure and scalable data storage.",
    workflow2: "Together, this tech stack orchestrates a robust and user-friendly workflow, supporting the website's goal of offering a simple and enjoyable shopping experience.",
    icons: [
      { icon: BiLogoReact, tooltip: "React.js" },
      { icon: BiLogoNodejs, tooltip: "Node.js" },
      { icon: SiReactrouter, tooltip: "React Router Dom" },
      { icon: SiStyledcomponents, tooltip: "Styled Components" },
      { icon: TbBrandFirebase, tooltip: "Firebase" },
    ],
    website: 'https://katata-fashion.netlify.app/',
    github: "https://github.com/laukic1/KATATA_Clothing_eCommerce_Store/tree/master"
  },
  {
    id: 2,
    title: "Dianeli Lepotni Studio",
    imgUrl: DianeliImage,
    text: "Fully responsive website for a nail beauty salon. The website provides an interface for displaying offered courses and services. It implements an online form for applying to courses.",
    workflow1: "Dianeli Studio's sleek and responsive website, tailored for a nail beauty salon, elegantly showcases offered courses and services. Crafted with HTML, CSS, and JavaScript, and utilizing Bootstrap for seamless responsiveness, the site offers simplicity and sophistication.",
    workflow2: "Absent back-end functionalities and a database, the focus remains on providing an intuitive user experience.",
    icons: [
      { icon: IoLogoJavascript, tooltip: "Javascript" },
      { icon: FaBootstrap, tooltip: "Bootstrap" },
      { icon: DiCss3, tooltip: "CSS" },
      { icon: SiHtml5, tooltip: "HTML" },
    ],
    website: 'https://www.dianelistudio.si/',
    github: "https://github.com/laukic1/Dianeli_Nail_Studio_Website"

  },
  {
    id: 3,
    title: "ASPECTA",
    imgUrl: AspectaImage,
    text: "This WordPress and Divi-powered website combines engaging visuals with user-friendly interactions. The integration of custom CSS and Javascript elevates the aesthetic appeal and user experience.",
    workflow1: "Powered by WordPress and Divi, Aspecta.si is a visually stunning website seamlessly blending captivating visuals with user-friendly interactions. The integration of custom CSS and Javascript enhances both the aesthetic appeal and user experience. On the front end, WordPress and Divi play a key role, supported by additional technologies like JavaScript and CSS for added customization.",
    workflow2: "While the project doesn't involve specific back-end functionalities or database management, the deliberate selection of technologies ensures a seamless marriage of design and functionality.",
    icons: [
      { icon: FaWordpressSimple, tooltip: "Wordpress" },
      { icon: TbCircleLetterD, tooltip: "Divi" },
      { icon: IoLogoJavascript, tooltip: "Javascript" },
      { icon: DiCss3, tooltip: "CSS" },
    ],
    website: 'https://aspecta.si/',

  },
];


export const techStackIcons = [
  BiLogoReact,
  BiLogoNodejs,
  TbBrandFirebase,
  IoLogoJavascript,
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
  DiSass,
  DiCss3,
  SiHtml5,
  FaBootstrap,
  FaWordpressSimple,
]
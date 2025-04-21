// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import angularMat from './assets/tech_logo/angular-material.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nxdev from './assets/tech_logo/nxdev.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import springBootLogo from './assets/tech_logo/spring-boot.png'
import kotlin from './assets/tech_logo/kotlin.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import android from './assets/tech_logo/androidLogo.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import cutmLogo from './assets/education_logo/cutm_logo.png';
import jsrcLogo from './assets/education_logo/jsrc_logo.png';
import jnpsLogo from "./assets/education_logo/jnps_logo.png";

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Angular Material', logo: angularMat },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring', logo: springbootLogo },
      { name: 'Spring Boot', logo: springBootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Android Development', logo: android },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Kotlin', logo: kotlin },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Nx.dev', logo: nxdev },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


  
  export const education = [
    {
      id: 0,
      img: cutmLogo,
      school: "Centurion University, Bhubaneswar",
      date: "Sept 2022 - May 2026",
      grade: "9 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from Centurion University, Bhubaneswar. During my time at Centurion University, I built a solid foundation in programming, software development, and core computer science concepts. My coursework included subjects like Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively engaged in technical workshops and events, which helped sharpen my skills and broaden my understanding of real-world applications. My academic journey at Centurion University has played a vital role in shaping my technical proficiency and professional development.",
      degree: "Bachelor of Technology - B.Tech (CSE)",
    },
    {
      id: 1,
      img: jsrcLogo,
      school: "Jhadeswar +2 Science Residential College, Balasore",
      date: "May 2020 - May 2022",
      grade: "86.33%",
      desc: "I completed my Class 12 education from Jhadeswar Higher Secondary School, located in Balasore, under the CHSE (Council of Higher Secondary Education), Odisha. My academic stream included Physics, Chemistry, Mathematics, and Biology (PCMB). Although Computer Science was not part of the curriculum, my growing interest in technology encouraged me to pursue self-learning in computing fundamentals, which laid the foundation for my future academic and career choices in the tech domain.",
      degree: "CHSE(XII) - PCMB",
    },
    {
      id: 2,
      img: jnpsLogo,
      school: "Jadunathpur Simanta Highschool, Tiring",
      date: "November 2018 - March 2020",
      grade: "72.33%",
      desc: "I completed my Class 10 education from Jadunathpur Simanta High School, located in Tiring, under the BSE (Board of Secondary Education), Odisha. During this phase, I studied core subjects such as Science, Mathematics, and Social Studies, but Computer Science was not part of the curriculum. Despite this, my curiosity in technology began to grow, which later motivated me to explore programming and computer-related subjects in higher studies.",
      degree: "BSE(X), Science with Mathematics",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Nextronix",
      description:
        "A sleek and intuitive Angular-powered eCommerce application built to deliver the best in electronics. From cutting-edge gadgets to everyday tech essentials, NextRonix offers a seamless shopping experience with real-time product showcases, smooth navigation, and secure checkout. Designed for tech-savvy shoppers, it's your go-to platform for discovering the latest and greatest in electronic innovation.",
      image: githubdetLogo,
      tags: ["Daisy Ui", "Tailwind CSS", "Typescript", "Angular", "API","nx.dev"],
      github: "https://github.com/Rashmi-2005-Ranjan/Nextronix",
      webapp: "https://github.com/Rashmi-2005-Ranjan/Nextronix",
    },
    {
      id: 1,
      title: "EcoBazaar",
      description:
        "EcoBazaar is a modern and eco-conscious eCommerce platform dedicated to clothing and garments. Crafted with Angular, it offers a smooth and stylish shopping experience, showcasing the latest trends in fashion while promoting sustainable choices. Whether you're looking for everyday wear or timeless pieces, EcoBazaar brings fashion to your fingertips with ease, elegance, and environmental care.",
      image: csprepLogo,
      tags: ["Angular", "Spring Boot", "My Sql", "JWT", "Tailwind", "Typescript"],
      github: "https://github.com/Rashmi-2005-Ranjan/EcoBazaar-E-Commerce-Fullstack",
      webapp: "https://github.com/Rashmi-2005-Ranjan/EcoBazaar-E-Commerce-Fullstack",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Razorpay",
      description:
        "A clean and responsive Razorpay UI Clone built using Tailwind CSS. This project replicates the visual design of Razorpay's user interface, focusing on the layout, styling, and overall look. The goal is to create a user-friendly interface with modern design patterns, ideal for showcasing skills in front-end development and UI design.",
      image: webverLogo,
      tags: ["HTML", "Tailwind CSS"],
      github: "https://github.com/Rashmi-2005-Ranjan/Razorpay",
      webapp: "https://github.com/Rashmi-2005-Ranjan/Razorpay",
    },
    {
      id: 6,
      title: "Task Management System",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["Angular"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  
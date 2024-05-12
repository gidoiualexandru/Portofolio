import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    aichat,
    trello,
    crypto,
    threejs,
    php,
    laravel,
    vuejs,
    pfg,
    magic,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: creator,
    },
  ];
  
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Vue JS",
      icon: vuejs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Publicity for Good",
      icon: pfg,
      iconBg: "#ffffff",
      date: "January 2024 - April 2024",
      points: [
        "Developing and maintaining web applications using Vue.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Magic Romania",
      icon: magic,
      iconBg: "#000000",
      date: "April 2024 - Present",
      points: [
        "Developing and maintaining web applications using PHP, Laravel and other related technologies.",
        "Playing key factor in cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Chatbot",
      description:
        "Web-based platform that allows users to write, give audio and images to a AI in order to provide efficient solutions for multiple needs.",
      tags: [
        {
          name: "VueJs",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: aichat,
      source_code_link: "https://github.com/gidoiualexandru/AI_Chatbot",
    },
    {
      name: "Crypto Tracker",
      description:
        "Web application that enables users to track and view details of the top cryptos in the market based on information from an API. Includes a dark and light mode for the website.",
      tags: [
        {
          name: "VueJs",
          color: "green-text-gradient",
        },
        {
          name: "RESTAPI",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/gidoiualexandru/Crypto_Tracker",
    },
    {
      name: "Trello Clone",
      description:
        "Clone of the popular task management tool trello created with VueJS,Tailwind and TypeScript.",
      tags: [
        {
          name: "VueJs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: trello,
      source_code_link: "https://github.com/gidoiualexandru/Trello_Clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
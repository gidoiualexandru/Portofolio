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
    udemy,
    twh,
    social,
    marketplace,
    aws,
    go,
    next,
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
      title: "Fullstack Developer",
      icon: creator,
    },
    {
      title: "DevOps Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
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
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Golang",
      icon: go,
    },
    {
      name: "Next.js",
      icon: next,
    },
];
  
  const experiences = [
    {
      title: "Chief Technology Officer (Volunteer)",
      company_name: "Grupul TWH",
      icon: twh,
      iconBg: "#ffffff",
      date: "November 2024 - Present",
      points: [
        "Leading the development and implementation of strategic tech initiatives to drive innovation and operational efficiency.",
        "Collaborating with a dedicated team to align technology with the company's mission.",
        "Ensuring the delivery of secure, scalable, and impactful solutions.",
        "Representing the IT department in key meetings.",
        "Overseeing the creation of infrastructure for technical projects.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Publicity for Good",
      icon: pfg,
      iconBg: "#ffffff",
      date: "February 2024 - Present",
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
      date: "November 2023 - February 2024",
      points: [
        "Developing and maintaining web applications using PHP, Laravel and other related technologies.",
        "Playing key factor in cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#ffffff",
      date: "September 2022 - November 2023",
      points: [
        "Mastered HTML, CSS, JavaScript, React, Node.js, Bootstrap, and MongoDB.",
        "Gained practical experience in API integrations.",
        "Developed full stack applications.",
      ],
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
      name: "Django Marketplace",
      description:
        "Marketplace app created using Django and Python. It has Admin dashboard, Authentification CRUD for products.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: marketplace,
      source_code_link: "https://github.com/gidoiualexandru/DjangoMarketplace",
    },
    {
      name: "Django Social Media",
      description:
        "Social media platform created using Django, Python and TailwindCSS.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: social,
      source_code_link: "https://github.com/gidoiualexandru/DjangoMarketplace",
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
  
  export { services, technologies, experiences, projects };
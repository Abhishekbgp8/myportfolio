// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import pythonLogo from './assets/tech_logo/python.png';
import pysLogo from './assets/tech_logo/pys.svg';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import djangoLogo from './assets/tech_logo/django_new.svg';
import excelLogo from './assets/tech_logo/excel_new.svg';
import powerbiLogo from './assets/tech_logo/powerbi_new.svg';
import numpyLogo from './assets/tech_logo/numpy_new.svg';
import pandasLogo from './assets/tech_logo/pandas_new.svg';
// removed Compass logo (mcLogo) since Compass was removed from Tools
// Internship Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import pyspidersLogo from './assets/company_logo/pyspiders_logo.svg';
import agcLogo from './assets/company_logo/agc_logo.png';

// Education Section Logo's

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import npmLogo from './assets/work_logo/npm.png';


export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Django', logo: djangoLogo },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'MS Excel', logo: excelLogo },
      { name: 'Power BI', logo: powerbiLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Pandas', logo: pandasLogo },
    ],
  },
];

  export const internships = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Regrow Tech Pvt Ltd",
      date: "May 2024 - June 2024",
      desc: "During my MERN stack internship, I worked on building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js. I gained hands-on experience in developing APIs, managing databases, creating interactive user interfaces, and integrating frontend with backend. This internship strengthened my full-stack development skills and improved my understanding of real-world project workflows and team collaboration.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "MongoDb",
        "Node.js",
        "git",
        "GitHub"
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Development [Mern]",
      company: "Ardent Pvt Ltd Kolkata",
      date: "July 2023 - August 2023",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: ["ReactJS", "JavaScript", "HTML", "CSS","MongoDb","Node.js","git","GitHub","vs code"],
    },
    {
      id: 2,
      img: pyspidersLogo,
      role: "Data Analytics Intern",
      company: "PySpiders Bengaluru",
      date: "June 2025 - July 2025",
      desc: "During my Data Analytics internship at PySpiders, Bengaluru, I worked on real-world datasets, performing data cleaning, preprocessing, and exploratory analysis using Python, Pandas, and NumPy. I created visualizations and dashboards with Matplotlib, Seaborn, and Power BI to extract insights, strengthening my analytical thinking, problem-solving skills, and understanding of end-to-end data workflows.",
      skills: ["Python", "Pandas", "NumPy", "Power BI","Ms Excel","Data Visualization","Data cleaning","vs code","git","GitHub"],
    },
    {
      id: 3,
      img: pyspidersLogo,
      role: "Fullstack Development [Python]",
      company: "PySpiders Bengaluru",
      date: "July 2025 - Present",
      desc: "During my Full Stack Python internship at PySpiders, Bengaluru, I worked on building web applications using Python, Django, HTML, CSS, JavaScript, and React. I contributed to both frontend and backend development, worked with SQL and MongoDB, created REST APIs, and used Git/GitHub for version control. This internship strengthened my full stack development skills and improved my understanding of real-world project workflows.",
      skills: ["Python", "Django", "HTML", "CSS", "JavaScript","SQL"],
    },
  ];
  
  // Education section removed. See repository history for previous entries.
  
  export const projects = [
    {
      id: 0,
      title: "Number Guessing Game",
      description:
        "Number Guessing Game – An interactive game built with HTML, CSS, and JavaScript where players guess a randomly generated number. The game provides instant feedback (“Too High”, “Too Low”, “Correct!”) and features a clean, user-friendly interface, demonstrating DOM manipulation, event handling, and basic game logic.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "Python"],
      github: "https://github.com/Abhishekbgp8/Number-Gassing-Game.git",
    },
    {
      id: 1,
      title: "Product Recommendation System",
      description:
        "Built a recommendation engine using a rule-based approach to match users with relevant products. The system analyzes product categories, features, and user interactions to generate suggestions. Implemented filtering logic, similarity matching, and a clean UI/API to deliver real-time recommendations.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Abhishekbgp8/ProductRecommendationSystem.git",
    },
    {
      id: 2,
      title: "Smart Health Monitoring System",
      description:
        "Smart Health Monitoring & Healthcare Management System (Blockchain-Based) Developed a secure healthcare platform that allows users to monitor their health, book doctor appointments, order medicines, and access medical reports, all secured using blockchain for tamper-proof data management.",
      image: movierecLogo,
      tags: ["API", "HTML", "CSS", "JavaScript","python"],
      github: "https://github.com/Abhishekbgp8"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with React.js, designed to display my projects, skills, and experience in a clean and professional way. It features a user-friendly interface, smooth navigation, and reusable components that make the site easy to update and maintain. The layout is fully responsive, ensuring a consistent experience across mobile, tablet, and desktop devices.",
      image: npmLogo,
      tags: ["React JS", "Node.js","JavaScript",],
      github: "https://github.com/Abhishekbgp8/myportfolio.git"
    },
  ];  

  // Contact/Owner Email used as fallback
  export const CONTACT_EMAIL = 'abhishekbgp8@gmail.com';

  // Achievements removed - section deleted by user

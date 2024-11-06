import { createContext } from "react";
import HomeBackOne from '../assets/pexels-sora-shimazaki-5926398.jpg'
import HomeBaxkTwo from '../assets/pexels-towfiqu-barbhuiya-3440682-8541751.jpg'
import FirstProfile from '../assets/profile1.jpg'
import SecondProfile from '../assets/profile2.jpg'
import Html from '../assets/skiilspic/icons8-html-48.png'
import Css from '../assets/skiilspic/icons8-css-48.png'
import Tailwind from '../assets/skiilspic/icons8-tailwind-css-48.png'
import Bootstarp from '../assets/skiilspic/icons8-bootstrap-48.png'
import Reacts from '../assets/skiilspic/icons8-react-js-64.png'
import Node from '../assets/skiilspic/icons8-nodejs-48.png'
import Mango from '../assets/skiilspic/icons8-mongodb-48.png'
import Python from '../assets/skiilspic/icons8-python-48.png'
import Express from '../assets/skiilspic/icons8-express-js-64.png'
import Mysql from '../assets/skiilspic/icons8-javascript-64.png'
import Githup from '../assets/skiilspic/icons8-github-50 copy.png'
import Git from '../assets/skiilspic/icons8-git-48.png'
import Vercel from '../assets/skiilspic/icons8-github-50 copy.png'
import Javascript from '../assets/skiilspic/icons8-javascript-64.png'
import LinkedIN from '../assets/Connect/icons8-linkedin-48.png'
import Email from '../assets/Connect/icons8-email-48.png'
import GitApp from '../assets/Connect/icons8-github-50 (1).png'
import WhatsApp from '../assets/Connect/icons8-whatsapp-94.png'
import Conatcts from '../assets/Connect/icons8-phone-48.png'
import Share from '../assets/Connect/icons8-share-48.png'


export const DContext = createContext()


function DataContext(props) {

  const HeaderSection=
  {
    logo:"@aravindan",
    home:"Home",
    about:"About Me",
    skills:"Skills",
    education:"Education",
    project:"Project",
    expricence:"Expricence"

  }

  const HomeSection=
  {
    fname:"Aravindan D",
    role:"Mern Stack Developer & UI/UX Developer",
    me:"I'm a passionate and dedicated MERN Stack Developer with a proven track record of proficient in MERN Stack and crafting impactful solutions.",
    resume:"i will update"
  }

  const HomeBackgroundImage=[
    {
      img:HomeBackOne,
      profileimg:FirstProfile

    },
    {
      img:HomeBaxkTwo,
      profileimg:HomeBaxkTwo

    }
  ]

  const AboutSection = 
  {
    aboutme:"I'm not just an another Computer Technology graduate, I'm a Passionate and continuous Learner. My journey into the world of Web development began with a spark of curiosity when I started with a WordPress Website development, and since then, there's been no turning back. Having already become proficient in the MERN Stack through Online courses and Self-learning, I have developed an E-Commerce project with features like OTP integration, Payment gateways, User login, and an Admin console. Proficient in CRUD operations and handling DataBase interactions, I'm driven by a strong desire to delve into all aspects of Web Development, continually expanding my Skills and Knowledge to create innovative solutions. Now, I'm eager to explore the depths of this technology further. "
     
  }

  const mySkills = [
    {
      title: "HTML",
      score: "96%",
      img: Html
    },
    {
      title: "CSS",
      score: "100%",
      img: Css
    },
    {
      title: "Tailwind CSS",
      score: "93%",
      img: Tailwind
    },
    {
      title: "Bootstrap",
      score: "74%",
      img: Bootstarp
    },
    {
      title: "React JS",
      score: "94%",
      img: Reacts
    },
    {
      title: "Node JS",
      score: "90%",
      img: Node
    },
    {
      title: "MongoDB",
      score: "88%",
      img: Mango
    },
    {
      title: "Express JS",
      score: "86%",
      img: Express
    },
    {
      title: "Python",
      score: "25%",
      img: Python
    },
    {
      title: "MySQL",
      score: "13%",
      img: Mysql
    },
    {
      title: "JavaScript",
      score: "80%",
      img: Javascript
    },
    {
      title: "GitHub",
      score: "50%",
      img: Githup
    },
    {
      title: "Git",
      score: "60%",
      img: Git
    },
    {
      title: "Figma",
      score: "15%",
      img: Vercel
    }
  ];

  const myEducation=[
    {
      course:"Mern Satck Develpment",
      passout:"6-month",
      institute:"SAN Technovation"
    },
    {
      course:"MCA",
      passout:"2023-2025",
      institute:"Erode Sengunthar Engineering College"
    },
    {
      course:"B.E",
      passout:"2018-2021",
      institute:"J.K.K Munirajah College Of Tech"
    },
    {
      course:"Diploma",
      passout:"2015-2018",
      institute:"Al-Ameen Polytecnic college"
    },
    {
      course:"HSC",
      passout:"2015",
      institute:"Government Higner Secondary School"
    },
    {
      course:"SSLC",
      passout:"2013",
      institute:"Government Higner Secondary School"
    }
    ]

    const myContact=[
      {
        img:LinkedIN,
        link:"https://icons8.com/",
        title:"Linkedin"

      },
      {
        img:Email,
        link:"https://icons8.com/",
        title:"Email"

      },
      {
        img:GitApp,
        link:"https://github.com/Aravind2556",
        title:"Github"

      },
      {
        img:WhatsApp,
        link:"https://icons8.com/",
        title:"Whatsapp"

      },
      {
        img:Conatcts,
        link:"https://icons8.com/",
        title:"Contact"

      },
      {
        img:Share,
        link:"https://icons8.com/",
        title:"Share"

      }
    ]


   

    const data = {HeaderSection,HomeSection,HomeBackgroundImage,AboutSection,mySkills,myEducation,myContact}
  return (
    <DContext.Provider value={data}>
        {props.children}
    </DContext.Provider>
  )
}

export default DataContext
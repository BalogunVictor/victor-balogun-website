export const skills = [

  {
    id:1,
    logo: '/assets/skills/html.png',
    name: "Html",
  },
  {
    id:2,
    logo: '/assets/skills/css.png',
    name: "css",
  },
  {
    id:3,
    logo: '/assets/skills/javascript.png',
    name: "javascript",
  },
  {
    id:3,
    logo: '/assets/skills/typescript.png',
    name: "typescript",
  },
  {
    id:4,
    logo: '/assets/skills/react.png',
    name: "React",
  },
  {
    id:5,
    logo: '/assets/skills/nextjs.png',
    name: "nextjs",
  },
  {
    id:6,
    logo: '/assets/skills/tailwind.png',
    name: "tailwind",
  },
  {
    id:7,
    logo: '/assets/skills/sass.png',
    name: "Scss",
  },
  {
    id:8,
    logo: '/assets/skills/firebase.png',
    name: "firebase",
  },
  {
    id:9,
    logo: '/assets/skills/git.png',
    name: "git",
  },
  {
    id:10,
    logo: '/assets/skills/github1.png',
    name: "github",
  },
  {
    id:11,
    logo: '/assets/skills/redux.png',
    name: "Redux",
  },
]


export const projects = [
  {
    id: "netflix",
    imageUrl: "/assets/projects/netflix.jpg",
    name:"Netflix App",
    tools: "React JS / Tailwind / Firebase",
    about: ` I built this application in Next JS and is hosted on Vercel. This
    app features user authentication with firebase as well as the
    firestore cloud storage database. This application is pulling
    movie data from an API the TMDB movie API and displaying different
    categories. It features horizontal sliding and a featured
    selection. The Recoil hook is also being implemented for app-wide
    state management.`,
    codeUrl:"https://github.com/BalogunVictor/Netflix-clone-app",
    demoUrl:"https://netflix-clone-app-wheat.vercel.app/",
    softwares: [{
      id:1,
      name:"Nextjs"
    },
    {
      id:2,
      name:"Typescript"
    },
    {
      id:3,
      name:"Tailwind"
    },
    {
      id:4,
      name:"Firebase"
    },
    {
      id:5,
      name:"TMDB API"
    },
    {
      id:6,
      name:"React-player"
    },
    {
      id:7,
      name:"Recoil"
    },
  ]
      
  },
  {
    id: "royalclothing",
    imageUrl: "/assets/projects/royalClothing.png",
    name:"Royal clothing",
    tools: "React JS / Scss / Firebase",
    about: ` I built this application in React JS and is hosted on Netlify.
    This app features user authentication with firebase as well as the
    firestore cloud storage database. This application allows user
    navigate between different categories and products. A shopping
    cart management with implementation of a means of payment with
    Stripe API. Redux and Redux-Saga is also being implemented for
    app-wide state management.`,
    codeUrl:"https://github.com/BalogunVictor/royal-clothing",
    demoUrl:"https://live-royal-clothing.netlify.app/",
    softwares: [
      {
        id:1,
        name:"React"
      },
      {
        id:2,
        name:"Tailwind"
      },
      {
        id:3,
        name:"Javascript"
      },
      {
        id:4,
        name:"Firebase"
      },
      {
        id:5,
        name:"Redux"
      },
      {
        id:6,
        name:"Redux-Saga"
      },
      {
        id:7,
        name:"Stripe API"
      },
    ]
      
  },
  {
    id: "wikkychat",
    imageUrl: "/assets/projects/wikkyChat.png",
    name:"wikkychat",
    tools: "React JS / Sass / Firebase",
    about: ` I built this application in React JS and is hosted on Netlify.
    This app features user authentication with firebase as well as the
    firestore cloud storage database. This application allows users
    send a real-time chat messages and Search for Users. The context
    APi hook is also being implemented for app-wide state management.`,
    codeUrl:"https://github.com/BalogunVictor/wikky-chat" ,
    demoUrl:"https://wikky-chat.netlify.app/",
    softwares: [
      {
        id:1,
        name:"React"
      },
      {
        id:2,
        name:"Scss"
      },
      {
        id:3,
        name:"Javascript"
      },
      {
        id:4,
        name:"Firebase"
      },
      {
        id:5,
        name:"Context API"
      },
    ]
      
  },
  {
    id: "expensetracker",
    imageUrl: "/assets/projects/expenseTracker.png",
    name:"Expense Tracker",
    tools: "React JS / css",
    about: `I built this application in React JS and is hosted on Netlify.
    This application allows users to keep an accurate record of your money inflow and outflow.
     The context and useReducer hook is also being implemented for app-wide state management.`,
    codeUrl:"https://github.com/BalogunVictor/Expense-Tracker",
    demoUrl:"https://live-expense-tracker.netlify.app/",
    softwares: [
      {
        id:1,
        name:"React"
      },
      {
        id:2,
        name:"Css"
      },
      {
        id:3,
        name:"Javascript"
      },
      {
        id:4,
        name:"Firebase"
      },
      {
        id:5,
        name:"Context API"
      },
    ] 
  }
]

export const ProjectsItem = [
  {
    id:1,
    title:"E-commerce App",
    src:"/assets/projects/royalClothing.png",
    projectUrl:"/projects/royalclothing",
    tool:"React Js"
  },
  {
    id:2,
    title:"Netflix App",
    src:"/assets/projects/netflix.jpg",
    projectUrl:"/projects/netflix",
    tool:"Next Js"
  },
  {
    id:3,
    title:"Chat App",
    src:"/assets/projects/wikkyChat.png",
    projectUrl:"/projects/wikkychat",
    tool:"React Js"
  },
  {
    id:4,
    title:"Expense Tracker",
    src:"/assets/projects/expenseTracker.png",
    projectUrl:"/projects/expensetracker",
    tool:"React Js"
  },
]
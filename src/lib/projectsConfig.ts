type Project = {
  title: string
  description: string
  startDate: Date
  completeDate: Date | null
  thumbnail: string
  links: {
    sourceCode?: string
    deployedProject?: string
    other?: string[]
  }
  skills: string[]
  type: string
}

const projects: Project[] = [
  {
    title: "Framed.live",
    description:
      "Framed.live is a social web application that allows users to watch videos posted by older adults based on selected topics, and respond to them by recording and posting their own videos.",
    startDate: new Date("2023-09-15"),
    completeDate: new Date("2023-12-15"),
    thumbnail: "framed-live.png",
    links: {
      deployedProject: "https://framed.live/",
    },
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Javascript",
      "Tailwind",
      "HTML",
      "CSS",
      "Jotai",
      "TRPC",
      "REST API",
      "PlanetScale",
      "MySQL",
      "Prisma",
    ],
    type: "Web App",
  },
  {
    title: "How to make a mod: Support lists for modders",
    description:
      'Technical mod to 2014 visual novel "Everlasting Summer" intended to provide modders of different experiences an all-encompassing and easily accessible dictionary of default in-game assets.',
    startDate: new Date("2016-06-05"),
    completeDate: new Date("2016-12-05"),
    thumbnail: "support-lists-for-moders-thumbnail.jpg",
    links: {
      sourceCode: "https://github.com/NorthPhoenix/ES-Support-lists",
      deployedProject:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=833875151",
    },
    skills: ["Ren'py", "Game Development", "Python"],
    type: "Videogame Mod",
  },
  {
    title: "Q-Learning Video Game Agent",
    description:
      "Trained an ML agent using Q-learning algorithm to navigate a simple virtual environment with the goal of gaining a maximum score possible.",
    startDate: new Date("2023-03-05"),
    completeDate: new Date("2023-05-05"),
    thumbnail: "q-learning-agent-thumbnail.jpg",
    links: {
      sourceCode: "https://github.com/NorthPhoenix/ML-Q-learning-Project",
    },
    skills: ["Q Learning", "AI/ML", "Python", "Game Development"],
    type: "ML Algorithm",
  },
  {
    title: "YouTube Valorant VODs",
    description:
      "An application that uses YouTube and Valorant APIs to upload localy stored videogame recordings to the user's YouTube channel.",
    startDate: new Date("2023-05-05"),
    completeDate: new Date("2023-06-05"),
    thumbnail: "valorant-vods-thumbnail.jpg",
    links: {
      sourceCode: "https://github.com/NorthPhoenix/YT-Valorant-VODs",
    },
    skills: ["REST API", "Google Cloud", "Python"],
    type: "Python Script",
  },
  {
    title: "Toybox Dash",
    description:
      "3D platformer created in Unity engine with complex first-person movement and animation system using custom built state machine.",
    startDate: new Date("2023-01-05"),
    completeDate: new Date("2023-05-05"),
    thumbnail: "toybox-dash-thumbnail.jpg",
    links: {},
    skills: ["Game Development", "C#", "Unity", "Plastic SCM"],
    type: "Videogame",
  },
  {
    title: "UTD Android Attendance App",
    description:
      "Android application for The University of Texas at Dallas, designed to speed up and simplify the process of taking class attendance for university professors.",
    startDate: new Date("2023-01-05"),
    completeDate: new Date("2023-05-05"),
    thumbnail: "utd-attendance-thumbnail.jpg",
    links: {},
    skills: ["Android", "Android Studio", "Java", "Git"],
    type: "Senior Capstone",
  },
  {
    title: "Custom SQL Database",
    description:
      "Designed, implemented, and populated a custom relational database in SQL. Database consists of 50+ entities and 70+ relations.",
    startDate: new Date("2022-08-05"),
    completeDate: new Date("2022-12-05"),
    thumbnail: "sql-database-thumbnail.jpg",
    links: {},
    skills: ["SQL", "MySQL", "Relational Database"],
    type: "Relational Database",
  },
  {
    title: "State Machine Controller",
    description:
      "Game developer tool for Unity that solves the problem of quickly generating bolerplate code for state machine controllers.",
    startDate: new Date("2022-10-05"),
    completeDate: new Date("2022-12-05"),
    thumbnail: "state-machine-controller-thumbnail.jpg",
    links: {
      sourceCode:
        "https://github.com/NorthPhoenix/State-Machine-Unity-Dev-Tool",
    },
    skills: ["Game Development", "Unity", "C#"],
    type: "Gamedev Tool",
  },
  {
    title: "Space Explorer",
    description:
      "Top-down space game prototype in Unity that features fluid motion, object interactions, and custom particle systems.",
    startDate: new Date("2022-08-05"),
    completeDate: new Date("2022-09-05"),
    thumbnail: "space-explorer-thumbnail.jpg",
    links: {
      sourceCode: "https://github.com/NorthPhoenix/ATCM3368-SpaceExplorer",
    },
    skills: ["Unity", "C#", "Game Development", "Git"],
    type: "Videogame",
  },
  {
    title: "Unity Car Game",
    description:
      "Racing 3D platformer in Unity that features custom designed racing car and level, score collectibles, and atmospheric lighting.",
    startDate: new Date("2022-01-05"),
    completeDate: new Date("2022-05-05"),
    thumbnail: "car-game-thumbnail.jpg",
    links: {},
    skills: ["Game Development", "Unity", "C#", "3D Modeling", "Maya"],
    type: "Videogame",
  },
  {
    title: "Fortunate",
    description:
      "Fortunate is an ACM-directed, education-focused interactive web game that utilizes fake currency and real data to give users experience trading on the stock market.",
    startDate: new Date("2021-01-05"),
    completeDate: new Date("2021-05-05"),
    thumbnail: "fortunate-thumbnail.jpg",
    links: { sourceCode: "https://github.com/acm-projects/Fortunate" },
    skills: ["Web Development", "Node.js", "Javascript", "REST API", "Backend"],
    type: "Web App",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website created with Next.js, Typescript, and other powerful technologies to learn and showcase skills as a fullstack developer.",
    startDate: new Date("2022-11-05"),
    completeDate: new Date("2023-09-05"),
    thumbnail: "portfolio-website-thumbnail.jpg",
    links: {
      sourceCode: "https://github.com/NorthPhoenix/Personal-Website",
      deployedProject: "https://nikitaistomin.com",
    },
    skills: [
      "REST API",
      "Web Development",
      "Frontend",
      "Backend",
      "Typescript",
      "Javascript",
      "S3",
      "MongoDB",
      "Prisma",
      "React",
      "Next.js",
      "Tailwind",
      "HTML",
      "CSS",
      "Jotai",
      "Three.js",
      "Framer Motion",
    ],
    type: "Website",
  },
]

export default projects
export type { Project }

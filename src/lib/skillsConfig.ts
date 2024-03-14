declare type Skill = {
  uuid: string
  name: string
  icon: {
    svg?: string
  }
  tags: SkillTag[]
  description?: string
  link?: string
}

type SkillTag = (typeof Tags)[number]

const Tags = [
  "Frontend",
  "Backend",
  "Database",
  "Programming Language",
  "3D",
  "Game Engine",
  "Version Control",
  "Cloud",
  "Mobile",
  "Web",
  "System Programming",
  "OS",
  "IDE/Editor",
  "AI/ML",
  "UI/UX",
  "Game Development",
  "Other",
] as const

const skills: Skill[] = [
  {
    uuid: "9d19b982-815a-417f-88f9-7166073ee96b",
    name: "HTML",
    icon: {
      svg: "/images/skills/html5.svg",
    },
    description:
      "HTML5 is the latest version of the Hypertext Markup Language, used for structuring and presenting content on the web. It introduces new semantic elements and features that enable enhanced multimedia and interactive capabilities.",
    tags: ["Frontend", "Web", "Programming Language"],
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  },
  {
    uuid: "f269e5a8-e81a-44a1-b9d6-d7aeeed09835",
    name: "CSS",
    icon: {
      svg: "/images/skills/css3.svg",
    },
    description:
      "CSS3 is the latest iteration of Cascading Style Sheets, used to style and format the appearance of HTML elements. It brings advanced layout, animation, and design options to create visually appealing web pages.",
    tags: ["Frontend", "Web", "Programming Language", "UI/UX"],
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    uuid: "b49b8f7e-f97a-469a-afa1-1d54e4c633c3",
    name: "JavaScript",
    icon: {
      svg: "/images/skills/javascript.svg",
    },
    description:
      "JavaScript is a versatile scripting language used for adding interactivity and dynamic behavior to web pages. It enables client-side scripting and is an essential component of modern web development.",
    tags: ["Frontend", "Backend", "Web", "Programming Language"],
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    uuid: "3faf7bf6-4ffc-43b1-b79d-407a571a9dd3",
    name: "TypeScript",
    icon: {
      svg: "/images/skills/typescript.svg",
    },
    description:
      "TypeScript is a superset of JavaScript that introduces static typing and advanced tooling capabilities. It enhances code maintainability and helps catch errors at compile-time.",
    tags: ["Frontend", "Backend", "Web", "Programming Language"],
    link: "https://www.typescriptlang.org/",
  },
  {
    uuid: "3b097b8d-eb3d-4a69-b440-b815b9817c27",
    name: "React",
    icon: {
      svg: "/images/skills/react.svg",
    },
    description:
      "React is a popular JavaScript library for building user interfaces. It follows a component-based architecture, making it easy to create reusable UI elements and manage application state.",
    tags: ["Frontend", "Web", "UI/UX"],
    link: "https://react.dev/",
  },
  {
    uuid: "904fc57a-9d51-401d-bbdc-285e63577f90",
    name: "Next.js",
    icon: {
      svg: "/images/skills/nextjs.svg",
    },
    description:
      "Next.js is a meta framework for server-rendered React applications. It simplifies routing, code splitting, and provides server-side rendering for improved performance and SEO.",
    tags: ["Frontend", "Backend", "Web"],
    link: "https://nextjs.org/",
  },
  {
    uuid: "d67c1f65-5052-4929-9a91-d4db6600358d",
    name: "Node.js",
    icon: {
      svg: "/images/skills/nodejs.svg",
    },
    description:
      "Node.js is a runtime environment that allows executing JavaScript code on the server-side. It enables building scalable and efficient network applications using a non-blocking, event-driven architecture.",
    tags: ["Backend", "Web"],
    link: "https://nodejs.org/en",
  },
  {
    uuid: "631ffb1e-0cb0-4f55-81c2-b447fe2c1b50",
    name: "Express",
    icon: {
      svg: "/images/skills/express.svg",
    },
    description:
      "Express is a minimalist web application framework for Node.js. It simplifies building APIs and web applications by providing routing, middleware, and other essential features.",
    tags: ["Backend", "Web"],
    link: "https://expressjs.com/",
  },
  {
    uuid: "bfe9ac9d-97ae-4ba0-9b86-7721199e094e",
    name: "MongoDB",
    icon: {
      svg: "/images/skills/mongodb.svg",
    },
    description:
      "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It offers scalability and high performance, making it suitable for handling large amounts of unstructured or semi-structured data.",
    tags: ["Database", "Web"],
    link: "https://www.mongodb.com/",
  },
  {
    uuid: "49e71951-a281-45ac-8fec-0550725b0c37",
    name: "MySQL",
    icon: {
      svg: "/images/skills/mysql.svg",
    },
    description:
      "MySQL is a widely used open-source relational database management system. It provides a structured way to store data using tables, rows, and columns, making it suitable for various types of applications.",
    tags: ["Database", "Web"],
    link: "https://www.mysql.com/",
  },
  {
    uuid: "b93b5267-ae54-40f0-849a-0e09b954f0b3",
    name: "SQL",
    icon: {
      svg: "/images/skills/sql.svg",
    },
    description:
      "SQL (Structured Query Language) is a domain-specific language used to manage and manipulate relational databases. It allows for querying, updating, and managing data in a structured manner.",
    tags: ["Database", "Programming Language"],
    link: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    uuid: "fd0c238a-027f-4d58-acd6-5609cb587aff",
    name: "Python",
    icon: {
      svg: "/images/skills/python.svg",
    },
    description:
      "Python is a versatile and readable programming language known for its simplicity and extensive libraries. It is widely used for artificial intelligence, data analysis, automation, and more.",
    tags: [
      "Programming Language",
      "AI/ML",
      "Backend",
      "Web",
      "Game Development",
    ],
    link: "https://www.python.org/",
  },
  {
    uuid: "b04f730e-a7b4-4767-a021-f471dc813e26",
    name: "C++",
    icon: {
      svg: "/images/skills/cplusplus.svg",
    },
    description:
      "C++ is a powerful programming language often used for systems programming, game development, and high-performance applications. It provides a balance between low-level control and high-level abstractions.",
    tags: ["Programming Language", "Game Development", "System Programming"],
    link: "https://en.wikipedia.org/wiki/C++",
  },
  {
    uuid: "8d341103-0380-4f4a-9db5-986b64d8fbd0",
    name: "C",
    icon: { svg: "/images/skills/c.svg" },
    description:
      "C is a foundational programming language known for its efficiency and close relationship with hardware. It is commonly used for operating systems, embedded systems, and low-level programming.",
    tags: ["Programming Language", "System Programming"],
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    uuid: "9c68ae19-0623-4404-8380-291923ef56d5",
    name: "C#",
    icon: {
      svg: "/images/skills/csharp.svg",
    },
    description:
      "C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for developing Windows applications, games, and web services.",
    tags: ["Programming Language", "Game Development", "Backend", "Web"],
    link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
  },
  {
    uuid: "ed502ee2-6431-4fc5-bdb6-048dd743c2b8",
    name: "Java",
    icon: {
      svg: "/images/skills/java.svg",
    },
    description:
      "Java is a popular and versatile object-oriented programming language used for building cross-platform applications, including web, desktop, mobile, and enterprise solutions.",
    tags: ["Programming Language", "Mobile"],
    link: "https://www.java.com/en/",
  },
  {
    uuid: "d2cfd646-fae7-4773-88fe-6974b9674d84",
    name: "Git",
    icon: {
      svg: "/images/skills/git.svg",
    },
    description:
      "Git is a distributed version control system used for tracking changes in source code during software development. It allows collaboration, branching, and merging with ease.",
    tags: ["Version Control"],
    link: "https://git-scm.com/",
  },
  {
    uuid: "46ee90cd-dc54-4aed-8ef9-df74ce9b37d7",
    name: "GitHub",
    icon: {
      svg: "/images/skills/github.svg",
    },
    description:
      "GitHub is a platform for hosting and collaborating on Git repositories. It provides tools for version control, code review, issue tracking, and more.",
    tags: ["Version Control"],
    link: "https://github.com/",
  },
  {
    uuid: "58903781-b1ba-4f04-9ecd-03af03326834",
    name: "Linux",
    icon: {
      svg: "/images/skills/linux.svg",
    },
    description:
      "Linux is an open-source operating system kernel used in various distributions (distros). It powers servers, desktops, and embedded devices, and is known for its stability and security.",
    tags: ["OS"],
    link: "https://www.linux.com/what-is-linux/",
  },
  {
    uuid: "8aa8fc90-19ce-43ec-aa47-3ea47df2b9fc",
    name: "Windows",
    icon: {
      svg: "/images/skills/windows.svg",
    },
    description:
      "Windows is a widely used operating system developed by Microsoft. It offers a graphical user interface and supports a wide range of applications.",
    tags: ["OS"],
    link: "https://www.microsoft.com/en-us/windows",
  },
  {
    uuid: "a89c7a2b-da9c-4b45-8d32-fbb64394eaa5",
    name: "Visual Studio Code",
    icon: {
      svg: "/images/skills/vscode.svg",
    },
    description:
      "Visual Studio Code (VSCode) is a popular code editor known for its extensibility and powerful features. It supports a wide range of programming languages and frameworks.",
    tags: ["IDE/Editor"],
    link: "https://code.visualstudio.com/",
  },
  {
    uuid: "a2f72386-1127-4ab9-b760-4c17ad2b4521",
    name: "Visual Studio",
    icon: {
      svg: "/images/skills/visualstudio.svg",
    },
    description:
      "Visual Studio is an integrated development environment (IDE) used for building Windows applications, web applications, and services. It offers a comprehensive set of tools and features.",
    tags: ["IDE/Editor"],
    link: "https://visualstudio.microsoft.com/",
  },
  {
    uuid: "82b67299-687f-469b-85fa-e01998fc8ba1",
    name: "Eclipse",
    icon: {
      svg: "/images/skills/eclipse.svg",
    },
    description:
      "Eclipse is a widely used IDE known for its support of multiple programming languages. It provides a rich set of tools for development, debugging, and more.",
    tags: ["IDE/Editor"],
    link: "https://www.eclipse.org/downloads/",
  },
  {
    uuid: "33e382c3-b000-4ff1-895f-fc1f9cdbf2c8",
    name: "Firebase",
    icon: {
      svg: "/images/skills/firebase.svg",
    },
    description:
      "Firebase is a comprehensive platform by Google for building web and mobile applications. It offers features like real-time databases, authentication, hosting, and more.",
    tags: ["Backend", "Web", "Cloud", "Database"],
    link: "https://firebase.google.com/",
  },
  {
    uuid: "f427de9c-28b7-46b1-a394-c0334d7bb35b",
    name: "NPM",
    icon: {
      svg: "/images/skills/npm.svg",
    },
    description:
      "NPM (Node Package Manager) is a package manager for Node.js. It allows developers to easily install, manage, and publish JavaScript packages and libraries.",
    tags: ["Web"],
    link: "https://www.npmjs.com/",
  },
  {
    uuid: "e494a12a-d623-4dd7-86ab-555810447cd0",
    name: "Markdown",
    icon: {
      svg: "/images/skills/markdown.svg",
    },
    description:
      "Markdown is a lightweight markup language used to format plain text. It is commonly used for creating documentation and README files.",
    tags: ["Other"],
    link: "https://www.markdownguide.org/",
  },
  {
    uuid: "8998b067-c276-487a-82ad-64c88ae77806",
    name: "Tailwind CSS",
    icon: {
      svg: "/images/skills/tailwindcss.svg",
    },
    description:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development by applying pre-designed utility classes. It promotes a component-driven approach to styling.",
    tags: ["Frontend", "Web", "UI/UX"],
    link: "https://tailwindcss.com/",
  },
  {
    uuid: "9f7aae5d-3305-4070-85ea-ef2c1c5bc4a8",
    name: "Material UI",
    icon: {
      svg: "/images/skills/materialui.svg",
    },
    description:
      "Material UI is a popular React component library that implements Google's Material Design. It provides a set of visually appealing and responsive UI components.",
    tags: ["Frontend", "Web", "UI/UX"],
    link: "https://mui.com/material-ui/",
  },
  {
    uuid: "3378b4d3-de59-4405-836e-b3286edbe5c3",
    name: "Vercel",
    icon: {
      svg: "/images/skills/vercel.svg",
    },
    description:
      "Vercel is a cloud platform for deploying and hosting web applications. It specializes in providing seamless deployment workflows for frontend projects.",
    tags: ["Cloud", "Web"],
    link: "https://vercel.com/",
  },
  {
    uuid: "d5dc661d-1408-4d59-8986-7cf9a631e7ca",
    name: "Figma",
    icon: {
      svg: "/images/skills/figma.svg",
    },
    description:
      "Figma is a collaborative design tool used for creating user interfaces, prototypes, and interactive designs. It allows real-time collaboration and efficient design iteration.",
    tags: ["UI/UX"],
    link: "https://www.figma.com/",
  },
  {
    uuid: "f63a0950-3f9e-4750-afc7-33b99ec008a7",
    name: "Framer Motion",
    icon: {},
    description:
      "Framer Motion is a motion library for React that enables smooth animations and transitions. It provides an intuitive API for creating engaging UI animations.",
    tags: ["Frontend", "Web", "UI/UX"],
    link: "https://www.framer.com/motion/",
  },
  {
    uuid: "6421499b-5753-42cc-b268-e460e16db88a",
    name: "Unity",
    icon: {
      svg: "/images/skills/unity.svg",
    },
    description:
      "Unity is a popular game engine used for creating 2D and 3D games. It offers a wide range of tools for designing, developing, and deploying games across various platforms.",
    tags: ["Game Engine", "Game Development", "3D", "UI/UX", "Web"],
    link: "https://unity.com/",
  },
  {
    uuid: "58be026a-4be8-4e60-9487-1dd97a5c03bd",
    name: "Blender",
    icon: {
      svg: "/images/skills/blender.svg",
    },
    description:
      "Blender is a powerful open-source 3D creation suite. It is used for modeling, animation, rendering, and more, making it suitable for game development and visual effects.",
    tags: ["3D"],
    link: "https://www.blender.org/",
  },
  {
    uuid: "29316501-87bd-4b32-8119-94e9d2052b82",
    name: "Maya",
    icon: {
      svg: "/images/skills/maya.svg",
    },
    description:
      "Maya is a professional 3D computer graphics software used for animation, modeling, and simulation. It is widely used in the film and entertainment industry.",
    tags: ["3D"],
    link: "https://www.autodesk.com/products/maya/overview",
  },
  {
    uuid: "810abe14-ab47-4714-bb14-a34a7f26af45",
    name: "Android Studio",
    icon: {
      svg: "/images/skills/androidstudio.svg",
    },
    description:
      "Android Studio is the official IDE for Android app development. It provides tools for designing, coding, testing, and deploying Android applications.",
    tags: ["Mobile", "IDE/Editor"],
    link: "https://developer.android.com/studio",
  },
  {
    uuid: "2be82d7b-5cdb-4a35-adba-43ea85a51dfe",
    name: "Android",
    icon: {
      svg: "/images/skills/android.svg",
    },
    description:
      "Android is a mobile operating system developed by Google. It powers a vast range of mobile devices and offers a rich ecosystem for app development.",
    tags: ["Mobile", "OS"],
    link: "https://www.android.com/",
  },
  {
    uuid: "976a1b57-bf3a-457b-b827-83227316df30",
    name: "Pandas",
    icon: {
      svg: "/images/skills/pandas.svg",
    },
    description:
      "Pandas is a Python library used for data analysis and manipulation. It provides data structures and functions to efficiently work with structured data.",
    tags: ["AI/ML"],
    link: "https://pandas.pydata.org/",
  },
  {
    uuid: "3c29b95b-d12d-4290-81b4-c8d98aa317a3",
    name: "NumPy",
    icon: {
      svg: "/images/skills/numpy.svg",
    },
    description:
      "NumPy is a fundamental Python library for numerical computations. It provides support for arrays, matrices, and mathematical functions, essential for scientific computing.",
    tags: ["AI/ML"],
    link: "https://numpy.org/",
  },
  {
    uuid: "2725324c-cf89-435a-8c62-4f8fe67910c1",
    name: "Google Cloud",
    icon: {
      svg: "/images/skills/googlecloud.svg",
    },
    description:
      "Google Cloud is a cloud computing platform that offers various services for storage, computing, machine learning, and more. It enables scalable and reliable cloud solutions.",
    tags: ["Cloud"],
    link: "https://cloud.google.com/",
  },
  {
    uuid: "656f60e5-5500-4a21-a043-389c8b7301ca",
    name: "Jupyter",
    icon: {
      svg: "/images/skills/jupyter.svg",
    },
    description:
      "Jupyter is an open-source web application for creating and sharing interactive documents containing live code, equations, visualizations, and narrative text.",
    tags: ["AI/ML", "Other"],
    link: "https://jupyter.org/",
  },
  {
    uuid: "b5003fb2-bd00-4dc6-8461-a72182b2b763",
    name: "Three.js",
    icon: {
      svg: "/images/skills/threejs.svg",
    },
    description:
      "Three.js is a JavaScript library for creating 3D graphics and animations in the browser. It simplifies the complex process of 3D rendering and interaction.",
    tags: ["3D", "Web", "UI/UX", "Game Development", "Frontend"],
    link: "https://threejs.org/",
  },
  {
    uuid: "d280f614-7604-4330-9128-3057194d5455",
    name: "Trello",
    icon: {
      svg: "/images/skills/trello.svg",
    },
    description:
      "Trello is a visual project management tool that uses boards, lists, and cards to organize tasks and collaborate with teams. It provides an intuitive interface for tracking progress.",
    tags: ["Other"],
    link: "https://trello.com/",
  },
  {
    uuid: "26664a45-b226-422b-a04c-7a3ea68374a5",
    name: "LaTeX",
    icon: {
      svg: "/images/skills/latex.svg",
    },
    description:
      "LaTeX is a document preparation system used for typesetting technical and scientific documents. It is widely used in academia and publishing for its high-quality typesetting.",
    tags: ["Other"],
    link: "https://www.latex-project.org/",
  },
  {
    uuid: "cccb9e5b-a6f5-47bd-9a2b-6d96d54fb956",
    name: "Matplotlib",
    icon: {
      svg: "/images/skills/matplotlib.svg",
    },
    description:
      "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. Matplotlib makes easy things easy and hard things possible.",
    tags: ["AI/ML", "Backend"],
    link: "https://matplotlib.org/",
  },
  {
    uuid: "6d2a481d-c121-4057-a99c-cf6f96a300a4",
    name: "Postman",
    icon: {
      svg: "/images/skills/postman.svg",
    },
    description:
      "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
    tags: ["Web"],
    link: "https://www.postman.com/",
  },
  {
    uuid: "e113633d-8899-4465-a88a-cc70dc1f562e",
    name: "Ren'Py",
    icon: {
      svg: "/images/skills/renpy.svg",
    },
    description:
      "Ren'Py is a visual novel engine – used by thousands of creators from around the world – that helps you use words, images, and sounds to tell interactive stories that run on computers and mobile devices.",
    tags: ["Game Development", "UI/UX", "Game Engine"],
    link: "https://www.renpy.org/",
  },
  {
    uuid: "e320d932-0298-49aa-a62a-41553a21f1d0",
    name: "Vite.js",
    icon: {
      svg: "/images/skills/vite.svg",
    },
    description:
      "Vite.js is a modern build tool and development server optimized for rapid web app creation. With its native ES modules support, Vite.js delivers near-instant feedback during development.",
    tags: ["Web"],
    link: "https://vitejs.dev/",
  },
  {
    uuid: "580b77f0-2c64-4d4f-a0bb-32663ed04e1a",
    name: "scikit-learn",
    icon: {
      svg: "/images/skills/scikit-learn.svg",
    },
    description:
      "scikit-learn is Python's machine learning library, offering tools for data analysis, classification, and regression tasks. It's a go-to choice for implementing machine learning algorithms with ease.",
    tags: ["AI/ML"],
    link: "https://scikit-learn.org/stable/index.html",
  },
  {
    uuid: "9932ece3-e0f6-4657-917b-6b71fd6aa372",
    name: "Jotai",
    icon: { svg: "/images/skills/jotai.svg" },
    description:
      "Jotai is a state management library for React. It provides a simple and flexible API for managing application state.",
    tags: ["Frontend", "Web"],
    link: "https://jotai.org/",
  },
  {
    uuid: "8ca19bc9-6057-48a9-acc0-8dcc6601a98d",
    name: "AWS",
    icon: { svg: "/images/skills/aws.svg" },
    description:
      "Amazon Web Services (AWS) is a cloud platform that offers various services for storage, computing, machine learning, and more. It enables scalable and reliable cloud solutions.",
    tags: ["Cloud", "Backend", "Web", "Database"],
    link: "https://aws.amazon.com/",
  },
  {
    uuid: "3376f2ba-7c00-4cbb-bb5c-58e7bc63b4b4",
    name: "Prisma",
    icon: { svg: "/images/skills/prisma.svg" },
    description:
      "Prisma is an ORM for TypeScript, that allows to define a database schema and models, and then generate a type-safe client that can be used to interact with a database from the backend. It provides a type-safe API for building scalable and performant applications.",
    tags: ["Backend", "Web", "Database"],
    link: "https://www.prisma.io/",
  },
  {
    uuid: "3376f2ba-7c00-4cbb-bb5c-58e7bc63b4b5",
    name: "PlanetScale",
    icon: { svg: "/images/skills/planetscale.svg" },
    description:
      "PlanetScale is a MySQL-compatible serverless database, that brings you scale, performance, and reliability — without sacrificing developer experience",
    tags: ["Backend", "Web", "Database"],
    link: "https://planetscale.com/",
  },
  {
    uuid: "3376f2ba-7c00-4cbb-bb5c-58e7bc63b4b6",
    name: "TRPC",
    icon: { svg: "/images/skills/trpc.svg" },
    description:
      "TRPC is an end-to-end TypeScript API framework for building scalable and type-safe APIs. It provides an unmatched type-safety and developer experience, while being simple and flexible.",
    tags: ["Backend", "Frontend", "Web"],
    link: "https://trpc.io/",
  },
  {
    uuid: "3376f2ba-7c00-4cbb-bb5c-58e7bc63b4b7",
    name: "Clerk",
    icon: { svg: "/images/skills/clerk.svg" },
    description:
      "Clerk is a developer-first authentication and user management service. It provides a simple and secure way to add authentication to your application.",
    tags: ["Backend", "Frontend", "Web"],
    link: "https://clerk.com/",
  },
]

export { skills, Tags }
export type { Skill, SkillTag }

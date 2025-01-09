import RancidLogo from "../assets/RancidTomatillos/RancidTomatillosLogo.jpeg";
import RancidGif from "../assets/RancidTomatillos/RancidTomatillos.gif";
import RancidData from "../assets/RancidTomatillos/RancidTomatillosDataDiagram.png";
import TTradeLogo from "../assets/TTrade/TTradeLogo.png";
import TTradeGif from "../assets/TTrade/t-trade_gif.gif";
import TrackerLogo from "../assets/JobTracker/TrackerLogo.png";
import LoginPage from "../assets/JobTracker/LoginPage.png";
import JobAppPage from "../assets/JobTracker/JobAppPage.png";
import JobAppPageDescriptionModal from "../assets/JobTracker/JobAppPageDescriptionModal.png";
import PokeGotchiLogo from "../assets/PokeGotchi/PokeGotchiLogo.png";
import PokeGotchiPlayScreen from '../assets/PokeGotchi/PokeGotchiPlayScreen.png'
import GymCrushLogoWIP from "../assets/GymCrush/GymCrushLogoWIP.png";

export const Projects = [
    {
      Title: "Job Tracker",
      Slug: "job-tracker",
      Logo: TrackerLogo,
      Images: [LoginPage, JobAppPage, JobAppPageDescriptionModal],
      Description: "Job Tracker is a tool built to assist with searching for a job where users can save, view, and edit prospective job applications along with companies, and contacts. On a 14 person team this project required clear and effective communication with technical decisions and documentation through development. My primary responsibilities on this app included the full stack implementation of viewing specific job applications, and Continous Integration on the front end utilizing CircleCI.",
      Tech: {
        FE: ["Typescript", "React", "Tailwind", "Cypress"],
        BE: ["Ruby on Rails", "RSpec"],
        Tools: ["Git", "Github", "Slack", "Heroku", "CircleCI"]
      },
      Team: "14 Members",
      Time: "DEC 2024 - JAN 2025",
      Repos: {
        FE: "https://github.com/turingschool/tracker-crm-fe",
        BE: "https://github.com/turingschool/tracker-crm"
      },
      Deployment: ""
    },
    {
      Title: "Poke Gotchi",
      Slug: "poke-gotchi",
      Logo: PokeGotchiLogo,
      Images: [PokeGotchiPlayScreen],
      Description: "Poké-Gochi, an interactive app where Trainers can interact, level up, and train virtual Pokémon. The main goal with this project was to build something from the ground up collaboratively with my team members. I had the opportunity to explore stretch tech by implementation of asynchronous jobs through Redis and Sidekiq to periodically update database values. My primary responsibilities on this project were centered on BE functionality, stretch tech implementation, and deployment",
      Tech: {
        FE: ["Javascript", "React"],
        BE: [ "Ruby", "Ruby on Rails", "sidekiq"],
        Tools: ["Heroku", "Redis", "PokeAPI"]
      },
      Team: "5 Members",
      Time: "OCT 2024 - NOV 2024",
      Repos: {
        FE: "https://github.com/jchirch/poke-gochi",
        BE: "https://github.com/jchirch/poke-gochi-API"
      },
      Deployment: "test"
    },
    {
      Title: "T-Trade",
      Slug: "t-trade",
      Logo: TTradeLogo,
      Images: [TTradeGif],
      Description: "T-Trade is an E-commerce website designed for vendors to view, search and edit their subscribers' subscriptions to tea deliveries. This project had a short 72 timeline. I prioritized time management as I worked on this full stack project while maintaining a focus on accessibility and responsiveness in my design. The application uses the Chrome Dev Tools Lighthouse feature to test accessibility achieving a 100% score.",
      Tech: {
        FE: ["HTML", "CSS", "Javascript", "React"],
        BE: ["Ruby", "Ruby On Rails"],
        Tools: ["Git", "Github"]
      },
      Team: "Solo",
      Time: "NOV 2024",
      Repos: {
        FE: "https://github.com/kylomite/tea-sub-front-end",
        BE: "https://github.com/kylomite/tea-sub-api"
      },
      Deployment: ""
    },
    {
      Title: "Rancid Tomatillos",
      Slug: "rancid-tomatillos",
      Logo: RancidLogo,
      Images: [RancidData, RancidGif],
      Description: "Rancid Tomatillos is movie aggregator which allows users to view, search, and rate popular movies.This paired project gave me and my partner the opportunity to implement react and react router on the front end. We prioritized creating a responsive accessible project scoring a 100% accessibility rating using the Chrome Dev Tools lighthouse feature. My primary focuses were implementing voting functionality in this application along with styling through CSS.",
      Tech: {
        FE: ["Javascript", "CSS", "React", "React Router"],
        Tools: ["Lighthouse", "Cypress", "Vercel"]
      },
      Team: "Pair",
      Time: "OCT 2024",
      Repos: {
        FE: "https://github.com/kylomite/rancid-tomatillos"
      },
      Deployment: ""
    },
    {
      Title: "Gym Crush",
      Slug: "gym-crush",
      Logo: GymCrushLogoWIP,
      Images: [],
      Description: "",
      Tech: {
        FE: [],
        BE: [],
        Tools: []
      },
      Team: "Solo",
      Time: "On going",
      Repos: {
        FE: "",
        BE: ""
      },
      Deployment: ""
    }
]
export const Skills = [
  {
    FrontEnd: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "TypeScript",
      "Tailwind"
    ],
    BackEnd: [
      "Ruby",
      "Ruby on Rails",
      "SQL",
      "PostgreSQL",
    ],
    Tools: [
      "RSpec",
      "Cypress",
      "Node.js",
      "Git",
      "Github",
      "VSCode",
      "Figma",
      "Heroku",
      "Vercel",
      "Adobe Suite",
      "Google Suite",
    ],
    Methods: [
      "Agile",
      "RESTful APIs",
      "OOP",
      "Functional Programming",
      "TDD",
      "E2E Testing",
      "MVC Architecture",
      "Microservice Architecture",
    ]
  }
];


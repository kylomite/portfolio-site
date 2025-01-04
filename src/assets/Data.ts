import RancidLogo from "../assets/RancidTomatillos/RancidTomatillosLogo.jpeg";
import RancidGif from "../assets/RancidTomatillos/RancidTomatillos.gif";
import RancidData from "../assets/RancidTomatillos/RancidTomatillosDataDiagram.png";
import TTradeLogo from "../assets/TTrade/TTradeLogo.png";
import TTradeGif from "../assets/TTrade/t-trade_gif.gif";
import TrackerLogo from "../assets/images/TrackerLogo.png";
import PokeGotchiLogo from "../assets/images/PokeGotchiLogo.png";
import GymCrushLogo from "../assets/GymCrush/GymCrushLogo.png";

const Projects = [
    {
      Title: "GymCrush",
      Logo: {GymCrushLogo},
      Images: [],
      Description: "",
      Tech: {
        FE: [],
        BE: [],
        Tools: []
      },
      Team: "Solo",
      Time: "On going"
    },
    {
      Title: "Job Tracker",
      Logo: "",
      Images: [],
      Description: "",
      Tech: {
        FE: ["Typescript", "React", "Tailwind", "Cypress"],
        BE: ["Ruby on Rails", "RSpec"],
        Tools: ["Git", "Github", "Slack"]
      },
      Team: "14 Members",
      Time: "DEC 2024 - JAN 2025"
    },
    {
      Title: "Poke-Gotchi",
      Logo: "",
      Image: [],
      Description: "Poké-Gochi, an interactive app where Trainers can interact, level up, and train virtual Pokémon. The main goal with this project was to build something from the ground up collaboratively with my team members. I had the opportunity to explore stretch tech by implementation of asynchronous jobs through Redis and Sidekiq to periodically update database values. My primary responsibilities on this project were centered on BE functionality, stretch tech implementation, and deployment",
      Tech: {
        FE: [],
        BE: [ "Ruby", "Ruby on Rails", "sidekiq"],
        Tools: ["Heroku", "Redis"]
      },
      Team: "5 Members",
      Time: "OCT 2024 - NOV 2024"
    },
    {
      Title: "T-Trade",
      Logo: {TTradeLogo},
      Images: [{TTradeGif}],
      Description: "T-Trade is an E-commerce website designed for vendors to view, search and edit their subscribers' subscriptions to tea deliveries. This project had a short 72 timeline. I prioritized time management as I worked on this full stack project while maintaining a focus on accessibility and responsiveness in my design. The application uses the Chrome Dev Tools Lighthouse feature to test accessibility achieving a 100% score.",
      Tech: {
        FE: ["HTML", "CSS", "Javascript", "React"],
        BE: ["Ruby", "Ruby On Rails"],
        Tools: ["Git", "Github"]
      },
      Team: "Solo",
      Time: "NOV 2024"
    },
    {
      Title: "Rancid Tomatillos",
      Logo: "",
      Images: [],
      Description: "",
      Tech: {
        FE: [],
        Tools: []
      },
      Team: "Pair",
      Time: "OCT 2024"
    },
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
const Contact = []


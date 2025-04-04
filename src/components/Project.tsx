import { useParams } from "react-router-dom";
import { Projects } from "../assets/Data";
import Skill from "./Skill";
import githubLogo from '../assets/Images/Octicons-mark-github.svg';
import URLImage from '../assets/Images/url.svg';

interface Project {
  Title: string;
  Slug: string;
  Logo: string | null;
  Repos: {
    FE?: string;
    BE?: string;
  };
  Deployment?: string;
  Description: string;
  Images: string[];
  Tech: {
    [category: string]: string[];
  };
  Team: string;
  Time: string;
}

interface ProjectProp {
  isDarkMode: boolean;
}

function Project({ isDarkMode }: ProjectProp) {
  const svgColorFilter = isDarkMode ? 'invert(100%)' : 'invert(0%)';
  const { title } = useParams<{ title: string }>();

  const project = Projects.find((proj) => proj.Slug === title);

  if (!project) {
    return <div className="text-center">Project not found</div>;
  }

  return (
    <div className="pt-32 bg-[rgba(209,213,219,0.4)] min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{project.Title}</h1>
      {project.Logo && (
        <img
          src={project.Logo}
          alt={project.Title}
          className="w-64 h-64 sm:w-48 sm:h-48 lg:w-96 lg:h-96 object-contain mb-4"
        />
      )}

      <div className="mb-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2">Repositories</h2>
        <div className="flex flex-col sm:flex-row gap-16 items-center">
          {project.Repos.FE && (
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">FE:</span>
              <a
                href={project.Repos.FE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-transform transform hover:scale-125 cursor-pointer"
                style={{ filter: svgColorFilter }}
              >
                <img
                  src={githubLogo}
                  alt="Frontend Repository"
                  className="w-8 h-8"
                />
              </a>
            </div>
          )}
          {project.Repos.BE && (
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">BE:</span>
              <a
                href={project.Repos.BE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-transform transform hover:scale-125 cursor-pointer"
                style={{ filter: svgColorFilter }}
              >
                <img
                  src={githubLogo}
                  alt="Backend Repository"
                  className="w-8 h-8"
                />
              </a>
            </div>
          )}
        </div>
        {project.Deployment && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">Deployment </h3>
            <a
              href={project.Deployment}
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-transform transform hover:scale-125 inline-flex items-center gap-2"
              style={{ filter: svgColorFilter }}
            >
              <img
                src={URLImage}
                alt="Image of a link"
                className="w-8 h-8"
              />
            </a>
          </div>
        )}
      </div>

      <p className="text-lg mb-4 mx-4 text-center">{project.Description}</p>

      <section className="w-full mt-8 px-4 sm:px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Technologies</h2>
        {Object.entries(project.Tech).map(
          ([category, skills]: [string, string[]], index: number) => (
            <section
              key={index}
              className="mb-8 w-full flex flex-col md:flex-row items-center border-b-2 border-slate-300 pb-4"
            >
              {/* Category aligned left */}
              <div className="w-full md:w-4 md:pl-10 flex justify-start md:justify-center mb-4 md:mb-0">
                <h3 className="text-md font-bold">{category}</h3>
              </div>

              {/* Skills aligned right */}
              <div className="w-full md:w-full flex flex-wrap justify-start md:justify-end gap-4">
                {skills.map((skill, skillIndex: number) => (
                  <Skill key={skillIndex} skillName={skill} />
                ))}
              </div>
            </section>
          )
        )}
      </section>

      <p className="m-4 text-sm">
        Team: {project.Team} | Time: {project.Time}
      </p>
    </div>
  );
}

export default Project;
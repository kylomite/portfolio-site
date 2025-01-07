import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Projects } from "../assets/Data";

function ProjectContainer() {


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <section className="w-screen overflow-hidden flex flex-col items-center justify-center bg-[rgba(209,213,219,0.4)]">
      <h1 className="mt-4 mb-2 text-2xl font-semibold">Projects</h1>

      <div className="relative w-full pl-4 pr-8 py-4">
        <div className="hidden sm:grid grid-cols-5 gap-4 w-full">
          {Projects.map((project) => (
            <Link
              to={`/project/${project.Slug}`}
              key={project.Slug}
              className="relative w-full flex flex-col items-center"
              draggable="false"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                className="w-full aspect-[4/5] object-cover object-center border-2 border-slate-900 shadow-xl"
                src={project.Logo}
                alt={project.Title}
                draggable="false"
              />
              <h2 className="text-xl font-semibold pt-2 mb-1">{project.Title}</h2>
              <p className="text-sm">{project.Time}</p>
            </Link>
          ))}
        </div>

        <div className="sm:hidden grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {Projects.map((project) => (
            <Link
              to={`/project/${project.Slug}`}
              key={project.Slug}
              className="relative w-full flex flex-col items-center"
              draggable="false"
            >
              <img
                className="w-full aspect-[4/5] object-cover object-center border-2 border-slate-900 shadow-xl"
                src={project.Logo}
                alt={project.Title}
                draggable="false"
              />
              <h2 className="text-xl font-semibold pt-2 mb-1">{project.Title}</h2>
              <p className="text-sm">{project.Time}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectContainer;
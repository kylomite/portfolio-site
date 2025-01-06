// import React, { useRef, useEffect } from "react";
// import RancidLogo from "../assets/images/RancidTomatillosLogo.jpeg";
// import TeaTradeLogo from "../assets/images/teaTrade.png";
// import TrackerLogo from "../assets/images/TrackerLogo.png";
// import FutbolStatTrackerLogo from "../assets/images/FutbolStatTrackerLogo.png";
// import PokeGotchiLogo from "../assets/images/PokeGotchiLogo.png";
// import GymCrushLogo from "../assets/images/GymCrushLogo.png"

// const ProjectContainer: React.FC = () => {
//   const trackRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     let mouseDownAt = 0;
//     let prevPercentage = 0;
//     let isMouseDown = false;

//     const handleOnDown = (e: MouseEvent) => {
//       isMouseDown = true;
//       mouseDownAt = e.clientX;
//     };

//     const handleOnUp = () => {
//       isMouseDown = false;
//       prevPercentage = parseFloat(track.dataset.percentage || "0");
//     };

//     const handleOnMove = (e: MouseEvent) => {
//       if (!isMouseDown) return;

//       const mouseDelta = e.clientX - mouseDownAt;
//       const maxDelta = window.innerWidth / 2;
//       const percentage = (mouseDelta / maxDelta) * 100;
//       const nextPercentageUnconstrained = prevPercentage + percentage;

//       let nextPercentage = Math.max(nextPercentageUnconstrained, -(track.children.length - 1) * 5.75);
//       nextPercentage = Math.min(nextPercentage, 0);

//       track.dataset.percentage = nextPercentage.toString();

//       track.animate(
//         {
//           transform: `translate(${nextPercentage}%, -50%)`,
//         },
//         { duration: 1200, fill: "forwards" }
//       );

//       for (const image of track.getElementsByClassName("image")) {
//         (image as HTMLImageElement).animate(
//           {
//             objectPosition: `${100 + nextPercentage}% center`,
//           },
//           { duration: 1200, fill: "forwards" }
//         );
//       }
//     };

//     const triggerInitialAnimation = () => {
//       const initialPercentage = 0;
//       track.dataset.percentage = initialPercentage.toString();
//       track.style.transform = `translate(${initialPercentage}%, 0%%)`;

//       for (const image of track.getElementsByClassName("image")) {
//         (image as HTMLImageElement).style.objectPosition = `${100 + initialPercentage}% center`;
//       }
//     };

//     triggerInitialAnimation();

//     window.addEventListener("mousedown", handleOnDown);
//     window.addEventListener("mouseup", handleOnUp);
//     window.addEventListener("mousemove", handleOnMove);

//     return () => {
//       window.removeEventListener("mousedown", handleOnDown);
//       window.removeEventListener("mouseup", handleOnUp);
//       window.removeEventListener("mousemove", handleOnMove);
//     };
//   }, []);

//   return (
//     <section className=" mt-80 w-screen overflow-hidden flex flex-col items-center justify-center bg-[rgba(209,213,219,0.4)]">
//       <h1 className=" mt-4 mb-2 text-2xl font-semibold">Projects</h1>

//       <div
//         className="relative w-full h-[68vmin] overflow-hidden"
//         style={{ width: "100%", height: "68vmin" }}
//       >
//         <div
//           id="image-track"
//           ref={trackRef}
//           data-mouse-down-at="0"
//           data-prev-percentage="0"
//           className="flex gap-[4vmin] absolute left-0 top-1/2"
//           style={{
//             transform: "translate(0%, -50%)",
//             userSelect: "none",
//           }}
//         >
//           <div className="ml-8 relative w-[40vmin] h-[56vmin]">
//             <img
//               className="image w-full h-full object-cover object-center"
//               src={GymCrushLogo}
//               draggable="false"
//             />
//             <h2 className="flex justify-center border-t-4 border-slate-900 pt-1 text-xl"> Gym Crush</h2>
//           </div>
//           <div 
//           className="relative w-[40vmin] h-[56vmin]"
//           >
//             <img
//               className="image w-full h-full object-cover object-center"
//               // src="tets"
//               src={TrackerLogo}
//               draggable="false"
//             />
//             <h2 className="flex justify-center border-t-4 border-slate-900 pt-1 text-xl"> Job Tracker</h2>
//           </div>
//           <div className="relative w-[40vmin] h-[56vmin]">
//             <img
//               className="image w-full h-full object-cover object-center"
//               src={TeaTradeLogo}
//               draggable="false"
//             />
//             <h2 className="flex justify-center border-t-4 border-slate-900 pt-1 text-xl"> T-Trade</h2>
//           </div>
//           <div className="relative w-[40vmin] h-[56vmin] ">
//             <img
//               className="image w-full h-full object-cover object-center"
//               src={RancidLogo}
//               draggable="false"
//             />
//             <h2 className="flex justify-center border-t-4 border-slate-900 pt-1 text-xl"> Rancid Tomatillos</h2>
//           </div>
//           <div className="relative w-[40vmin] h-[56vmin] ">
//             <img
//               className="image w-full h-full object-cover object-center"
//               src={PokeGotchiLogo}
//               draggable="false"
//             />
//             <h2 className="flex justify-center border-t-4 border-slate-900 pt-1 text-xl"> Poke-Gotchi</h2>
//           </div>
//           <div className="relative w-[40vmin] h-[56vmin] ">
//             <img
//               className="image w-full h-full object-cover object-center"
//               src={FutbolStatTrackerLogo}
//               draggable="false"
//             />
//             <h2 className="flex justify-center border-t-4 border-slate-900 pt-1 text-xl"> Futbol Stat Tracker</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { Projects } from "../assets/Data";
import { Link } from "react-router-dom";

function ProjectContainer() {
  return (
    <section className="mt-80 w-screen overflow-hidden flex flex-col items-center justify-center bg-[rgba(209,213,219,0.4)]">
      <h1 className="mt-4 mb-2 text-2xl font-semibold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Projects.map((project) => (
          <Link
            to={`/project/${project.Title.toLowerCase().replace(/\s+/g, "-")}`}
            key={project.Title}
            className="flex flex-col items-center bg-white p-4 shadow-lg border-slate-900 border-2 hover:scale-105 transition"
          >
            {project.Logo && (
              <img
                src={project.Logo}
                alt={project.Title}
                className="w-32 h-32 object-contain mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{project.Title}</h2>
            <p className="text-sm text-gray-500">{project.Time}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectContainer;
import React, { useRef, useEffect } from "react";

const ProjectContainer: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let mouseDownAt = 0;
    let prevPercentage = 0;
    let isMouseDown = false;

    const handleOnDown = (e: MouseEvent) => {
      isMouseDown = true;
      mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
      isMouseDown = false;
      prevPercentage = parseFloat(track.dataset.percentage || "0");
    };

    const handleOnMove = (e: MouseEvent) => {
      if (!isMouseDown) return;

      const mouseDelta = e.clientX - mouseDownAt;
      const maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * 100;
      const nextPercentageUnconstrained = prevPercentage + percentage;

      let nextPercentage = Math.max(nextPercentageUnconstrained, -(track.children.length - 1) * 11.75);
      nextPercentage = Math.min(nextPercentage, 0);

      track.dataset.percentage = nextPercentage.toString();

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        (image as HTMLImageElement).animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    const triggerInitialAnimation = () => {
      const initialPercentage = 0;
      track.dataset.percentage = initialPercentage.toString();
      track.style.transform = `translate(${initialPercentage}%, 0%%)`;

      for (const image of track.getElementsByClassName("image")) {
        (image as HTMLImageElement).style.objectPosition = `${100 + initialPercentage}% center`;
      }
    };

    triggerInitialAnimation();

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
    };
  }, []);

  return (
    <main className=" mt-80 w-screen overflow-hidden flex flex-col items-center justify-center bg-[rgba(209,213,219,0.4)]">
      <h1 className=" mt-4 mb-2 text-2xl font-semibold">Projects</h1>

      <div
        className="relative w-full h-[60vmin] overflow-hidden"
        style={{ width: "100%", height: "60vmin" }}
      >
        <div
          id="image-track"
          ref={trackRef}
          data-mouse-down-at="0"
          data-prev-percentage="0"
          className="flex gap-[4vmin] absolute left-0 top-1/2"
          style={{
            transform: "translate(0%, -50%)",
            userSelect: "none",
          }}
        >
          <img
            className="image w-[40vmin] h-[56vmin] object-cover object-center drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
          <img
            className="image w-[40vmin] h-[56vmin] object-cover object-center drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            draggable="false"
          />
          <img
            className="image w-[40vmin] h-[56vmin] object-cover object-center drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
          <img
            className="image w-[40vmin] h-[56vmin] object-cover object-center drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
          <img
            className="image w-[40vmin] h-[56vmin] object-cover object-center drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
          <img
            className="image w-[40vmin] h-[56vmin] object-cover object-center drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
            draggable="false"
          />
          <img
            className="image w-[40vmin] h-[56vmin] object-cover object-center drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
            draggable="false"
          />
          <img
            className="image w-[40vmin] h-[56vmin] object-cover object-center drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
        </div>
      </div>
    </main>
  );
};

export default ProjectContainer;
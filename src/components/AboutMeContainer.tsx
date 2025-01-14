import Portrait from "../assets/Images/profile_picture.png";
import PencilPic1 from "../assets/Images/PencilPic1.png";
import PencilPic2 from "../assets/Images/PencilPic2.png";
import PenPic from "../assets/Images/PenPic.png";
import MuertaAndViv from '../assets/Images/MuertaAndVivPoster.png'

function AboutMeContainer() {
  return (
    <section className="mt-16 w-screen overflow-hidden flex flex-col items-center justify-center bg-[rgba(209,213,219,0.4)]">
      <h1 className="mt-4 text-2xl font-semibold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-64">
        <img 
          src={Portrait}
          alt="Portrait of Kyle"
          className="w-[90%] sm:w-[70%] md:w-[40%] lg:w-[36vmin] max-w-[36vmin] m-4 border-slate-900 border-2 drop-shadow-xl"
        />
        <p className="max-w-lg p-4 mr-2 text-center">
          Born and raised in Chester County Pennsylvania, I have always valued creative expression. With a traditional education in graphic design and architecture I love recognizing everyday beauty in design and nature. Outside of work, you can usually find me observing the world around me on nature walks, or at my drafting table turning those observations into artwork. I have a soft spot for history and reading. I am looking for in-person and hybrid roles in Chester County Pennsylvania, Wilmington Delaware and Philadelphia Pennsylvania
          <br />
          <br />
          Making art has always been a focus of mine. Feel free to view some of my work below.
        </p>
      </div>

      {/* Add padding for border-top consistency */}
      <div className="flex flex-col md:w-[95%] max-w-screen-xl items-center justify-center mt-8 pt-8 border-t-2 border-slate-300v md:flex-row border-slate-300 mx-6 px-4 sm:px-6">
        <img 
          src={PencilPic1}
          alt="Pencil drawing of a woman"
          className="w-48 m-4 mx-10 border-slate-900 border-2 drop-shadow-xl"
        />
        <img 
          src={PencilPic2}
          alt="Pencil Drawing of Kiwi and an Alligator standing on a glass plate"
          className="w-96 m-4 mx-10 border-slate-900 border-2 drop-shadow-xl"
        />
        <img 
          src={PenPic}
          alt="Pen drawing of a teenage boy and girl"
          className="w-48 m-4 mx-10 border-slate-900 border-2 drop-shadow-xl"
        />
        <img 
          src={MuertaAndViv}
          alt="Drawing of a girl surrounded by Latin American iconography"
          className="w-48 m-4 mx-10 border-slate-900 border-2 drop-shadow-xl"
        />
      </div>
    </section>
  );
}

export default AboutMeContainer;
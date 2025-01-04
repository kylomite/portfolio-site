import Portrait from "../assets/Images/profile_picture.png"
import PencilPic1 from "../assets/Images/PencilPic1.png"
import PencilPic2 from "../assets/Images/PencilPic2.png"
import PenPic from "../assets/Images/PenPic.png"
function AboutMeContainer() {
  return(
    <section className="mt-16 w-screen overflow-hidden flex flex-col items-center justify-center bg-[rgba(209,213,219,0.4)]">
      <h1 className="mt-4 text-2xl font-semibold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-32">
        <img 
          src={Portrait}
          alt="Portrait of Kyle"
          className="w-[90%] sm:w-[70%] md:w-[40%] lg:w-[36vmin] max-w-[36vmin] m-4 border-slate-600 border-2 drop-shadow-xl"
        />
        <p className="max-w-lg p-4">
          Born and raised in Chester County Pennsylvania, I have always valued creative expression. With a traditional education in graphic design and architecture I love recognizing everyday beauty in design and nature. Outside of work, you can usually find me observing the world around me on nature walks, or at my drafting table turning those observations into artwork. I have a soft spot for history and reading manga. Making art has always been a focus of mine, feel free to view some of my work below.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 pt-8 border-slate-300 border-t-2">
        <img 
            src={PencilPic1}
            alt="Pencil drawing of a woman"
            className="w-48 m-4 border-slate-600 border-2 drop-shadow-xl"
          />
        <img 
          src={PencilPic2}
          alt="Pencil Drawing of Kiwi and an Alligator standing on a glass plate"
          className="w-96 m-4 border-slate-600 border-2 drop-shadow-xl"
        />
        <img 
            src={PenPic}
            alt="Pen drawing of a teenage boy and girl"
            className="w-48 m-4 border-slate-600 border-2 drop-shadow-xl"
          />
      </div>
    </section>
  )
}

export default AboutMeContainer
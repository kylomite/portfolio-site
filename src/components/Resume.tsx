import Res from "../../public/Kyle Delaney Resume.pdf";

function Resume() {
  return (
    <div className="pt-32 sm:pt-20 md:pt-16 w-screen flex flex-col items-center">
      <div className="text-center p-6 w-full">
        <h1 className="text-4xl font-bold mb-4 mt-6">Resume</h1>
        <div className="w-full flex justify-center">
          <object
            data={Res}
            type="application/pdf"
            className="w-full max-w-4xl h-[80vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-contain"
          >
            <p>
              Your browser does not support embedded PDFs. You can{" "}
              <a href={Res} download>
                download the resume here
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </div>
  );
}

export default Resume;
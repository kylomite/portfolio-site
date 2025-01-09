import githubLogo from '../assets/Images/Octicons-mark-github.svg';
import linkedInLogo from '../assets/Images/linkedIn.svg';
import emailLogo from '../assets/Images/email.svg';


interface ContactContainerProp {
  isDarkMode: boolean;
}

function ContactContainer({ isDarkMode }: ContactContainerProp) {
  const svgColorFilter = isDarkMode ? 'invert(100%)' : 'invert(0%)';

  return (
    <section className="flex flex-col mt-16 bg-[rgba(209,213,219,0.4)] p-6">
      <h1 className="mt-4 text-2xl font-semibold text-center">Contact Me</h1>
      <div className="flex justify-center items-center space-x-6 mt-4">
        <a
          href="mailto:Khdelaney99@gmail.com"
          aria-label="Email"
          className="transition-transform transform hover:scale-125 cursor-pointer"
        >
          <img
            src={emailLogo}
            alt="Email logo"
            className="h-8 w-8"
            style={{ filter: svgColorFilter }}
          />
        </a>
        <a
          href="https://github.com/kylomite"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-transform transform hover:scale-125 cursor-pointer"
        >
          <img
            src={githubLogo}
            alt="GitHub logo"
            className="h-8 w-8"
            style={{ filter: svgColorFilter }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kylehamptondelaney/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-transform transform hover:scale-125 cursor-pointer"
        >
          <img
            src={linkedInLogo}
            alt="LinkedIn logo"
            className="h-8 w-8"
            style={{ filter: svgColorFilter }}
          />
        </a>
      </div>
    </section>
  );
}

export default ContactContainer;
function ContactContainer() {
  return (
    <section className="flex flex-col mt-16 bg-[rgba(209,213,219,0.4)] p-6">
      <h1 className="mt-4 text-2xl font-semibold text-center">Contact Me</h1>
      <div className="flex justify-center items-center space-x-6 mt-4">
        <a
          href="mailto:Khdelaney99@gmail.com"
        >
          Email
        </a>
        <a
          href="https://github.com/kylomite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/kylehamptondelaney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactContainer
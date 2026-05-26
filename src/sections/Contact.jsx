function Contact() {
    return (
      <section id="contact" className="py-24 bg-slate-950 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-cyan-400">
            Contact Me
          </h2>
  
          <p className="text-slate-300 mt-6 text-lg">
            Available for Full-time opportunities and Freelance projects.
          </p>
  
          {/* <div className="mt-10 space-y-4 text-lg">
            <p>Email: naman6865@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/naman-jain-661a8b30b</p>
            <p>GitHub: github.com/yourgithub</p>
          </div> */}
          {/* CONTACT LINKS */}
          <div className="mt-10 space-y-4 text-lg text-slate-300">

            {/* EMAIL */}
            <p>
              Email:{" "}
              <a
                href="mailto:naman6865@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                naman6865@gmail.com
              </a>
            </p>

            {/* LINKEDIN */}
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/naman-jain-661a8b30b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                View Profile
              </a>
            </p>

            {/* GITHUB */}
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/NamanJain0404"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                github.com/NamanJain0404
              </a>
            </p>

          </div>
        </div>
      </section>
    )
  }
  
export default Contact
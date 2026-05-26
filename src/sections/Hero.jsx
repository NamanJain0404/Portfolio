import { FaGithub, FaLinkedin } from "react-icons/fa"

function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-cyan-400">Naman Jain</span>
          </h1>
  
          <p className="mt-6 text-xl text-slate-300">
            Full Stack Developer specializing in React.js and Django.
            Building scalable and responsive modern web applications.
          </p>
  
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
            >
              View Projects
            </a>
            
            <a
              href="/Naman_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black duration-300"
            >
              View Resume
            </a>

            <a
              href="/Naman_Jain_Resume.pdf"
              download="Naman_Jain_Resume.pdf"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black duration-300"
            >
              Download Resume
            </a>
  
            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black duration-300"
            >
              Hire Me
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-10 text-3xl">

          <a
            href="https://github.com/NamanJain0404"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/naman-jain-661a8b30b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaLinkedin />
          </a>

        </div>
        </div>
      </section>
    )
  }
  
export default Hero

// import { motion } from "framer-motion"
// import { FaGithub, FaLinkedin } from "react-icons/fa"

// function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-slate-950 px-6 pt-24">

//       <div className="max-w-5xl text-center">

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-5xl md:text-7xl font-bold leading-tight"
//         >
//           Hi, I'm{" "}
//           <span className="text-cyan-400">
//             Naman Jain
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="mt-8 text-xl text-slate-300 leading-9"
//         >
//           Full Stack Developer specializing in React.js and Django.
//           Passionate about building scalable, responsive,
//           and user-focused web applications.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="mt-10 flex flex-wrap justify-center gap-5"
//         >

//           <a
//             href="#projects"
//             className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300"
//           >
//             View Projects
//           </a>

//           <a
//             href="/resume.pdf"
//             className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black duration-300"
//           >
//             Download Resume
//           </a>

//         </motion.div>

//         <div className="flex justify-center gap-6 mt-10 text-3xl">

//           <a
//             href="https://github.com/NamanJain0404"
//             target="_blank"
//             className="hover:text-cyan-400 duration-300"
//           >
//             <FaGithub />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/naman-jain-661a8b30b/"
//             target="_blank"
//             className="hover:text-cyan-400 duration-300"
//           >
//             <FaLinkedin />
//           </a>

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Hero
function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Naman Jain
          </h1>
          {/* <h1 className="text-2xl font-bold text-cyan-400">
            Naman Jain
          </h1> */}
  
          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
  
export default Navbar

// import { useState } from "react"
// import { HiMenu, HiX } from "react-icons/hi"

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         <h1 className="text-2xl font-bold text-cyan-400">
//           Naman Jain
//         </h1>

//         <ul className="hidden md:flex gap-8 text-white font-medium">
//           <li>
//             <a href="#about" className="hover:text-cyan-400 duration-300">
//               About
//             </a>
//           </li>

//           <li>
//             <a href="#skills" className="hover:text-cyan-400 duration-300">
//               Skills
//             </a>
//           </li>

//           <li>
//             <a href="#projects" className="hover:text-cyan-400 duration-300">
//               Projects
//             </a>
//           </li>

//           <li>
//             <a href="#contact" className="hover:text-cyan-400 duration-300">
//               Contact
//             </a>
//           </li>
//         </ul>

//         <button
//           className="md:hidden text-3xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-slate-900 px-6 py-6 space-y-4">
//           <a href="#about" className="block">About</a>
//           <a href="#skills" className="block">Skills</a>
//           <a href="#projects" className="block">Projects</a>
//           <a href="#contact" className="block">Contact</a>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar
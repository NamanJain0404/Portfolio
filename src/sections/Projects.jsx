import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import ogani1 from "../assets/projects/ogani/ogani1.png"
import ogani2 from "../assets/projects/ogani/ogani2.png"
import ogani3 from "../assets/projects/ogani/ogani3.png"
import ogani4 from "../assets/projects/ogani/ogani4.png"

import eshopper1 from "../assets/projects/eshopper/eshopper1.png"
import eshopper2 from "../assets/projects/eshopper/eshopper2.png"
import eshopper3 from "../assets/projects/eshopper/eshopper3.png"
import eshopper4 from "../assets/projects/eshopper/eshopper4.png"
import eshopper5 from "../assets/projects/eshopper/eshopper5.png"

import react1 from "../assets/projects/react/react1.png"
import react2 from "../assets/projects/react/react2.png"
import react3 from "../assets/projects/react/react3.png"
import react4 from "../assets/projects/react/react4.png"

import food from "../assets/projects/food.png"

import weather1 from "../assets/projects/weather/weather1.png"
import weather2 from "../assets/projects/weather/weather2.png"

// const projects = [
//     {
//       title: "E-Commerce Website",
//       description:
//         "Developed a full-stack e-commerce platform with authentication, cart system, checkout, and payment integration.",
//       tech: "React.js, Django, MySQL",
//     },
//     {
//       title: "Roster Management System",
//       description:
//         "Built a management dashboard with CRUD operations, Excel upload, SQL integration, and role-based access.",
//       tech: "Python, Django, SQL",
//     },
//     {
//       title: "Stream Scheduler",
//       description:
//         "Created a scheduling system for stream management with database integration and user management.",
//       tech: "Python, Django",
//     },
//   ]
const projects = [
  {
    title: "Ogani E-Commerce Website",

    images: [ogani1, ogani2, ogani3, ogani4],

    description:
      "Built a full-stack e-commerce website using Django with authentication, shopping cart, product management, and order functionality.",

    features: [
      "User Authentication",
      "Shopping Cart",
      "Order Management",
      "Responsive UI",
    ],

    tech: "Django, Python, HTML, CSS, Bootstrap, SQLite",

    github: "https://github.com/yourgithub",
    live: "https://yourliveproject.com",
  },

  {
    title: "EShopper Web Application",

    images: [eshopper1, eshopper2, eshopper3, eshopper4, eshopper5],

    description:
      "Developed a complete e-commerce application with Razorpay integration, checkout system, billing and shipping management, and dynamic product tracking.",

    features: [
      "Razorpay Integration",
      "Checkout System",
      "Billing & Shipping",
      "Product Tracking",
    ],

    tech: "Django, JavaScript, Bootstrap, SQLite",

    github: "https://github.com/yourgithub",
    live: "https://yourliveproject.com",
  },

  {
    title: "React Learning Application",

    images: [react1, react2, react3, react4],

    description:
      "Created a React.js application using Vite with reusable components and modern frontend architecture.",

    features: [
      "Reusable Components",
      "React Hooks",
      "Structured Architecture",
      "GitHub Version Control",
    ],

    tech: "React.js, JavaScript, Vite",

    github: "https://github.com/yourgithub",
    live: "https://yourliveproject.com",
  },

  {
    title: "BakeWhatYouHave Food App",

    images: [food],

    description:
      "Developed a responsive React-based food application with reusable UI components and modern page structure.",

    features: [
      "Responsive Design",
      "React Components",
      "Modern UI",
      "Deployment Setup",
    ],

    tech: "React.js, CSS, JavaScript",

    github: "https://github.com/yourgithub",
    live: "https://yourliveproject.com",
  },

  {
    title: "Weather Forecast App",

    images: [weather1, weather2],

    description:
      "Developed a responsive web application that provides real-time weather updates using external API integration with a clean and user-friendly interface.",

    features: [
      "Real-time Weather Updates",
      "City-based Search",
      "Weather Details (Temperature, Humidity, Wind Speed)",
      "Responsive UI",
    ],

    tech: "Python, Django, HTML, CSS, Bootstrap, OpenWeatherMap API",
  },
]
  
  function Projects() {
    return (
      <section id="projects" className="py-24 bg-slate-900 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cyan-400">
            Projects
          </h2>
  
          {/* <div className="grid md:grid-cols-2 gap-8 mt-14"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {projects.map((project, index) => (
              <div
                key={index}
                // className="bg-slate-800 rounded-2xl p-6 hover:-translate-y-2 duration-300"
                className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300 shadow-xl"
              >
                {/* <h3 className="text-2xl font-bold text-white"> */}
                <h3 className="text-xl md:text-2xl font-bold text-white break-words">
                  {project.title}
                </h3>
  
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="w-full rounded-2xl mt-4"
                >
                  {project.images?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={project.title}
                        className="w-full h-auto max-h-[400px] object-contain rounded-2xl bg-white"
                        // className="w-full h-52 md:h-64 object-contain rounded-2xl bg-white"
                        // className="w-full h-65 object-cover rounded-2x1"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <p className="text-slate-300 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="mt-6">

                  <h4 className="text-cyan-400 font-semibold mb-3">
                    Key Features
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-slate-700 px-4 py-2 rounded-xl text-sm"
                      >
                        {feature}
                      </span>
                    ))}

                  </div>

                </div>

                {/* <p className="mt-4 text-cyan-400 font-semibold"> */}
                {/* <p className="mt-6 text-cyan-400 font-medium leading-7"> */}
                <p className="mt-6 text-cyan-400 font-medium leading-7 break-words text-sm md:text-base">
                  {project.tech}
                </p>
  
                {/* <div className="mt-6 flex gap-4">
                  <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold">
                    Live Demo
                  </button>
  
                  <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold">
                    GitHub
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
export default Projects
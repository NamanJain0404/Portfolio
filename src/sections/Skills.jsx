const skills = [
    "React.js",
    "JavaScript",
    "Python",
    "Django",
    "REST API",
    "MySQL",
    "SQL",
    "SQLite",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "OOP",
    "Git/GitHub",
    "ML (Basic)",
  ]
  
  function Skills() {
    return (
      <section id="skills" className="py-24 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cyan-400">
            Skills
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl py-6 text-center text-lg font-semibold hover:scale-105 duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
export default Skills
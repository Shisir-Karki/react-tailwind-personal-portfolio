const experiences = [
  {
    period: "2026 — Present",
    role: "BSc. CSIT — Final Semester",
    company: "Tribhuvan University",
    description:
      "Final-semester Computer Science student building practical experience in modern web development through academic and personal projects.",
    technologies: ["JavaScript", "React", "TypeScript", "SQL"],
    current: true,
  },
  {
    period: "2026",
    role: "Final Year Project",
    company: "Collaborative Whiteboard System",
    description:
      "Contributed to the development and documentation of a collaborative whiteboard platform designed for real-time multi-user editing and role-based board management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"],
    current: false,
  },
  {
    period: "2025-2026",
    role: "React & Frontend Development",
    company: "Personal Development",
    description:
      "Expanded from vanilla JavaScript into React development, building component-based interfaces, working with state and effects, routing, API integration, and responsive UI design.",
    technologies: ["React", "JavaScript", "Vite", "React Router"],
    current: false,
  },
];

export const Experience = () => {
  return(
    <section id="experience" className="py-32 relative overflow-hidden">
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" 
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Development Journey
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Learning, building, 
            <span className="font-serif italic font-normal text-white">
              {" "}
              and  growing.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my journey as a computer science student, from learning the fundamentals of web development to building full-stack applications and real-world projects.
          </p>
        </div>

        {/* TimeLine */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)" />

          {/* Experience Items*/}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {experience.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div 
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0 
                      ? "md:pr-16 md:text-right" 
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}>
                    <span className="text-sm text-primary font-medium">
                      {experience.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {experience.role}
                    </h3>
                    <p className="text-muted-foreground">
                      {experience.company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {experience.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${
                      index % 2 === 0
                        ? "md:justify-end"
                        : ""
                      }`}>
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
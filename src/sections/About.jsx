import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: 
      "Writing maintainable, scalable code while following good development practices. "
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building responsive web experiences with a focus on usability and performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with others, sharing ideas, and contributing to team projects.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring new technologies and continuously improving my skills through hands-on projects.",
  },
];

export const About = () => {
  return(
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-8 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a BSc.CSIT student and aspiring frontend developer with a strong
                interest in building modern, responsive, and user-friendly web
                applications. My journey into web development started with learning
                HTML, CSS, and JavaScript, and has grown into working with React and
                Tailwind CSS.
              </p>

              <p>
                I enjoy turning ideas into practical projects and using what I learn to
                build real applications. I've worked on projects ranging from an
                e-commerce application to a collaborative academic project, and I'm
                currently expanding my skills in React, TypeScript, and modern web
                development.
              </p>

              <p>
                When I'm not coding, I enjoy exploring new technologies, working on personal projects, and finding better ways to solve problems.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build web experiences that are    simple, responsive, and enjoyable to use while continuously learning and growing as a developer."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{animationDelay: `${(index + 1) * 100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div> 
                <h3 className="text-large font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </section>
  );
}
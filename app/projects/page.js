import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Facility Damage Reporting System",
    description: "System to support reporting facility damage at Polinema. Features front-end and back-end integration with a robust database.",
    tech: ["Full-Stack", "Web Development"],
    github: "https://github.com/alvnz11",
    live: null,
    emoji: "🏢",
  },
  {
    title: "Student Regulation Management",
    description: "System to manage student regulations at Polinema with a well-designed database structure.",
    tech: ["Full-Stack", "Web Development"],
    github: "https://github.com/alvnz11",
    live: null,
    emoji: "⚖️",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS, showcasing my skills and projects.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    github: "https://github.com/alvnz11",
    live: null,
    emoji: "🌐",
  },
];

export default function ProjectsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      {/* Page title */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#212529] mb-2">
          Projects
        </h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">Things I&apos;ve built</p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Card header */}
            <div className="bg-[#212529] p-4 flex items-center gap-3">
              <span className="text-2xl">{project.emoji}</span>
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-md bg-gray-200 text-gray-700 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-[#212529] hover:text-gray-500 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-[#212529] hover:text-gray-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

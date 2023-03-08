import type { Project } from "../../data/projects";
import TechnologyBadge from "./TechnologyBadge";

export default function ProjectEntry({ project }: { project: Project }) {
  return (
    <div className="p-6 max-w-full rounded-lg h-52 border shadow-md bg-gray-800 border-gray-500 hover:border-gray-300 hover:scale-[1.05] transition duration-100 group flex flex-col justify-between">
      <div>
        <div className="flex flex-row items-center justify-between">
          <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
            {project.liveLink ? (
              <a href={project.liveLink} className="hover:underline">
                {project.title}
              </a>
            ) : (
              <span>{project.title}</span>
            )}
          </h3>
          <div className="flex items-center gap-1">
            <a href={project.githubLink} aria-label="Github">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 hover:text-blue-200"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>
        <p className="mb-3 font-normal text-gray-300 text-sm">
          {project.description}
        </p>
      </div>
      <div>
        <div className="hidden md:block md:group-hover:hidden">
          <TechnologyBadge
            technology={project.technologies[0]}
            size="text-xs"
          />
        </div>
        <div className="flex md:hidden md:group-hover:flex flex-wrap gap-x-3">
          {project.technologies.map((technology) => {
            return (
              <div key={technology.name}>
                <TechnologyBadge technology={technology} size="text-xs" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

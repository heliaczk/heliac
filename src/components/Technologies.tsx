import { frameworks, languages, tools } from "../../data/technologies";
import FadeUpContainer from "./FadeUpContainer";
import TechnologyBadge from "./TechnologyBadge";

export default function Technologies(): JSX.Element {
  return (
    <div className="flex flex-col justify-start gap-4 w-full px-2 py-4">
      <FadeUpContainer delay={0.01}>
        <div>
          <h3 className="mb-1 text-md text-gray-200">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((language) => {
              return (
                <TechnologyBadge
                  technology={{ type: "language", name: language }}
                  key={language}
                />
              );
            })}
          </div>
        </div>
      </FadeUpContainer>
      <FadeUpContainer delay={0.01}>
        <div>
          <h3 className="mb-1 text-md text-gray-200">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework) => {
              return (
                <TechnologyBadge
                  technology={{ type: "framework", name: framework }}
                  key={framework}
                />
              );
            })}
          </div>
        </div>
      </FadeUpContainer>
      <FadeUpContainer delay={0.01}>
        <div>
          <h3 className="mb-1 text-md text-gray-200">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => {
              return (
                <TechnologyBadge
                  technology={{ type: "tool", name: tool }}
                  key={tool}
                />
              );
            })}
          </div>
        </div>
      </FadeUpContainer>
    </div>
  );
}

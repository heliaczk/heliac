import type { Technology } from "../../data/projects";

export interface TechnologyBadgeProps {
  technology: Technology;
  size?: string;
}

export default function TechnologyBadge({
  technology,
  size,
}: TechnologyBadgeProps): JSX.Element {
  const backgroundClass =
    technology.type === "language"
      ? "border-blue-400"
      : technology.type === "framework"
      ? "border-purple-400"
      : "border-red-400";

  const textClass = "text-neutral-300";
  const sizeClass = size ?? "text-xs";

  return (
    <span
      className={`${sizeClass} border font-semibold px-2.5 py-0.5 rounded ${backgroundClass} ${textClass} whitespace-nowrap`}
    >
      {technology.name}
    </span>
  );
}

/**
 * Instrumented Editorial design system — sanitized project visuals combine supplied artwork with abstract process schematics.
 */
import type { Project } from "@/data/portfolio";

function Node({ children, active = false }: { children: string; active?: boolean }) {
  return <span className={`schematic-node ${active ? "schematic-node--active" : ""}`}>{children}</span>;
}

export default function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.image) {
    return <div className={`project-art ${compact ? "project-art--compact" : ""}`}><img src={project.image} alt={`Abstract technical visual for ${project.title}`} loading={compact ? "lazy" : "eager"} /><span className="tracking-corners" aria-hidden="true" /><span className="project-art__tag">SYSTEM / {project.number}</span></div>;
  }

  const renders = {
    human: <div className="human-map"><div className="human-map__source"><i /><span>CCTV / Input</span></div><div className="human-map__route"><Node>YOLOv8</Node><i>↓</i><Node>HUMAN?</Node><i>↓</i><Node active>ALERT</Node></div><div className="human-map__decision"><b>YES</b><span>track / notify</span><b>NO</b><span>discard</span></div></div>,
    focus: <div className="focus-map"><div className="focus-map__frame"><span className="focus-map__person" /><span className="focus-map__person" /><span className="focus-map__person" /></div><div className="focus-map__path"><Node>DETECT</Node><i>→</i><Node>TRACK</Node><i>→</i><Node active>INSIGHT</Node></div></div>,
    mlops: <div className="mlops-map"><div><Node>DATA</Node><i>→</i><Node>DVC</Node><i>→</i><Node>TRAIN</Node></div><div><Node>EVALUATE</Node><i>→</i><Node>MLFLOW</Node><i>→</i><Node active>DOCKER</Node></div><span className="mlops-map__rail" /></div>,
  };
  return <div className={`project-schematic project-schematic--${project.visual} ${compact ? "project-schematic--compact" : ""}`}><span className="tracking-corners" aria-hidden="true" />{renders[project.visual as "human" | "focus" | "mlops"]}<span className="project-art__tag">CONCEPT / {project.number}</span></div>;
}

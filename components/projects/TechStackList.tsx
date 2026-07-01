export function TechStackList({ techStack }: { techStack: string[] }) {
  return <div className="project-detail-tech-list">{techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>;
}

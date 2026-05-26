import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsPage({ portfolio }) {
  return (
    <div className="page">
      <section className="section">
        <SectionHeader
          eyebrow="Project documentation"
          title="Systems built with a backend-first mindset"
          description="Each project is presented as an engineering problem: what needed to work, how the system was structured, where the friction was, and what changed after optimization."
        />

        <div className="project-stack">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}


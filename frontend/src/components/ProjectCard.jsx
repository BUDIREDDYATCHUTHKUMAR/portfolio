export function ProjectCard({ project, compact = false }) {
  return (
    <article className={compact ? "card project-card compact" : "card project-card"}>
      <div className="card-header">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>{project.name}</h3>
        </div>
        <span className="status-chip">{project.status}</span>
      </div>

      <p className="project-summary">{project.summary}</p>

      {!compact ? (
        <div className="project-doc">
          <div className="project-block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="project-block">
            <h4>System design</h4>
            <p>{project.design}</p>
          </div>
          <div className="project-block">
            <h4>Stack</h4>
            <div className="chip-list">
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="project-block">
            <h4>Key challenges</h4>
            <ul className="detail-list">
              {project.challenges.map((challenge) => (
                <li key={challenge.title}>
                  <strong>{challenge.title}:</strong> {challenge.solution}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-block">
            <h4>Performance and impact</h4>
            <ul className="detail-list">
              {project.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="chip-list">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="card-actions">
        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-link">
          View repository
        </a>
      </div>
    </article>
  );
}


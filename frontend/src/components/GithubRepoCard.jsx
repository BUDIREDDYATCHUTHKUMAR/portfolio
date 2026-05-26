function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}

export function GithubRepoCard({ repo }) {
  return (
    <article className="card repo-card">
      <div className="card-header">
        <div>
          <h3>{repo.name}</h3>
          <p className="muted">{repo.language}</p>
        </div>
        <span className="metric-badge">{`${repo.stars} stars`}</span>
      </div>

      <p className="repo-description">{repo.description}</p>

      <div className="repo-meta">
        <span>Updated {formatDate(repo.updatedAt)}</span>
        <a href={repo.url} target="_blank" rel="noreferrer" className="text-link">
          Open on GitHub
        </a>
      </div>
    </article>
  );
}

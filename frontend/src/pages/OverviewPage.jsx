import { Link } from "react-router-dom";
import { GithubRepoCard } from "../components/GithubRepoCard";
import { ProjectCard } from "../components/ProjectCard";
import { ProfilePhotoCard } from "../components/ProfilePhotoCard";
import { SectionHeader } from "../components/SectionHeader";

export function OverviewPage({ portfolio, github }) {
  const { profile, featuredProjects, skills, buildProcess } = portfolio;

  return (
    <div className="page">
      <section className="hero-grid">
        <div className="intro-stack">
          <div className="card intro-card">
            <p className="eyebrow">Developer portfolio</p>
            <h1>{profile.name}</h1>
            <p className="role-line">{profile.roleLine}</p>
            <p className="lead">{profile.summary}</p>

            <div className="intro-facts">
              <div>
                <span className="fact-label">Primary work</span>
                <span className="fact-value">Backend systems, REST APIs, database-backed applications</span>
              </div>
              <div>
                <span className="fact-label">Strengths</span>
                <span className="fact-value">Python, Django, PostgreSQL, retrieval-based AI features</span>
              </div>
              <div>
                <span className="fact-label">Work style</span>
                <span className="fact-value">Structured implementation, careful debugging, practical optimization</span>
              </div>
            </div>

            <div className="cta-row">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="button">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="button button-secondary">
                LinkedIn
              </a>
              <Link to="/projects" className="button button-secondary">
                Project documentation
              </Link>
            </div>
          </div>

          <div className="card recruiter-card">
            <p className="eyebrow">What recruiters should see</p>
            <div className="recruiter-points">
              <p>Comfortable owning backend-heavy features from schema design to API delivery.</p>
              <p>Can work across traditional backend systems and newer AI-driven product features.</p>
              <p>Builds with maintainability in mind, not just short-term demos.</p>
            </div>
          </div>

          <div className="grid two-column metric-grid">
            {profile.highlights.map((item) => (
              <div key={item.label} className="card stat-card">
                <p className="eyebrow">{item.label}</p>
                <p className="stat-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <ProfilePhotoCard name={profile.name} title="Software Engineer" />
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects with system depth"
          description="A snapshot of backend and AI systems built around data flow, reliability, and measurable improvement."
          actions={
            <Link to="/projects" className="text-link">
              View all projects
            </Link>
          }
        />

        <div className="grid two-column">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="card">
          <SectionHeader
            eyebrow="How I build"
            title="Working style"
            description="The process I use to keep systems understandable after they leave local development."
          />

          <div className="timeline">
            {buildProcess.map((step, index) => (
              <div key={step.stage} className="timeline-item">
                <span className="timeline-index">0{index + 1}</span>
                <div>
                  <h3>{step.stage}</h3>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <SectionHeader
            eyebrow="Capabilities"
            title="Skills by system layer"
            description="Grouped the way I actually use them in projects."
          />

          <div className="skill-groups">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <h3>{group}</h3>
                <div className="chip-list">
                  {items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="GitHub"
          title="Repository activity"
          description={
            github?.source === "fallback"
              ? "Showing curated repository cards because the live GitHub API is unavailable in the current environment."
              : "Live repository data fetched from GitHub through the backend API."
          }
        />

        <div className="grid three-column">
          {github?.repos?.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card contact-card">
          <SectionHeader
            eyebrow="Contact"
            title="Open to backend and AI engineering roles"
            description="If you want to discuss systems, APIs, AI retrieval workflows, or Python backend work, reach out directly."
          />

          <div className="contact-grid">
            <a href={`mailto:${profile.email}`} className="contact-link">
              {profile.email}
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="contact-link">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

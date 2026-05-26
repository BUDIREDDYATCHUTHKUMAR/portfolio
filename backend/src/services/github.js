const DEFAULT_USERNAME = process.env.GITHUB_USERNAME || "BUDIREDDYATCHUTHKUMAR";

const fallbackRepos = [
  {
    id: "urbanhome-fallback",
    name: "urbanhome",
    full_name: "BUDIREDDYATCHUTHKUMAR/urbanhome",
    description: "Django backend system for property workflows and API operations.",
    stargazers_count: 0,
    html_url: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    homepage: "",
    language: "Python",
    updated_at: "2026-03-01T00:00:00Z"
  },
  {
    id: "rag-fallback",
    name: "ai-rag-assistant",
    full_name: "BUDIREDDYATCHUTHKUMAR/ai-rag-assistant",
    description: "Retrieval-augmented assistant with document indexing and grounded responses.",
    stargazers_count: 0,
    html_url: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    homepage: "",
    language: "Python",
    updated_at: "2026-02-15T00:00:00Z"
  },
  {
    id: "trading-fallback",
    name: "trading-bot",
    full_name: "BUDIREDDYATCHUTHKUMAR/trading-bot",
    description: "Automated trading prototype with strategy rules and execution safeguards.",
    stargazers_count: 0,
    html_url: "https://github.com/BUDIREDDYATCHUTHKUMAR",
    homepage: "",
    language: "Python",
    updated_at: "2026-01-20T00:00:00Z"
  }
];

function mapRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description || "No repository description available.",
    stars: repo.stargazers_count,
    url: repo.html_url,
    homepage: repo.homepage,
    language: repo.language || "Unknown",
    updatedAt: repo.updated_at
  };
}

export async function fetchGithubRepos() {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "atchuth-portfolio"
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${DEFAULT_USERNAME}/repos?sort=updated&per_page=6`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const repos = await response.json();
    return {
      source: "github",
      repos: repos
        .filter((repo) => !repo.fork)
        .slice(0, 6)
        .map(mapRepo)
    };
  } catch (error) {
    return {
      source: "fallback",
      repos: fallbackRepos.map(mapRepo),
      error: error.message
    };
  }
}


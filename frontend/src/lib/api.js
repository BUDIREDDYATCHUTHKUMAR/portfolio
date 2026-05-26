const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

async function request(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export function getPortfolio() {
  return request("/api/portfolio");
}

export function getGithubRepos() {
  return request("/api/github/repos");
}

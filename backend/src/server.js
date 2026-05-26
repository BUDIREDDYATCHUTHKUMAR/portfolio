import express from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildProcess,
  featuredProjectSlugs,
  profile,
  projects,
  skills
} from "./data/portfolio.js";
import { fetchGithubRepos } from "./services/github.js";

const app = express();
const port = process.env.PORT || 4000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendDistPath = path.resolve(__dirname, "../../frontend/dist");
const hasFrontendBuild = fs.existsSync(path.join(frontendDistPath, "index.html"));

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/portfolio", (_req, res) => {
  res.json({
    profile,
    skills,
    buildProcess,
    projects,
    featuredProjects: projects.filter((project) =>
      featuredProjectSlugs.includes(project.slug)
    )
  });
});

app.get("/api/projects", (_req, res) => {
  res.json({ projects });
});

app.get("/api/github/repos", async (_req, res) => {
  const data = await fetchGithubRepos();
  res.json(data);
});

if (hasFrontendBuild) {
  app.use(express.static(frontendDistPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Portfolio backend running on port ${port}`);
});

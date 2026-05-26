import { Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { OverviewPage } from "./pages/OverviewPage";
import { ProjectsPage } from "./pages/ProjectsPage";

function LoadingState() {
  return (
    <div className="state-screen">
      <p className="eyebrow">Loading</p>
      <h1>Fetching portfolio data</h1>
      <p className="lead">Booting the portfolio dashboard and API-backed project documentation.</p>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div className="state-screen">
      <p className="eyebrow">Error</p>
      <h1>Unable to load portfolio data</h1>
      <p className="lead">{message}</p>
    </div>
  );
}

export default function App() {
  const { loading, error, portfolio, github } = usePortfolioData();

  if (loading) {
    return <LoadingState />;
  }

  if (error || !portfolio) {
    return <ErrorState message={error || "Unknown error"} />;
  }

  return (
    <Shell>
      <Routes>
        <Route path="/" element={<OverviewPage portfolio={portfolio} github={github} />} />
        <Route path="/projects" element={<ProjectsPage portfolio={portfolio} />} />
      </Routes>
    </Shell>
  );
}


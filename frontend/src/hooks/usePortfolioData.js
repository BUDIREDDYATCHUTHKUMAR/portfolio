import { useEffect, useState } from "react";
import { getGithubRepos, getPortfolio } from "../lib/api";

export function usePortfolioData() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    portfolio: null,
    github: null
  });

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const [portfolio, github] = await Promise.all([
          getPortfolio(),
          getGithubRepos()
        ]);

        if (!active) {
          return;
        }

        setState({
          loading: false,
          error: null,
          portfolio,
          github
        });
      } catch (error) {
        if (!active) {
          return;
        }

        setState({
          loading: false,
          error: error.message,
          portfolio: null,
          github: null
        });
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []);

  return state;
}


export const store = {
  loading: {
    project: "neo-project",
    fetch: "repo",
  },
  projects: ["neo-project", "neo-ngd", "CityOfZion", "NewEconoLab", "NeoResearch"],
  project: "",
  repos: {},
  token: undefined,
  repo: undefined,
  GITHUB_API: "https://api.github.com",
  TOKEN_API: "https://wt-eb8e8a5788a32c0054649520e12aca04-0.sandbox.auth0-extend.com/nps-gh-tkn",
};

export const staticKeys = ["GITHUB_API", "TOKEN_API", "projects"];

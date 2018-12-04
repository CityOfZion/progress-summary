import { CallStatus } from "react-ion-store/lib/enums";

import Loading, { LoadingType } from "./types/loader";

const loading: Loading = {
  status: CallStatus.LOADING,
  type: LoadingType.TOKEN,
};

export const store = {
  loading,
  projects: ["neo-project", "neo-ngd", "CityOfZion", "NewEconoLab", "NeoResearch"],
  projectDescriptions: [
    "Official Github Org for the NEO Smart Economy",
    "NEO Global Development projects",
    "The international NEO developer community",
    "The Chinese NEO community",
    "Research group for the NEO Blockchain Ecosystem",
  ],
  project: undefined,
  repos: {},
  commits: {},
  token: undefined,
  repo: undefined,
  GITHUB_API: "https://api.github.com",
  TOKEN_API: "https://wt-eb8e8a5788a32c0054649520e12aca04-0.sandbox.auth0-extend.com/nps-gh-tkn",
};

export const staticKeys = ["GITHUB_API", "TOKEN_API", "projects", "projectDescriptions"];

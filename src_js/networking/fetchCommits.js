import { get } from "axios";

import { GITHUB_API, COMMITS, REPOS, SLASH, ACCESS_TOKEN } from "./consts";

const getKeys = repos => Object.keys(repos);

const fetchCommits = async (project, repo, token) =>
  get(GITHUB_API + REPOS + SLASH + project + SLASH + repo + COMMITS + ACCESS_TOKEN(token));

const delegateAsyncFetch = (project, rawRepos, token) => {
  const repos = rawRepos;
  getKeys(repos).forEach(repo => {
    repos[repo].commits = fetchCommits(project, repo, token);
  });
  return repos;
};

const persistFetch = async repo => {
  try {
    const { data } = await repo.commits;
    return { commits: data };
  } catch (e) {
    return { commits: [] };
  }
};

export default async store => {
  const token = store.token.get();
  const project = store.project.get();
  store.loading.set({
    project,
    fetch: "commit",
  });
  const repos = await delegateAsyncFetch(project, store.repos.get(), token);
  // const repoKeys = getKeys(repos);
  // await repoKeys.forEach(async repo => {
  //   await persistFetch(repos[repo]);
  // });
  for (const repo in repos) {
    repos[repo] = await persistFetch(repos[repo]);
  }

  store.repos.set(repos);
};

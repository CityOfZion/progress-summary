import { get } from "axios";

import { GITHUB_API, COMMITS, REPOS, SLASH, ACCESS_TOKEN } from "./consts";

const getKeys = repos => Object.keys(repos);

const fetchCommits = async (project, repo) =>
  get(
    GITHUB_API + REPOS + SLASH + project + SLASH + repo + COMMITS + ACCESS_TOKEN
  );

const delegateAsyncFetch = (project, rawRepos) => {
  const repos = rawRepos;
  getKeys(repos).forEach(repo => {
    repos[repo].commits = fetchCommits(project, repo);
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
  const project = store.project.get();
  store.loading.set({
    project,
    fetch: "commit"
  });
  const repos = await delegateAsyncFetch(project, store.repos.get());
  // const repoKeys = getKeys(repos);
  // await repoKeys.forEach(async repo => {
  //   await persistFetch(repos[repo]);
  // });
  for (const repo in repos) {
    repos[repo] = await persistFetch(repos[repo]);
  }

  store.repos.set(repos);
};

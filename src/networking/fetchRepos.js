import { get } from "axios";

import { GITHUB_API, ORGS, REPOS, SLASH, ACCESS_TOKEN } from "./consts";

const arrayAsKeys = data => {
  const result = {};
  data.forEach(repo => {
    result[repo] = {
      repo,
      commits: [],
      page: 1,
      last: 1
    };
  });
  return result;
};

const processRepos = repos => arrayAsKeys(repos.map(r => r.name));

const fetchRepos = project =>
  get(GITHUB_API + ORGS + SLASH + project + REPOS + ACCESS_TOKEN);

export default async store => {
  const project = store.project.get();
  store.repos.set({});
  store.loading.set({
    project,
    fetch: "repo"
  });
  const { data } = await fetchRepos(project);
  store.repos.set(processRepos(data));
};

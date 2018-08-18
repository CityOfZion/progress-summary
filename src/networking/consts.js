import accessToken from "./accessToken";
import parseToken from "./parseToken";

export const GITHUB_API = "https://api.github.com";
export const ORGS = "/orgs";
export const REPOS = "/repos";
export const COMMITS = "/commits";
export const PAGE = "&page=";
export const SLASH = "/";
export const ACCESS_TOKEN = `?access_token=${parseToken(accessToken)}`;

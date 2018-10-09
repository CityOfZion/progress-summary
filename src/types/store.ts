interface Store {
  get: Function;
  set: Function;
  call: Function;
  loading: any;
  project: string;
  repos: { [key: string]: any };
  token?: string;
  repo?: string;
  GITHUB_API: string;
  TOKEN_API: string;
}

export default Store;

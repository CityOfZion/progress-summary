export interface RepoData {
  pages: LinkData;
  data: any[];
  loading?: boolean;
}

export interface LinkData {
  next?: number;
  last?: number;
  prev?: number;
  first?: number;
  done?: boolean;
}

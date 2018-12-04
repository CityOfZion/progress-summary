// Logic
import * as React from "react";

// Components
import Commits from "./modules/Commits";

// Typings
interface RepoProps {}

// TODO: expand with info, put commits in tabs with issues/prs/...
const Repo: React.FunctionComponent<RepoProps> = () => <Commits />;

export default Repo;

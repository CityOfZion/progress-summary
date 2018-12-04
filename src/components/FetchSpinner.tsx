// Logic
import * as React from "react";
import { compose, ComponentEnhancer } from "recompose";
import { withStore, withTake, enums } from "react-ion-store";

// Presentation
import Spin from "antd/lib/spin";

import { sheet } from "../styles";

// Assets
const styles = sheet({
  tokenError: {
    ta: "center",
    bgc: "white",
    mar: "0 32px",
    pad: "64px 32px",
  },
});

// Types
import Loading, { LoadingType } from "../types/loader";

interface TokenFetcherProps {
  children: React.ReactElement<any>;
  project?: string;
  repo?: string;
  loading: Loading;
}

const {
  CallStatus: { LOADING, READY, FAILED },
} = enums;

const TokenFetcher: React.FunctionComponent<TokenFetcherProps> = ({ children, loading, project, repo }) => {
  switch (loading.status) {
    case LOADING:
      let tip;
      switch (loading.type) {
        case LoadingType.TOKEN:
          tip = "Initialising Github API...";
          break;
        case LoadingType.REPOS:
          tip = `Loading all repos in org ${project}`;
          break;
        case LoadingType.COMMITS:
          tip = `Loading all commits for repo ${project}/${repo}`;
          break;
      }

      return <Spin tip={tip}>{children}</Spin>;
    case READY:
      return children;
    case FAILED:
    default:
      return <div className={styles.tokenError}>{loading.message}</div>;
  }
};

export default (compose(
  withStore,
  withTake(["loading", "project", "repo"])
) as ComponentEnhancer<TokenFetcherProps, {}>)(TokenFetcher);

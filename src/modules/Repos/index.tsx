// Logic
import * as React from "react";
import { compose } from "recompose";
import { withStore, withCall, withTake, withStatus, enums } from "react-ion-store";

// Presentation
import List from "antd/lib/list";

// Components
import LoadMore from "../../components/LoadMore";
import renderRepoListItem from "./components/renderRepoListItem";
import withLoadMore from "./components/withLoadMore";
import withUrl from "./components/withUrl";
import withSet from "./components/withSet";

// Assets
import loadingArray from "../../utils/loadingArray";

const { CallStatus } = enums;

// Types
import { RepoData } from "../../types/ghdata";
import paginationReducer from "../../utils/paginationReducer";

type RepoFetcherProps = {
  repos: RepoData;
  onLoadMore: any;
  setRepo: Function;
  __ion_status: any;
};

const callKey = "repos";

const Repos: React.FunctionComponent<RepoFetcherProps> = ({
  setRepo,
  onLoadMore,
  repos,
  __ion_status: { repos: repoStatus },
}) => (
  <List
    itemLayout="vertical"
    dataSource={repoStatus !== CallStatus.READY ? [...repos.data, ...loadingArray] : repos.data}
    loadMore={repoStatus === CallStatus.READY && !repos.pages.done ? <LoadMore onLoadMore={onLoadMore} /> : null}
    renderItem={renderRepoListItem(setRepo)}
  />
);

export default compose(
  withStore,
  withStatus,
  withUrl,
  Component => props =>
    withCall(callKey, {
      config: {
        url: props.url,
      },
      reducer: paginationReducer(props, callKey),
    })(Component)(props),
  withLoadMore,
  withSet,
  withTake(callKey)
)(Repos);

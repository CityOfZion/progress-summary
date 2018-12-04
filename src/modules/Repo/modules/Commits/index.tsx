// Logic
import * as React from "react";
import { compose } from "recompose";
import { withStore, withCall, withTake, withStatus, enums } from "react-ion-store";

// Presentation
import List from "antd/lib/list";

// Components
import renderCommitListItem from "./components/renderCommitListItem";
import withLoadMore from "./components/withLoadMore";
import withUrl from "./components/withUrl";
import LoadMore from "../../../../components/LoadMore";

// Assets
import loadingArray from "../../../../utils/loadingArray";
import paginationReducer from "../../../../utils/paginationReducer";

const { CallStatus } = enums;

// Types
import { RepoData } from "../../../../types/ghdata";

type CommitsFetcherProps = {
  commits: RepoData;
  onLoadMore: any;
  __ion_status: any;
};

const callKey = "commits";

const Commits: React.FunctionComponent<CommitsFetcherProps> = ({
  onLoadMore,
  commits,
  __ion_status: { commits: repoStatus },
}) => (
  <List
    itemLayout="vertical"
    dataSource={repoStatus !== CallStatus.READY ? [...commits.data, ...loadingArray] : commits.data}
    loadMore={repoStatus === CallStatus.READY && !commits.pages.done ? <LoadMore onLoadMore={onLoadMore} /> : null}
    renderItem={renderCommitListItem}
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
  withTake(callKey)
)(Commits);

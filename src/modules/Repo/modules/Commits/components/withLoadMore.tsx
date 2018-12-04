//Logic
import * as React from "react";

// Assets
import { CallStatus } from "react-ion-store/lib/enums";

const withLoadMore = (Component: any) => (props: any) => {
  const loadMore = () => props.store.call({ commits: props.store.commits.set("status", CallStatus.INITIAL) });
  return <Component {...props} onLoadMore={loadMore} />;
};

export default withLoadMore;

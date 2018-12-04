// Logic
import * as React from "react";
import { compose, ComponentEnhancer } from "recompose";
import { withStore, withCall, withStatus, enums } from "react-ion-store";

// Components
import setIfDone from "./setIfDone";

// Assets
const {
  CallStatus: { LOADING, READY, FAILED },
} = enums;

// Types
import Loading, { LoadingType } from "../types/loader";

interface TokenFetcherProps {
  __ion_status: {
    [key: string]: enums.CallStatus;
  };
  store: any;
}

const callKey = "token";

const TokenFetcher: React.FunctionComponent<TokenFetcherProps> = props => {
  const { token } = props.__ion_status;
  const loading: Loading = props.store.get("loading");

  switch (token) {
    case LOADING:
    case READY:
    case FAILED:
      if (loading.type === LoadingType.TOKEN && loading.status !== token) {
        loading.status = token;
        props.store.set({ loading });
      }
    default:
      return null;
  }
};

export default (compose(
  withStore,
  withStatus,
  (Component: any) => (props: any) =>
    withCall(callKey, {
      config: {
        method: "get",
        url: props.store.get("TOKEN_API"),
      },
      reducer: ({ data }) => "?access_token=" + data,
    })(Component)(props),
  setIfDone("token")
) as ComponentEnhancer<TokenFetcherProps, {}>)(TokenFetcher);

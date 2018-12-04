import * as React from "react";

import { CallStatus } from "react-ion-store/lib/enums";

const setIfDone = (key: string) => (Component: any) => (props: any) => {
  const status = props.__ion_status[key];
  const loading = props.store.get("loading");

  switch (status) {
    case CallStatus.LOADING:
    case CallStatus.READY:
    case CallStatus.FAILED:
      if (loading.status !== status) {
        loading.status = status;
        props.store.set({ loading });
      }
  }

  return <Component {...props} />;
};

export default setIfDone;

// Logic
import * as React from "react";

const withSet = (Component: any) => (props: any) => {
  const setRepo = (repo: string, branch: string) => () =>
    props.store.set({
      repo,
      branch,
      commits: {
        pages: {
          next: 1,
        },
        data: [],
      },
    });
  return <Component {...props} setRepo={setRepo} />;
};

export default withSet;

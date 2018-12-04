// Logic
import * as React from "react";

const withSet = (Component: any) => (props: any) => {
  const setProject = (project: string) => () =>
    props.store.set({
      project,
      repos: {
        pages: {
          next: 1,
        },
        data: [],
      },
    });
  return <Component {...props} setProject={setProject} />;
};

export default withSet;

// Logic
import * as React from "react";

const withUrl = Component => props => (
  <Component
    {...props}
    url={
      props.store.get("GITHUB_API") +
      "/repos/" +
      props.store.get("project") +
      "/" +
      props.store.get("repo") +
      "/commits" +
      props.store.get("token") +
      "&sha=" +
      props.store.get("branch") +
      "&page=" +
      props.store.get("commits").pages.next
    }
  />
);

export default withUrl;

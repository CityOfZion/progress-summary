// Logic
import * as React from "react";

const withUrl = Component => props => (
  <Component
    {...props}
    url={
      props.store.get("GITHUB_API") +
      "/orgs/" +
      props.store.get("project") +
      "/repos" +
      props.store.get("token") +
      "&page=" +
      props.store.get("repos").pages.next
    }
  />
);

export default withUrl;

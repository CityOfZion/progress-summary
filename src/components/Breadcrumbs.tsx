// Logic
import * as React from "react";

// Presentation
import Breadcrumb from "antd/lib/breadcrumb";

import { sheet } from "../styles";

// Assets
import { CallStatus } from "react-ion-store/lib/enums";

import baseRepo from "../utils/baseRepo";

const styles = sheet({
  breadCrumbs: {
    mar: "16px 32px",
  },
});

// Typings
import Loading, { LoadingType } from "../types/loader";

interface BreadcrumbsProps {
  children: any;
}

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = props => (
  <Breadcrumb {...props} className={styles.breadCrumbs} />
);

export default Breadcrumbs;
export const BreadcrumbItem = Breadcrumb.Item;

export const withSetCrumbs = (Component: any) => (props: any) => {
  const setCrumbs = (type: string) => {
    const { commits, project, repo, repos, loading } = props.store;

    switch (type) {
      case "home":
        props.store.call({
          project: project.set("value", undefined),
          repo: repo.set("value", undefined),
          loading: loading.set("value", {
            type: LoadingType.TOKEN,
            status: CallStatus.READY,
          }),
          repos: repos.set("value", baseRepo).set("status", CallStatus.INITIAL),
          commits: repos.set("value", baseRepo).set("status", CallStatus.INITIAL),
        });
        break;

      case "org":
        props.store.call({
          repo: repo.set("value", undefined),
          loading: loading.set("value", {
            type: LoadingType.REPOS,
            status: CallStatus.READY,
          }),
          commits: commits.set("value", baseRepo).set("status", CallStatus.INITIAL),
        });
        break;

      default:
    }
  };
  return <Component {...props} setCrumbs={setCrumbs} />;
};

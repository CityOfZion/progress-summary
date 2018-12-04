// Logic
import * as React from "react";
import { compose, ComponentEnhancer } from "recompose";
import { withStore, withTake } from "react-ion-store";

// Presentation
import Breadcrumbs, { BreadcrumbItem, withSetCrumbs } from "./../components/Breadcrumbs";
import { sheet } from "../styles";

// Components
import FetchSpinner from "../components/FetchSpinner";
import TokenFetcher from "../components/TokenFetcher";
import Projects from "./Projects";
import Repos from "./Repos";
import Repo from "./Repo";

// Assets
const styles = sheet({
  modulesRoot: {
    height: "calc(100vh - 64px - 69px - 53px)",
    overflowY: "auto",
    margin: "0 32px",
    bgc: "white",
  },
});

// Typings
interface ModuleProps {
  setCrumbs: Function;
  project?: string;
  repo?: string;
}

const Modules: React.FunctionComponent<ModuleProps> = props => {
  const { project, repo, setCrumbs } = props;

  return (
    <React.Fragment>
      <Breadcrumbs>
        <BreadcrumbItem href="#">
          <span onClick={() => setCrumbs("home")}>Home</span>
        </BreadcrumbItem>
        {project && !repo && <BreadcrumbItem>{project}</BreadcrumbItem>}
        {project &&
          repo && [
            <BreadcrumbItem key="orgBreadCrumb" href="#">
              {repo ? <span onClick={() => setCrumbs("org")}>{project}</span> : project}
            </BreadcrumbItem>,
            <BreadcrumbItem key="repoBreadCrumb">{repo}</BreadcrumbItem>,
          ]}
      </Breadcrumbs>
      <FetchSpinner>
        <div className={styles.modulesRoot}>
          {!project && <Projects />}
          {project && !repo && <Repos />}
          {project && repo && <Repo />}
        </div>
      </FetchSpinner>
      <TokenFetcher />
    </React.Fragment>
  );
};

export default (compose(
  withStore,
  withSetCrumbs,
  withTake(["project", "repo"])
) as ComponentEnhancer<ModuleProps, {}>)(Modules);

// Logic
import * as React from "react";
import { compose, ComponentEnhancer } from "recompose";
import { withStore, withTake } from "react-ion-store";

// Presentation
import Col from "antd/lib/col";
import Row from "antd/lib/row";

import { sheet } from "../../styles";

// Components
import Project from "./components/Project";
import withSet from "./components/withSet";

// Assets
const styles = sheet({
  projectRoot: {
    pad: "8px",
  },
});

// Typings
interface ProjectProps {
  projects: string[];
  projectDescriptions: string[];
  setProject: (project: string) => void;
}

const Projects: React.FunctionComponent<ProjectProps> = ({ projects, projectDescriptions, setProject }) => (
  <Row className={styles.projectRoot}>
    {projects.map((project, index) => (
      <Col key={project} xs={24} md={12} lg={8} xl={6}>
        <Project name={project} description={projectDescriptions[index]} onClick={setProject(project)} />
      </Col>
    ))}
  </Row>
);

export default (compose(
  withStore,
  withSet,
  withTake(["projects", "projectDescriptions"])
) as ComponentEnhancer<ProjectProps, {}>)(Projects);

// Logic
import * as React from "react";

// Presentation
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Icon from "antd/lib/icon";

import { sheet } from "../../../styles";

// Assets
const styles = sheet({
  projectCard: {
    pad: "8px",
  },
  projectDescription: {
    h: "64px",
  },
});

// Typings
interface ProjectProps {
  name: string;
  description: string;
  onClick: any;
}

const Project: React.FunctionComponent<ProjectProps> = ({ name, description, onClick }) => {
  return (
    <div className={styles.projectCard}>
      <Card
        title={name}
        extra={
          <Button type="primary" size="small" onClick={onClick}>
            View
            <Icon type="right" />
          </Button>
        }
      >
        <div className={styles.projectDescription}>{description}</div>
      </Card>
    </div>
  );
};

export default Project;

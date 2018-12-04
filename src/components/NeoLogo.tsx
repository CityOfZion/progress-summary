// Logic
import * as React from "react";

// Presentation
import { sheet } from "../styles";

// Assets
const NEOLOGO = require("../assets/logo.png");
const styles = sheet({
  neoLogo: {
    img: {
      height: "48px",
    },
  },
});

const NeoLogo: React.FunctionComponent = () => (
  <div className={styles.neoLogo}>
    <img src={NEOLOGO} alt="NEO logo" key="NEOLOGO" />
  </div>
);

export default NeoLogo;

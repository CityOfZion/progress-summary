import React from "react";
import PropTypes from "prop-types";

import { Spin } from "antd";
import { injectStore } from "../Store";

const ConditionalSpinner = ({ children, isLoading }) =>
  isLoading ? (
    <Spin tip={`Loading ${isLoading.currentProject} ${isLoading.fetch}s`}>
      {children}
    </Spin>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

ConditionalSpinner.propTypes = {
  children: PropTypes.object.isRequired,
  isLoading: PropTypes.object.isRequired
};

export default injectStore(ConditionalSpinner);

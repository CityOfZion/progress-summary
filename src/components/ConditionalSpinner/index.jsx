import React from "react";
import PropTypes from "prop-types";

import Spin from "antd/lib/spin";
import { injectStore } from "../Store";

const ConditionalSpinner = ({ children, isLoading }) =>
  isLoading ? (
    <Spin tip={`Loading ${isLoading.fetch}s in ${isLoading.project}`}>
      {children}
    </Spin>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

ConditionalSpinner.propTypes = {
  children: PropTypes.object.isRequired,
  isLoading: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired
};

export default injectStore(ConditionalSpinner);

/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Sizes = {
  small: {
    "--height": 8 + "px",
  },
  medium: {
    "--height": 12 + "px",
  },
  large: {
    "--height": 16 + "px",
    "--padding": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  console.log("value and size: ", value, size);
  const styles = Sizes[size];

  const progressLabel = "--progress";
  const progressValue = value + "%";
  const updatedStyles = {
    ...styles,
    [progressLabel]: progressValue,
  };
  const isFull = value === 100;
  console.log("Is it full: ", isFull);
  console.log("Look at the updatedStyles: ", updatedStyles);
  return (
    <Wrapper style={updatedStyles}>
    <VisuallyHidden>
      <span>Value: {value}</span>
      <span>Size: {size}</span>
    </VisuallyHidden>
      <InnerProgressBar style={updatedStyles} className={isFull && 'full-progress'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  border-radius: 8px;
  padding: var(--padding);
`;

const InnerProgressBar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--progress);
  height: var(--height);
  border-radius: 4px 0 0 4px;

  &.full-progress {
    border-radius: 4px;
  }
`;

export default ProgressBar;

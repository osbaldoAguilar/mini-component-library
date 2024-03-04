import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];
  console.log(" styles: ", styles);
  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <CustomSearch
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  color: ${COLORS.gray300};
  position: relative;
  display: inline-block;
  border-bottom: ${COLORS.black} solid 1px;
  width: var(--width);
  & .filled {
    color: ${COLORS.gray700};
  }
`;
const IconWrapper = styled.div`
  color: inherit;
  position: absolute;
  top: 0;
  left: 0;
`;
const CustomSearch = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  border: none;
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
export default IconInput;

import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log("label: ", label, " value: ", value, " children: ", children);
  console.log("displayedValue: ", displayedValue);
  return (
    <WrapperSelect>
      <CustomSelect value={value} onChange={onChange}>
        {children}
      </CustomSelect>
      <PresentationalBit>
        <p>{displayedValue}</p>
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id={"chevron-down"} size={16} strokeWidth={3} />
        </IconWrapper>
      </PresentationalBit>
    </WrapperSelect>
  );
};

const WrapperSelect = styled.div`
  /* display: flex; */
  position: relative;
  width: max-content;
  & :focus {
    outline: 2px inherit;
  }
`;

const CustomSelect = styled.select`
  /* appearance: none;
  border: none; */
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray500};
  line-height: 18.75px;
  font-weight: 400;
  font-size: 1rem;
  padding: 12px 52px 12px 16px;
  border-radius: 6px;
  position: relative; /* Ensure the focus outline is visible */
  z-index: 1; /* Ensure the focus outline is above the IconWrapper */

  &:focus {
    outline: 2px solid ${COLORS.primary}; /* Customize the focus outline color */
  }

  & :hover {
    color: ${COLORS.gray700};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  color: inherit;
  top: 6px;
  right: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
`;

export default Select;

import { ReactNode, useRef, SelectHTMLAttributes } from "react";
import { styled } from "styled-components";
import { Icon } from "../icon/icon";

interface DropDownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  currentValue: string;
  children: ReactNode[];
  isAdd?: boolean;
}

const DropDownButton = styled.div`
  position: relative;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: NanumGothic;
  font-size: 20px;
  font-weight: 400;

  width: 70px;
`;

const ADD = styled.span`
  padding-left: 10px;
  padding-top: 4px;
  font-family: Nokora;
  font-size: 24px;
`;

const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  white-space: pre;
  -webkit-appearance: none;
`;

export const DropDown = ({
  currentValue,
  children,
  isAdd = false,
  ...props
}: DropDownProps) => {
  const selectRef = useRef(null);
  return (
    <div>
      <DropDownButton>
        {currentValue}
        {isAdd ? <ADD>+</ADD> : <Icon id="arrowhead" rotate={180} size={15} />}

        <HiddenSelect {...props} value={currentValue} ref={selectRef}>
          {children}
        </HiddenSelect>
      </DropDownButton>
    </div>
  );
};

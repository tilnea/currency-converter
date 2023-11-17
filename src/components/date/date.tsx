import { styled } from "styled-components";

export const Date = styled.input`
  color: #000;
  font-family: Nokora;
  font-size: 16px;
  text-align: center;
  position: relative;
  color: ${(props) => props.theme.veryDark};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`;

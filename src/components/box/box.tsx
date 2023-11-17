import { styled } from "styled-components";

export const Box = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.absoluteWhite};
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.25);
  max-width: 885px;
  margin: 0 auto;
  width: 100%;
`;

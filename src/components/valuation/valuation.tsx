import { styled } from "styled-components";
import { Icon } from "../icon/icon";

interface ValuationProps {
  rate: number;
}

interface WrapperProps {
  $isPositive: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ $isPositive, theme }) =>
    $isPositive ? theme.winGreen : theme.loseRed};
  ${(props) => props.theme.veryDark}
`;

const Rate = styled.div`
  font-family: Nokora;
  font-size: 30px;
  font-weight: 400;
`;

export const Valuation = ({ rate }: ValuationProps) => {
  const isPositive = rate >= 0;
  return (
    <Wrapper $isPositive={isPositive}>
      <Icon id="arrowhead" rotate={isPositive ? 0 : 180} size={30} />
      <Rate>{rate}</Rate>
    </Wrapper>
  );
};

import { styled } from "styled-components";

interface CurrencyItemProps {
  currency: string;
  amount: number;
  onRemove: (currency: string) => void;
}

const Item = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  gap: 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const Currency = styled.h2`
  font-family: NanumGothic;
  font-size: 20px;
`;

const Button = styled.button`
  align-self: flex-end;
  text-align: end;
  width: 50px;
  font-family: Nokora;
  font-size: 24px;
`;

const Rate = styled.div`
  font-size: 32px;
  font-family: Nokora;
  font-weight: 700;
  text-align: center;
`;

export const CurrencyItem = ({
  currency,
  onRemove,
  amount,
}: CurrencyItemProps) => {
  return (
    <Item>
      <Top>
        <Currency>{currency}</Currency>
        <Button onClick={() => onRemove(currency)}>-</Button>
      </Top>
      <Rate>{amount || "-"}</Rate>
    </Item>
  );
};

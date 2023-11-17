import { ChangeEvent } from "react";
import { styled } from "styled-components";
import { Input } from "../input/input";
import { DropDown } from "../dropdown/dropdown";
import { CurrencyNameType } from "../../types/domain.types";

interface AmountProps {
  selectedCurrency: string;
  amount: string;
  currencies: CurrencyNameType[] | undefined;
  onCurrencyChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.veryDark};
  background-color: ${(props) => props.theme.background};
  margin: -20px;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Amount = ({
  selectedCurrency,
  amount,
  currencies,
  onCurrencyChange,
  onAmountChange,
}: AmountProps) => {
  return (
    <Layout>
      <Input
        value={amount}
        placeholder="1"
        type="number"
        onChange={onAmountChange}
      />
      {currencies && (
        <DropDown onChange={onCurrencyChange} currentValue={selectedCurrency}>
          {currencies.map((currency) => {
            return (
              <option key={currency[0]} value={currency[0]}>
                {currency[0]} - {currency[1]}
              </option>
            );
          })}
        </DropDown>
      )}
    </Layout>
  );
};

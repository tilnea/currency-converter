import { styled } from "styled-components";
import { DropDown } from "../dropdown/dropdown";
import { CurrencyNameType, LatestRatiosType } from "../../types/domain.types";
import { calculateNewAmount } from "../../utils/calculations";

interface CurrenciesProps {
  rates: LatestRatiosType[] | undefined;
  currency: string;
  amount: string;
  base: number;
  currencies: CurrencyNameType[] | undefined;
  onAddCurrency: (currency: string) => void;
  onRemoveCurrency: (currency: string) => void;
}

const FIRST_BREAKPOINT = 500;
const SECOND_BREAKPOINT = 725;

const Layout = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  align-self: stretch;
  border-radius: 8px;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.absoluteWhite};
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.25);
  max-width: 885px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${FIRST_BREAKPOINT}px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-stat;
  }
`;

const AddLayout = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const Item = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  gap: 10px;
  align-self: stretch;

  @media (min-width: ${FIRST_BREAKPOINT}px) {
    width: calc(50% - 15px);
  }

  @media (min-width: ${SECOND_BREAKPOINT}px) {
    width: calc(32% - 15px);
  }
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

export const Currencies = ({
  rates,
  currency,
  amount,
  base,
  currencies,
  onAddCurrency,
  onRemoveCurrency,
}: CurrenciesProps) => {
  return (
    <Layout>
      <AddLayout>
        {currencies && (
          <DropDown
            isAdd={true}
            onChange={(event) => onAddCurrency(event.target.value)}
            currentValue={"Add"}
          >
            {currencies.map((currency) => {
              return (
                <option key={currency[0]} value={currency[0]}>
                  {currency[0]} - {currency[1]}
                </option>
              );
            })}
          </DropDown>
        )}
      </AddLayout>
      {rates?.map((rate) => {
        if (rate[0] === currency) {
          return;
        }

        const withNewBase = amount
          ? calculateNewAmount(amount, rate[1], base)
          : "-";

        return (
          <Item key={`${rate[0]}-item`}>
            <Top>
              <Currency>{rate[0]}</Currency>
              <Button onClick={() => onRemoveCurrency(rate[0])}>-</Button>
            </Top>
            <Rate>{withNewBase}</Rate>
          </Item>
        );
      })}
    </Layout>
  );
};

import { styled } from "styled-components";
import { DropDown } from "../components/dropdown/dropdown";
import { CurrencyItem } from "../components/currency-item/currency-item";
import { Box } from "../components/box/box";
import { CurrencyNameType, LatestRatiosType } from "../types/domain.types";
import { calculateNewAmount } from "../utils/calculations";

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

const Wrapper = styled.div`
  max-width: 885px;
  margin: 0 auto;
  width: 100%;
`;

const Layout = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  align-self: stretch;

  @media (min-width: ${FIRST_BREAKPOINT}px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const AddLayout = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const ItemLayout = styled.div`
  align-self: stretch;

  @media (min-width: ${FIRST_BREAKPOINT}px) {
    width: calc(50% - 15px);
  }

  @media (min-width: ${SECOND_BREAKPOINT}px) {
    width: calc(32% - 15px);
  }
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
    <Wrapper>
      <Box>
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

            const amountFloat = parseFloat(amount);

            const withNewBase = calculateNewAmount(amountFloat, rate[1], base);

            return (
              <ItemLayout>
                <CurrencyItem
                  key={`${rate[0]}-item`}
                  currency={rate[0]}
                  onRemove={onRemoveCurrency}
                  amount={withNewBase}
                />
              </ItemLayout>
            );
          })}
        </Layout>
      </Box>
    </Wrapper>
  );
};

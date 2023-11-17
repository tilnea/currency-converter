import { ChangeEvent } from "react";
import { styled } from "styled-components";
import { useLocalStorage } from "../hooks/use-local-storage";
import { Amount } from "../components/amount/amount";
import { Title } from "../components/title/title";
import { Valuation } from "../components/valuation/valuation";
import { Currencies } from "./currencies";
import { Date as InputDate } from "../components/date/date";
import { useGetAllCurrenies } from "../domain/use-case/currency/use-get-all-currencies";
import { useGetHistory } from "../domain/use-case/currency/use-get-history";
import { useGetLatest } from "../domain/use-case/currency/use-get-latest";
import { useGetBase } from "../domain/use-case/currency/use-get-base";
import { getToday } from "../utils/dates";
import { Icon } from "../components/icon/icon";

const BREAKPOINT = 900;

const Layout = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 30px;
  background: ${(props) => props.theme.background};

  @media (min-width: ${BREAKPOINT}px) {
    gap: 50px;
  }
`;

const TitleLayout = styled.div`
  padding: 10px 0px;
  align-self: stretch;

  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (min-width: ${BREAKPOINT}px) {
    padding: 30px 0 10px;
  }
`;

const ValueLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const Between = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Content = () => {
  const [amount, setAmount] = useLocalStorage("baseAmount", "1");
  const [selectedCurrency, setSelectedCurrency] = useLocalStorage(
    "baseCurrency",
    "SEK"
  );
  const [displayCurrencies, setDisplayCurrencies] = useLocalStorage(
    "displayCurrensies",
    `${selectedCurrency},USD,GBP,SGD,`
  );

  const today = getToday();

  const [startDate, setStartDate] = useLocalStorage("startDate", "1999-01-01");
  const [endDate, setEndDate] = useLocalStorage("endDate", today);

  const {
    data: allCurrencies,
    //isLoading: isLoadingAllCurrencies,  these should be handled
    //isError: isErrorAllCurrencies,      in a real project
  } = useGetAllCurrenies();

  const {
    data: rates,
    //isLoading: isLoadingRates,
    //isError: isErrorRates,
  } = useGetLatest(displayCurrencies);

  const {
    data: startRatio,
    //isLoading: isLoadingStartRatio,
    //isError: isErrorStartRatio,
  } = useGetHistory(startDate, selectedCurrency);

  const {
    data: endRatio,
    //isLoading: isLoadingEndRatio,
    //isError: isErrorEndRatio,
  } = useGetHistory(endDate, selectedCurrency);

  const { data: baseCurrency } = useGetBase(
    displayCurrencies,
    selectedCurrency
  );

  const handleSelectCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = event.target.value;

    const newString = displayCurrencies.replace(
      `${selectedCurrency},`,
      `${newCurrency},`
    );
    setDisplayCurrencies(newString);
    setSelectedCurrency(newCurrency);
  };

  const handleAddCurrency = (currency: string) => {
    if (!displayCurrencies.includes(currency)) {
      const newString = displayCurrencies.concat(`${currency},`);
      setDisplayCurrencies(newString);
    }
  };

  const handleRemoveCurrency = (currency: string) => {
    const newString = displayCurrencies.replace(`${currency},`, "");
    setDisplayCurrencies(newString);
  };

  const change =
    endRatio && startRatio
      ? Math.round((endRatio - startRatio + Number.EPSILON) * 100000) / 100000
      : 0;

  return (
    <Layout>
      <TitleLayout>
        <Title>Currency Converter</Title>
      </TitleLayout>
      <Amount
        amount={amount}
        onAmountChange={(event) => setAmount(event.target.value)}
        selectedCurrency={selectedCurrency}
        currencies={allCurrencies}
        onCurrencyChange={handleSelectCurrency}
      />
      <ValueLayout>
        <Valuation rate={change || 0} />
        <Between>
          <InputDate
            min="1999-01-01"
            max={today}
            pattern="\d{4}-\d{2}-\d{2}"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <Icon id="arrow" size={20} />
          <InputDate
            min={startDate}
            max={today}
            pattern="\d{4}-\d{2}-\d{2}"
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </Between>
      </ValueLayout>

      {baseCurrency && (
        <Currencies
          base={baseCurrency}
          amount={amount}
          currency={selectedCurrency}
          currencies={allCurrencies}
          rates={rates}
          onAddCurrency={handleAddCurrency}
          onRemoveCurrency={handleRemoveCurrency}
        />
      )}

      <div></div>
    </Layout>
  );
};

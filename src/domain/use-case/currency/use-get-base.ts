import { useEffect, useState } from "react";
import { useGetLatestRepo } from "../../../data/repository/currency-conveter.repository";

interface IGetBase {
  data: number;
  isLoading: boolean;
  isError: boolean;
}

export const useGetBase = (
  currencies: string,
  baseCurrency: string
): IGetBase => {
  const { data: rates, isLoading, isError } = useGetLatestRepo(currencies);
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    if (isLoading || isError) return;
    if (rates) {
      setData(rates[baseCurrency]);
    }
  }, [isLoading, isError, rates, baseCurrency]);

  return { data, isLoading, isError };
};

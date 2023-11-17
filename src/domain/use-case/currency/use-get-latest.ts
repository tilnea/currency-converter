import { useEffect, useState } from "react";
import { useGetLatestRepo } from "../../../data/repository/currency-conveter.repository";
import { LatestRatiosType } from "../../../types/domain.types";

interface IGetLatest {
  data: LatestRatiosType[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const useGetLatest = (currencies: string): IGetLatest => {
  const { data: rates, isLoading, isError } = useGetLatestRepo(currencies);
  const [data, setData] = useState<[string, number][]>([]);

  useEffect(() => {
    if (isLoading || isError) return;
    if (rates) {
      setData(Object.entries(rates));
    }
  }, [isLoading, isError, rates]);

  return { data, isLoading, isError };
};

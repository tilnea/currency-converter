import {
  useGetCurrencies,
  useGetHistoricalRates,
  useGetLatestRates,
} from "../api/currency-api";

import {
  MapCurrency,
  MapHistoryRate,
} from "../mapper/currency-conveter/currency-conveter.mapper";

import { APIResult } from "../../types/api.types";
import {
  CurrencyNameType,
  ILatestRatiosObject,
} from "../../types/domain.types";

export const useGetAllCurreniesRepo = (): APIResult<CurrencyNameType[]> => {
  const { data: dto, isLoading, isError } = useGetCurrencies();

  const data = dto ? MapCurrency(dto) : [];

  return { data, isLoading, isError };
};

export const useGetHistoryRepo = (
  date: string,
  currency: string
): APIResult<number> => {
  const { data: dto, isLoading, isError } = useGetHistoricalRates(date);

  const data = dto ? MapHistoryRate(dto, currency) : 0;

  return { data, isLoading, isError };
};

export const useGetLatestRepo = (
  currencies: string
): APIResult<ILatestRatiosObject> => {
  const { data: dto, isLoading, isError } = useGetLatestRates(currencies);

  const data = dto ? dto.rates : undefined;

  return { data, isLoading, isError };
};

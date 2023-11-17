import { useQuery } from "@tanstack/react-query";
import { RatesDTO, CurrenciesDTO } from "../../types/dto.types";

import { API_KEY } from "../../secret";
const baseUrl = `https://openexchangerates.org/api/`;

const fetchLatestRates = async (currencies: string): Promise<RatesDTO> => {
  const data = await fetch(
    `${baseUrl}latest.json?app_id=${API_KEY}&symbols=${currencies}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  ).then((res) => res.json());

  return data;
};

const fetchHistoricalRates = async (date: string): Promise<RatesDTO> => {
  const data = await fetch(
    `${baseUrl}historical/${date}.json?app_id=${API_KEY}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  ).then((res) => {
    return res.json();
  });

  return data;
};

const fetchCurrencies = async (): Promise<CurrenciesDTO> => {
  const data = await fetch(`${baseUrl}currencies.json`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  }).then((res) => {
    return res.json();
  });

  return data;
};

export const useGetLatestRates = (currencies: string) => {
  const query = useQuery<RatesDTO>({
    queryKey: ["latestRates", currencies],
    queryFn: () => fetchLatestRates(currencies),
  });

  return query;
};

export const useGetHistoricalRates = (date: string) => {
  const query = useQuery<RatesDTO>({
    queryKey: ["historicalRates", date],
    queryFn: () => fetchHistoricalRates(date),
  });

  return query;
};

export const useGetCurrencies = () => {
  const query = useQuery<CurrenciesDTO>({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
  });

  return query;
};

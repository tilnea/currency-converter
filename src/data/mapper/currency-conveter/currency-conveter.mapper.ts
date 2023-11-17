import { RatesDTO, CurrenciesDTO } from "../../../types/dto.types";
import { CurrencyNameType } from "../../../types/domain.types";

export const MapCurrency = (dto: CurrenciesDTO): CurrencyNameType[] => {
  return Object.entries(dto);
};

export const MapHistoryRate = (dto: RatesDTO, key: string): number => {
  return dto.rates[key] || 0;
};

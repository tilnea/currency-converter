export interface RatesDTO {
  disclaimer: string;
  license: string;
  timestamp?: number;
  base: string;
  rates: {
    [key: string]: number;
  };
}

export interface CurrenciesDTO {
  [key: string]: string;
}

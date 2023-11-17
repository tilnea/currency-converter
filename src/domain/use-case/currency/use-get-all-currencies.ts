import { useGetAllCurreniesRepo } from "../../../data/repository/currency-conveter.repository";
import { CurrencyNameType } from "../../../types/domain.types";

interface IGetAllCurrenies {
  data: CurrencyNameType[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const useGetAllCurrenies = (): IGetAllCurrenies => {
  const { data, isLoading, isError } = useGetAllCurreniesRepo();
  return { data, isLoading, isError };
};

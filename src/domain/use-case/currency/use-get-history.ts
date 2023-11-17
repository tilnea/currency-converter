import { useGetHistoryRepo } from "../../../data/repository/currency-conveter.repository";

interface IGetHistory {
  data: number | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const useGetHistory = (date: string, currency: string): IGetHistory => {
  const { data, isLoading, isError } = useGetHistoryRepo(date, currency);
  return { data, isLoading, isError };
};

import {
  CoinList,
  HistoricalChart,
  SingleCoin,
  TrendingCoins,
} from "~/lib/api/coin";

export const useCoin = () => {
  const getCoins = async (page: number, offset: number) => {
    const url = CoinList(page, offset);
    return await $fetch(url);
  };

  const getCoin = async (id: string) => {
    const url = SingleCoin(id);
    return await $fetch(url);
  };

  const getHistoricalChart = async (id: string, days: number = 365) => {
    const url = HistoricalChart(id, days);
    return await $fetch(url);
  };

  const getTrendingCoins = async (currency: string) => {
    const url = TrendingCoins(currency);
    return await $fetch(url);
  };

  return {
    getCoins,
    getCoin,
    getHistoricalChart,
    getTrendingCoins,
  };
};

<template>
    <Table>
      <template #header>
        <th v-for="item in coinTableHeads" :key="item.id">{{ item.label }}</th>
      </template>
      <template #body>
        <tr v-for="coin in coins" :key="coin.id" class="text-nowrap">
          <td class="row-number">{{coin.market_cap_rank}}</td>
          <td class="flex items-center gap-x-2">
              <img :src="coin.image" :alt="coin.name" class="size-8">
              <h6>{{truncateText(coin.name,12)}}</h6>
          </td>
          <td>
            ${{ coin.current_price >= 1000 ? comma(coin.current_price.toFixed(0)) : comma(coin.current_price.toFixed(2))}}
          </td>
          <td>
            {{comma(coin.market_cap.toString().slice(0, -6))}} M
          </td>
          <td :class="coin.price_change_percentage_24h <= 0 ? 'text-red-600' : 'text-green-500'">{{coin.price_change_percentage_24h.toFixed(2)}} %</td>
          <td>-</td>
        </tr>
      </template>
    </Table>
</template>
  
<script setup lang="ts">
import Table from '~/components/table/Table.vue';
import { coinTableHeads } from '~/constants/tabelHeads';
import type { Coin } from '~/lib/types/coinsLitsType';
import { comma } from '~/lib/utils/comma';
import truncateText from '~/lib/utils/truncText';

const {getCoins} = useCoin()

const coins : Coin[] = await getCoins(10,1) as Coin[]
</script>
<style scoped>
.row-number{
  min-width: none;
}
</style>
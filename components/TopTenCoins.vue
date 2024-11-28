<template>
    <div class="flex items-center justify-center gap-5 lg:flex-row flex-col mt-10">
        <BoxParent>
          <BoxChild v-for="coin in topCoinSort" :coin="coin" :key="coin.id"/>
        </BoxParent>
        <BoxParent>
          <BoxChild v-for="coin in bottomCoinSort" :coin="coin" :key="coin.id"/>
        </BoxParent>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Coin } from '~/lib/types/coinsLitsType';
import BoxParent from './box/BoxParent.vue';

const { getCoins } = useCoin();

const coins = ref<Coin[]>([]);
const isLoading = ref(true);


const fetchedCoins : Coin[] = await getCoins(50, 1) as Coin[];


const topCoinSort = computed(() => {
  return fetchedCoins?.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 4) ?? [];
});
const bottomCoinSort = computed(() => {
  return fetchedCoins?.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 4) ?? [];
});
</script>

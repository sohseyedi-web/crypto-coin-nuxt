<template>
  <div class="flex items-center justify-center gap-5 lg:flex-row flex-col mt-10">
    <div class="">
      <h4 class="text-lg font-semibold mb-3">Highest profit coins</h4>
      <BoxParent>
        <BoxChild v-for="coin in topCoinSort" :coin="coin" :key="coin.id" />
      </BoxParent>
    </div>
    <div class="">
      <h4 class="text-lg font-semibold mb-3">Highest loss coins</h4>
      <BoxParent>
        <BoxChild v-for="coin in bottomCoinSort" :coin="coin" :key="coin.id" />
      </BoxParent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Coin } from '~/lib/types/coinsLitsType';
import BoxParent from './box/BoxParent.vue';

const { getCoins } = useCoin();

const coins = ref<Coin[]>([]);
const isLoading = ref(true);

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  fetchCoinsData();
  intervalId = setInterval(fetchCoinsData, 60000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

async function fetchCoinsData() {
  const fetchedCoins: Coin[] = await getCoins(50, 1) as Coin[];

  coins.value = fetchedCoins;
  isLoading.value = false;
}

const topCoinSort = computed(() => {
  return coins.value?.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 4) ?? [];
});
const bottomCoinSort = computed(() => {
  return coins.value?.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 4) ?? [];
});
</script>
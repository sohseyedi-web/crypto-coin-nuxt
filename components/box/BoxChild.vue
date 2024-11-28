<template>
    <NuxtLink to="/" class="w-[48%] hover:bg-zinc-50 transition-all duration-300 border border-zinc-300 rounded-xl flex items-center justify-between gap-x-2 p-2">
            <div class="flex items-center gap-x-2">
                <img :src="coin.image" :alt="coin.name" class="size-10 object-contain">
                <div class="">
                    <h6 class="font-semibold text-sm">{{ truncateText(coin.name,10) }}</h6>
                    <span class="text-xs">{{ coin.symbol }} / usdt</span>
                </div>
            </div>
            <span :class="coin.price_change_percentage_24h <= 0 ? 'text-red-600' : 'text-green-500'">{{coin.price_change_percentage_24h.toFixed(2)}} %</span>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Coin } from '~/lib/types/coinsLitsType';
import truncateText from '~/lib/utils/truncText';

const {coin} = defineProps({
  coin: {
    type: Object as PropType<Coin>,
    required: true,
  },
});
</script>

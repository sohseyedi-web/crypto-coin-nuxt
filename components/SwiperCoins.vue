<template>
    <section class="my-5 w-full">
      <h4 class="text-lg font-semibold mb-3">Top Trending Coins</h4>
      <Swiper
        :modules="[Autoplay]"
        :slides-per-view="4"
        :space-between="20"
        :breakpoints="breakpoints"
        :loop="true"
        :autoplay="autoplayConfig"
      >
        <SwiperSlide v-for="coin in coins" :key="coin.id">
            <div class="border border-zinc-300 bg-white max-w-4xl rounded-xl p-4 flex items-center justify-between">
                <div class="flex items-center gap-x-2">
                    <img :src="coin.image" :alt="coin.name" class="size-8">
                    <h6>{{coin.symbol}}</h6>
                </div>
                <div class="flex items-center gap-x-4">
                    <h6 class="font-bold text-lg">
                        <!-- ${{comma(coin.current_price.toFixed(2))}} -->
                        ${{ coin.current_price >= 1000 ? comma(coin.current_price.toFixed(0)) : comma(coin.current_price.toFixed(2))}}
                    </h6>
                    <span :class="coin.price_change_percentage_24h <= 0 ? 'text-red-600' : 'text-green-500'">{{coin.price_change_percentage_24h.toFixed(2)}} %</span>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';
import { comma } from '~/lib/utils/comma';
  
  const {getTrendingCoins} = await useCoin()
  const coins = await getTrendingCoins("usd")
  
  const breakpoints = {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };
  
  const autoplayConfig = {
    delay: 3000,
    disableOnInteraction: false,
  };
  </script>
  
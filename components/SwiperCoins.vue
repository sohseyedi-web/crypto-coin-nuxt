<template>
    <section class="my-5 w-full">
      <Swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="4"
        :space-between="20"
        :breakpoints="breakpoints"
        :loop="true"
        navigation
        :autoplay="autoplayConfig"
      >

        <SwiperSlide v-for="coin in coins" :key="coin.id">
            <div class="border border-zinc-300 bg-white rounded-xl p-5 flex items-center justify-between">
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
  import { Navigation,Autoplay } from 'swiper/modules';
import { comma } from '~/lib/utils/comma';
  
  const {getTrendingCoins} = await useCoin()
  const coins = await getTrendingCoins("usd")
  
  // تنظیمات برای حالت ریسپانسیو
  const breakpoints = {
    // سایز دسکتاپ
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    // سایز تبلت
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    // سایز موبایل
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };
  
  // تنظیمات برای Autoplay
  const autoplayConfig = {
    delay: 3000,
    disableOnInteraction: false,
  };
  </script>
  <style scoped>
  /* استایل پیش‌فرض */
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;
  }
  
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* تغییر استایل شخصی‌سازی‌شده */
  .custom-next::after,
  .custom-prev::after {
    font-size: 1.2rem;
    color: white;
  }
  
  .custom-next {
    right: -20px;
  }
  
  .custom-prev {
    left: -20px;
  }
  </style>
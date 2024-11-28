<template>
    <section class="flex items-center justify-center flex-col pt-14">
        <h3 class="text-5xl font-bold text-[#D91656]">Crypto Nuxt</h3>
        <div class="flex items-center gap-5 text-zinc-100 my-5">
            <ButtonLink to="/coins" title="All Coins"/>
            <ButtonLink to="/following" title="Following"/>
        </div>
    </section>
</template>

<script setup lang="ts">
import ButtonLink from './button/ButtonLink.vue';
</script>

<template>
    <header class="p-3 border-b border-zinc-300">
        <nav class="flex items-center container mx-auto justify-between">
            <div class="flex items-center gap-x-3">
                <img src="/logo.svg" alt="logo" class="size-12"/>
                <h2 class="text-[#D91656] text-2xl font-semibold mb-0">CryptoNuxt</h2>
            </div>
            <div class="flex items-center gap-x-3">
                <SunIcon class="size-8 text-[#141414] cursor-pointer"/>
                <EyeIcon class="size-8 text-[#D91656] cursor-pointer"/>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { EyeIcon, SunIcon } from '@heroicons/vue/24/outline';


</script>

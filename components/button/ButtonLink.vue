<template>
    <NuxtLink :to="to" >
        <button class="hover:bg-rose-700 transition-all duration-300 w-[210px] h-[50px] font-semibold rounded-xl flex items-center justify-center bg-[#d91656] text-xl">
            {{title}}
        </button>
    </NuxtLink>
</template>

<script setup lang="ts">
const {to,title} = defineProps({
    to:{
        type : String,
        required:true
    },
    title:{
        type : String,
        required:true
    },
})
</script>

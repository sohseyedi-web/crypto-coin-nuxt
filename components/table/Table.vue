<template>
  <div class="bg-zinc-50 text-[#141414] rounded-xl w-full overflow-x-auto mt-2">
    <table class="table w-full border-collapse border-spacing-2 sm:border-spacing-4">
      <thead>
        <tr class="bg-zinc-100 text-[#141414] font-semibold">
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <slot name="body"></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
</script>

<style>

.table {
  table-layout: auto; 
  width: 100%;
}

.table th:first-child,
.table td:first-child {
  min-width: 10px;
  text-align: center;
}

.table th,
.table td {
  min-width: 130px;
  padding: 10px;
}

.table th {
  text-align: left;
}
</style>

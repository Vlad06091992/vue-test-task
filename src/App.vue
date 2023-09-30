<script setup lang="ts">


import MainTable from "../src/components/main-table.vue";
import Aside from "../src/components/aside.vue";
</script>

<template>
  <div class="root_app">
    <Aside/>
    <MainTable/>
  </div>

</template>

<style scoped>

.root_app{
  margin: 0 auto;
  width: 785px;
  display: flex;
  gap:20px
}

</style>

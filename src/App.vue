<script setup lang="ts">


import MainTable from "../src/components/main-table.vue";
import Aside from "../src/components/aside.vue";
import Footer from "../src/components/footer.vue";
</script>

<template>
  <div class="root_app">
    <Aside/>
    <MainTable/>
    <Footer/>
  </div>
</template>

<style scoped>
.root_app{
  margin: 40px auto 0;
  justify-content: space-between;
  width: 785px;
  display: flex;
  flex-wrap: wrap;
}


</style>

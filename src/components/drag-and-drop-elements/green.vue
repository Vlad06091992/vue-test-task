<template>
  <div class="root">
    <div class="yellow"></div>
    <div class="yellow_blur"></div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

.root {
  width: 96px;
  height: 96px;
  position: relative;
&:hover{
  border: 1px solid #4c4c4c;;
  border-radius: 10px;
}
}

.yellow {
  position: absolute;
  top: 30px;
  left: 20px;
  z-index: 2;
  width: 50px;
  height: 50px;
  background-color: #7FAA65;
}

.yellow_blur {
  position: relative;
  z-index: 2;
  top: 25px;
  left: 25px;
  backdrop-filter: blur(5px);
  width: 50px;
  height: 50px;
  background: #B8D99859;
}

</style>
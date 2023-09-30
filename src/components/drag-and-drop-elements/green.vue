<template>
  <div class="root">
    <div class="blue"></div>
    <div class="blue_blur"></div>
    <div class="numberOfTools">{{numberOfTools}}</div>
  </div>

</template>

<script setup lang="ts">
import {useStore} from "../../store/store.ts"
import {computed} from "vue";

const numberOfTools = computed(()=>{
  return useStore()['Green'].numberOfTools
})

</script>

<style scoped>

.root {
  width: 96px;
  height: 96px;
  position: relative;

}

.blue {
  position: absolute;
  top: 30px;
  left: 20px;
  z-index: 2;
  width: 50px;
  height: 50px;
  background-color: #7FAA65;
}

.blue_blur {
  position: relative;
  z-index: 2;
  top: 25px;
  left: 25px;
  backdrop-filter: blur(5px);
  width: 50px;
  height: 50px;
  background: #B8D99859;
}

.numberOfTools{
  position: absolute;
  top:77px;
  left:77px;
  border-top-left-radius: 6px;
  width: 18px;
  height: 18px;
  border: 2px solid #4c4c4c;
  color:gray;
}

</style>
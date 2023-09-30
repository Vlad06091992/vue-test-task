<template>
  <div class="root" :class="{ big_root : bigSize}">
    <div class="yellow" :class="{ bigVariant_quad : bigSize}"></div>
    <div class="yellow_blur" :class="{ bigVariant_quad_blur : bigSize}"></div>
    <div v-if="showInstruments" class="numberOfTools" >
      <div class="number">
        {{ numberOfTools }}
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useStore} from "../../store/store.ts"
import {computed} from "vue";

type Props = {
  showInstruments: boolean,
  bigSize:boolean
}

const { showInstruments,bigSize } = defineProps<Props>();
const numberOfTools = computed(() => {
  return useStore()['Green'].numberOfTools
})

</script>

<style scoped lang="scss">
.root {
  width: 96px;
  height: 96px;
  position: relative;
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

.big_root{
  width: 200px;
  height: 200px;
}

.bigVariant_quad{
  width:115px;
  height:115px;
}
.bigVariant_quad_blur{
  width:115px;
  height:115px;
  top: 15px;
  left: 30px;
}

.numberOfTools {
  font-size: 12px;
  position: absolute;
  top: 77px;
  left: 77px;
  border-top-left-radius: 6px;
  width: 18px;
  height: 18px;
  border: 2px solid #4c4c4c;
  color: gray;
}

.number{
  margin-top: 3px;
  margin-left: 5px;
}

</style>
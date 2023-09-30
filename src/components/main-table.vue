<script setup lang="ts">

import {useStore} from "../store/store.ts";


import Green from "./drag-and-drop-elements/green.vue";
import Yellow from "./drag-and-drop-elements/yellow.vue";
import Blue from "./drag-and-drop-elements/blue.vue";
import Settings from "./settings.vue";
import {computed} from "vue";


const store = useStore();

function onDragStart(name:string) {
  store.setMovableElement(name)
}
function onDrop(e:any, value:number) {
  store.replaceElement(e, value)
}

function setCurrentComponent(element:"Blue" | "Green" | "Yellow"){
  debugger
  store.setActiveElement(element)
}

const draggble = computed(()=>{
  return !store.activeElement
})

</script>

<template>
  <div class="root_table">
    <table>
      <tbody>
      <tr v-for="row in 5" :key="row">
        <td @dragover.prevent
            @dragenter.prevent
            @drop="onDrop(store.movableElement,(row - 1) * 5 + column)" class="td" v-for="column in 5"
            :key="(row - 1) * 5 + column"
        >
          <Blue @dblclick="setCurrentComponent('Blue')" v-if="store['Blue'].currentPosition === (row - 1) * 5 + column" :draggable="draggble"
                @drag="onDragStart('Blue')"
          />
          <Yellow @dblclick="setCurrentComponent('Yellow')" v-if="store['Yellow'].currentPosition === (row - 1) * 5 + column" :draggable="draggble"
                  @drag="onDragStart('Yellow')"
          />
          <Green @dblclick="setCurrentComponent('Green')" v-if="store['Green'].currentPosition === (row - 1) * 5 + column" :draggable="draggble"
                 @drag="onDragStart('Green')"
          />
        </td>
      </tr>
      </tbody>
    </table>
    <div class="settings">
      <Settings v-if="store.activeElement"/>
    </div>

  </div>
</template>


<style scoped lang="css">

* {
  box-sizing: border-box
}

.root_table{
  overflow: hidden;
  position: relative;
}

table {
  border-collapse: collapse; /* Убираем разделяющие линии между ячейками */
  border-radius: 10px; /* Задаем радиус скругления углов */
  overflow: hidden;
}

.td {
  background: #2D2D2D;
  width: 100px;
  height: 100px;
  border: 2px solid #4c4c4c;
  &:hover {
  background: #2F2F2F;
}
}
.settings{
  z-index: 9;
  position: absolute;
  top:0;
  left:252px;
}


</style>

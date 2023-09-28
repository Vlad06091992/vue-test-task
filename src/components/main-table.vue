<script setup lang="ts">

import {useStore} from "../store/store.ts";


import Green from "./drag-and-drop-elements/green.vue";
import Yellow from "./drag-and-drop-elements/yellow.vue";
import Blue from "./drag-and-drop-elements/blue.vue";


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


</script>

<template>
  <div>
    <table>
      <tbody>
      <tr v-for="row in 5" :key="row">
        <td @dragover.prevent
            @dragenter.prevent
            @drop="onDrop(store.movableElement,(row - 1) * 5 + column)" class="td" v-for="column in 5"
            :key="(row - 1) * 5 + column"
        >
          <Blue @dblclick="setCurrentComponent('Blue')" v-if="store['Blue'].currentPosition === (row - 1) * 5 + column" draggable="true"
                @drag="onDragStart('Blue')"
          />
          <Yellow @dblclick="setCurrentComponent('Yellow')" v-if="store['Yellow'].currentPosition === (row - 1) * 5 + column" draggable="true"
                  @drag="onDragStart('Yellow')"
          />
          <Green @dblclick="setCurrentComponent('Green')" v-if="store['Green'].currentPosition === (row - 1) * 5 + column" draggable="true"
                 @drag="onDragStart('Green')"
          />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped lang="css">

* {
  box-sizing: border-box
}

table {
  border-collapse: collapse; /* Убираем разделяющие линии между ячейками */
  border-radius: 10px; /* Задаем радиус скругления углов */
  overflow: hidden;

}

.td {
  background: #26262680;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}


</style>

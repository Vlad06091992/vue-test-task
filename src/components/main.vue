<script setup>

import {computed, ref, watch} from "vue";
import Green from "../components/drag-and-drop-elements/green.vue";
import {useStore} from "../store/store.ts";
import Yellow from "./drag-and-drop-elements/yellow.vue";
import Blue from "./drag-and-drop-elements/blue.vue";


const store = useStore();

function onDragStart(name, num) {
  store.setMovableElement(name)
}


function onDrop(e, value) {
  store.replaceElement(e,value)
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
          <Blue v-if="store['Blue'].currentPosition === (row - 1) * 5 + column" draggable="true"
                @drag="onDragStart('Blue')"
          />
          <Yellow v-if="store['Yellow'].currentPosition === (row - 1) * 5 + column" draggable="true"
                @drag="onDragStart('Yellow')"
          />
          <Green v-if="store['Green'].currentPosition === (row - 1) * 5 + column" draggable="true"
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
  background: gray;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}


</style>

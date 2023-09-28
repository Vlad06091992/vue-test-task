<script setup>

import {ref} from "vue";
import Green from "../components/drag-and-drop-elements/green.vue";
import {useStore} from "../store/store.ts";


const store = useStore();
// let test = ref(store.elements[0].currentPosition)

function onDragStart() {

}


function onDrop(e, value) {
  // test.value = store.elements[0].currentPosition
  store.replaceElement(value)
}
</script>

<template>
  <div>
    <table>
      <tbody>
      <tr v-for="row in 5" :key="row">
        <td @dragover.prevent
            @dragenter.prevent
            @drop="onDrop($event,(row - 1) * 5 + column)" class="td" v-for="column in 5"
            :key="(row - 1) * 5 + column">
          <Green v-if="store.elements[0].currentPosition === (row - 1) * 5 + column" draggable="true"
                 @drag="onDragStart($event,(row - 1) * 5 + column)"
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

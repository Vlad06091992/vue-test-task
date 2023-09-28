<script setup>

import {ref} from "vue";
import Green from "../components/drag-and-drop-elements/green.vue";

let test = ref(12)

function onDragStart() {
  test.value = 0
}

function onDrop(e, value) {
  test.value = value
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
          <Green v-if="test === (row - 1) * 5 + column" draggable="true"
                 @drag="onDragStart($event,(row - 1) * 5 + column)"/>
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

table{ border-spacing: 0;
  border-collapse: collapse;}

.td {

  width: 100px;
  height: 100px;
  border: 1px solid black;


}


</style>

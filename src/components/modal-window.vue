<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits(["acceptHandler", "cancelHandler"]);
let inputValue = ref('')
</script>
<template>
  <div class="root_modal">
    <input type="number" v-model="inputValue" placeholder="Введите количество">
    <div class="buttons">
      <button @click="emit('cancelHandler')" class="btn-cancel">Отмена</button>
      <button @click="emit('acceptHandler',inputValue)" class="btn-accept">Подтвердить</button>
    </div>
  </div>
</template>


<style scoped lang="scss">
.root_modal {
  border: 1.5px solid #4c4c4c;
  background: #2D2D2D;
  height: 134px
}


input {
  position: relative;
  top: 20px;
  left: 20px;
  border-radius: 4px;
  border: 2px solid #4c4c4c;
  outline: none;
  background: #2D2D2D;
  width: 197px;
  height: 37px;
  color: gray;
  padding-left: 10px;
  font-size: 14px;
}


input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: white;
  transition: transform 0.2s;
  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(0.95);
  }

  &.btn-accept {
    position: relative;
    top: 40px;
    left: 30px;
    background: #FA7272;
    height: 33px;
    padding: 8px 14px;
  }

  &.btn-cancel {
    background: #FFFFFF;
    position: relative;
    top: 40px;
    left: 20px;
    height: 33px;
    color: #2D2D2D;
    padding: 8px 19px;
  }
}
</style>
<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="button_root">
    <button @click="emit('close')" class="cancel-button">
      <div class="cancel-icon"></div>
    </button>
  </div>
</template>

<style scoped>
.button_root {
  position: absolute;
  top:6px;
  left:222px;
}

.cancel-button {
  width: 12px;
  height: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
}

.cancel-icon {
  width: 100%;
  height: 2px;
  background-color: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cancel-icon::before,
.cancel-icon::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cancel-icon::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.cancel-icon::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
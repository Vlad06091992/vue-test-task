<script setup lang="ts">
import {useStore} from "../store/store.js";
import Green from "../components/drag-and-drop-elements/green.vue";
import Blue from "../components/drag-and-drop-elements/blue.vue";
import Yellow from "../components/drag-and-drop-elements/yellow.vue";
import {computed} from "vue";

const store = useStore()

const activeComponent = computed((): any => {
  switch (store.activeElement) {
    case 'Yellow':
      return Yellow;
    case 'Green':
      return Green;
    case 'Blue':
      return Blue;
  }
});


</script>


<template>
  <div class="root">
    <div class="element">
      <component :is="activeComponent"></component>
    </div>

    <div class="line"></div>
    <div class="skeleton1"></div>
    <div class="skeleton2"></div>
    <div class="skeleton3"></div>
    <div class="skeleton4"></div>
    <div class="skeleton5"></div>
    <div class="skeleton6"></div>
    <div class="line2"></div>
    <button class="btn">Удалить предмет</button>


  </div>
</template>


<style lang="scss">
@mixin skeletons($top, $width, $height) {
  position: relative;
  top: $top;
  width: $width;
  height: $height;
  margin: 0 auto;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%)
}

.root {
  position: relative;
  width: 250px;
  height: 500px;
  background: #26262680;
}

.element {
  position: absolute;
  top: 10px;
  left: 10px;
}

.line {
  margin: 0 auto;
  @include skeletons(215px, 220px, 1px)
}

.skeleton1 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(232px, 211px, 30px)
}

.skeleton2 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(257px, 211px, 10px)
}

.skeleton3 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(273px, 211px, 10px)
}

.skeleton4 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(290px, 211px, 10px)
}

.skeleton5 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(310px, 180px, 10px)
}

.skeleton6 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(330px, 100px, 10px)
}

.line2 {
  margin: 0 auto;
  @include skeletons(350px, 200px, 1px)
}

.btn {
  display: block;
  position: relative;
  top: 363px;
  font-size: 14px;
  font-weight: 400;
  color: white;
  width: 220px;
  height: 39px;
  background: #FA7272;
  margin: 0 auto;
}

.element {
  color: white;
}
</style>
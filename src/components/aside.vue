<script setup lang="ts">
import piniaIcon from "../../src/images/vue-test-task.png";

</script>


<template>
  <div class="root_aside">
    <div class="image" >
      <img  :src="piniaIcon">
    </div>
    <div class="line"></div>
    <div class="skeleton1"></div>
    <div class="skeleton2"></div>
    <div class="skeleton3"></div>
    <div class="skeleton4"></div>
    <div class="skeleton5"></div>
    <div class="skeleton6"></div>
    <div class="skeleton7"></div>
  </div>
</template>


<style scoped lang="scss">
@mixin skeletons($top, $width, $height) {
  position: relative;
  top: $top;
  width: $width;
  height: $height;
  margin: 0 auto;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%)
}

.root_aside {
  position: relative;
 border-radius: 10px;
  border: 2px solid #4c4c4c;
  width: 236px;
  height: 501px;
  background: #2D2D2D;
}
img{
  border-radius: 10px;
  max-width: 100%;
  height: auto;
}

.image{
  position: relative;
  top:15px;
  margin: 0 auto;
  position: relative;
  width: 208px;
  height: 240px;
}

.skeleton1 {
  margin: 0 auto;
  border-radius: 8px;
  @include skeletons(35px, 190px, 26px)
}

.skeleton2 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(60px, 155px, 10px)
}

.skeleton3 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(75px, 190px, 10px)
}

.skeleton4 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(90px, 170px, 10px)
}

.skeleton5 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(105px, 160px, 10px)
}

.skeleton6 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(120px, 140px, 10px)
}

.skeleton7 {
  margin: 0 auto;
  border-radius: 4px;
  @include skeletons(150px, 70px, 10px)
}




</style>
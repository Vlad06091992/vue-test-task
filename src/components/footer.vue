<script setup lang="ts">

import ButtonClose from "../components/ui/button-close.vue";
</script>

<template>
  <div class="root_footer">
    <div class="button">
      <ButtonClose/>
    </div>
    <div class="skeleton1"></div>

  </div>
</template>

<style scoped lang="scss">

@mixin skeletons($top, $width, $height) {
  position: relative;
  top: $top;
  width: $width;
  height: $height;
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%)
}

.button{
  position: absolute;
  top:5px;
  left:755px;
}

.root_footer{
  position: relative;
  margin-top: 20px ;
  width: 785px;
  height:72px;
  border-radius: 10px;
  border: 2px solid #4c4c4c;
  background: #2D2D2D;
}

.skeleton1 {
  left: 15px;
  border-radius: 12px;
  @include skeletons(20px, 699px, 36px)
}
</style>
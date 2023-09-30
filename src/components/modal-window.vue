

<script lang="ts" >

</script>
<template>
    <div class="root">
        <input placeholder="Введите количество">
        <div class="buttons">
            <button class="btn-cancel">Отмена</button>
            <button class="btn-accept">Подтвердить</button>
        </div>
    </div>
</template>



<style scoped lang="scss">
.root {
    border: 1.5px solid #4c4c4c;
    border-radius:4px ;
    background: #2D2D2D;
    width: 252px;
    height: 133px
}



input {
    position: relative;
    top: 20px;
    left: 20px;
    border-radius: 4px;
    border: 1.5px solid #4c4c4c;
    outline: none;
    background: #2D2D2D;
    width: 197px;
    height: 37px;
    color:gray;
    padding-left: 10px;
    font-size: 14px;

}


button {
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: white;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
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
    top:40px;
    left:20px;
    height: 33px;
    color: #2D2D2D;
    padding: 8px 19px;
}

}
</style>
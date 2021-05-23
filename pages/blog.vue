<template>
  <div class="soon">
    Coming Soon
  </div>
</template>

<script>
export default {
  //TODO: Custom Parallax , Blob Animation
};
</script>

<style lang="scss" scoped>
.soon {
  @extend %display-flex;
  width: 100%;
  height: 100vh;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-family: $poiret;
  color: $blue-dark;
  padding: 10px;
}
</style>

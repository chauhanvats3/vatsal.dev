<template>
  <div class="cta">
    <div class="btn"><a href="/contact">Let's Chat</a></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cta {
  width: 100%;
  height: 0%;
  position: relative;
  @extend %display-flex;
  flex-flow: row wrap;
  background: rgba(255, 255, 255, 0);
  transition: all 0.5s ease-in-out;

  @media (min-width: 800px) {
    position: fixed;
    background: transparent;
    width: auto;
    padding: 0;
    left: 45px;
    bottom: 20%;
  }

  @media (min-width: 1100px) {
    bottom: 30%;
  }

  @media (max-width: 800px) {
    z-index: 2;
    .btn {
      position: absolute;
    }
  }
}
</style>

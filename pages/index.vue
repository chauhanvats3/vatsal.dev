<template>
  <div class="home">
    <div class="designer"></div>
    <div class="developer"></div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.home {
  @extend %display-flex;
  font-size: 3.5rem;
  width: 100%;
  height: fit-content;
  justify-items: flex-start;

  .designer,
  .developer {
    height: calc(100vh - #{$navbar-height});
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 60vh;
    background-position: center;
  }

  .designer {
    background-image: url(/images/home/hero/designer.svg),
      url("/images/home/hero/base-shadow.svg");
  }

  .developer {
    background-image: url(/images/home/hero/developer.png),
      url("/images/home/hero/base-shadow.svg");
  }
}
</style>

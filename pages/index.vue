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
  height: 100%;
  justify-items: flex-start;

  .designer,
  .developer {
    height: 100vh;
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 95%, 75%;
    background-position: center center;
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

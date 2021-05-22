<template>
  <a href="#main" id="scrollToTop">
    <div v-html="require(`/static/icons/toTop.svg?raw`)" />
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 50px;
  width: 50px;
  background-color: #1919194f;
  font-size: 5rem;
  @extend %display-flex;
  opacity: 1;
  transition: opacity 0.3s ease;
  border-radius: 25px;
  z-index: 40;
  @supports (backdrop-filter: blur()) {
    backdrop-filter: blur(2px);
  }
  div {
    width: 100%;
    height: 100%;
    @extend %display-flex;

    svg {
      width: 40px;
      height: 40px;
    }
  }
}

a.hide {
  opacity: 0;
}
</style>

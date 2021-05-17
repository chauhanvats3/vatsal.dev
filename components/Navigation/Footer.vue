<template>
  <div class="footer">
    <a href="/sitemap">Sitemap</a
    ><a href="mailto:contact@vatsal.dev">contact@vatsal.dev</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 45px;
  background: linear-gradient(90deg, $blue-dark, $green-light);
  @extend %display-flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 5px 20px;
  a {
    @extend %display-flex;
    color: $white;
    font-size: 2rem;
  }
}
</style>

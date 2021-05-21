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
  height: 55px;
  background: $black;
  @extend %display-flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 5px 20px;
  a {
    @extend %display-flex;
    color: $white;
    font-size: 1.2rem;
    font-family: $poiret;

    @media (min-width: 800px) {
      font-size: 1.4rem;
    }
  }
}
</style>

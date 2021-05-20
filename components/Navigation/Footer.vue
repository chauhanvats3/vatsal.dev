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
  background: linear-gradient(
    103deg,
    #0e9594 0%,
    #0e9594 20%,
    #108585 20%,
    #108585 40%,
    #117d7d 40%,
    #117d7d 60%,
    #127979 60%,
    #127979 80%,
    #127475 80%,
    #127475 10%
  );

  background-size: 150%;
  background-position: left;
  animation: movingGradientBG 2.5s ease-in-out infinite alternate;
  will-change: background-position;
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

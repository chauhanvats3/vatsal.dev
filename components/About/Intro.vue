<template>
  <div class="intro">
    <div class="imageGroup">
      <BlobImage image="/images/vatsal.jpg" />
    </div>
    <div class="content">
      <p>This Is Me,</p>
      <h1>Vatsal Chauhan</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  @extend %display-flex;
  width: min(90%, 80ch);
  height: 170px;
  margin: 40px 0;

  .imageGroup {
    position: absolute;
    width: 150px;
    height: 150px;
    left: -20px;
    top: -10px;
  }

  .content {
    width: 100%;
    height: 100%;
    padding-left: 150px;
    @extend %display-flex;
    align-items: flex-start;
    p {
      font-size: 2.5rem;
    }
    h1 {
      font-size: 3.5rem;
      font-weight: 100;
      color: $green-mid;
    }
  }
}
</style>

<template>
  <div class="intro" ref="intro">
    <ElementTransition :options="{ delay: `0.2` }">
      <div class="imageGroup">
        <BlobImage image="/images/vatsal_2.jpg" />
      </div>
    </ElementTransition>

    <ElementTransition :options="{ delay: `0.4` }">
      <div class="content">
        <p>This is me,</p>
        <h1><strong>Vatsal</strong> Chauhan</h1>
      </div>
    </ElementTransition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  @extend %display-flex;
  width: min(90%, 70ch);
  height: 170px;
  margin: 30px 0 50px 0;
  .imageGroup {
    position: absolute;
    width: 210px;
    height: 210px;
    left: -35px;
    top: -25px;

    @media (min-width: 1000px) {
      width: 250px;
      height: 250px;

      left: -50px;
      top: -85px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    padding-left: 180px;
    @extend %display-flex;
    align-items: flex-start;
    p {
      font-size: 1.6rem;
      margin: 10px;
    }
    h1 {
      font-size: 2rem;
      font-weight: 100;
      color: $blue-light;
      font-family: $poiret;
      margin: 10px;
      text-transform: uppercase;
    }

    @media (min-width: 1000px) {
      padding-left: 280px;

      p {
        font-size: 2rem;
      }

      h1 {
        font-size: 2.2rem;
      }
    }
  }
}
</style>

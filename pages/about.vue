<template>
  <div class="about">
    <Heading>Hello There! I am</Heading>
    <HomeIDCard />
    <div class="intro">
      <div class="designer">
        <Heading type="h3">As a designer</Heading>
        <div class="content">
          <p>I design modern UI</p>
        </div>
      </div>
    </div>

    <IntersectionObserver />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  @extend %display-flex;
  min-height: 100vh;
  background: #f3f3f3;
  position: relative;
  justify-content: flex-start;

  .intro {
    width: 100%;
    @extend %display-flex;
    flex-flow: column nowrap;
    .designer {
      width: 100%;
      padding: 25px;

      .content {
        @extend %display-flex;
        margin: auto;
        max-width: 55ch;
        align-items: flex-start;

        @media (max-width: 800px) {
          margin: 5px 15%;
        }
        p {
          font-size: 1.7rem;
        }
      }
    }
  }
}
</style>

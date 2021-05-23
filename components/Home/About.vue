<template>
  <div class="aboutMe section">
    <Heading heading="Hi, Hey There, Hello!" />
    <AboutIntro />
  </div>
</template>

<script>
export default {
  data() {
    return {
      introOptions: {
        delay: "0.5"
      },
      headingOptions: {
        type: "fade"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.aboutMe {
  @extend %display-flex;
}
</style>

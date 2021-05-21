<template>
  <div class="aboutMe">
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
  margin-top: 80px;
  @extend %display-flex;
}
</style>

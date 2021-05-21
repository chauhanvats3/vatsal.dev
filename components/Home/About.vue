<template>
  <div class="aboutMe">
    <ElementTransition>
      <Heading heading="Hi, Hey There, Hello!" />
    </ElementTransition>
    <ElementTransition :options="{ delay: `0.3` }">
      <AboutIntro />
    </ElementTransition>
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

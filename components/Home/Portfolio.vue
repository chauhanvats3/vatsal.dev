<template>
  <div class="portfolio">
    <Heading heading="Recently, I Worked For" />

    <div class="cardWrapper">
      <EachProjectCard :dataset="this.dataset" />
    </div>

    <ElementTransition :options="{ delay: `0.1` }">
      <div class="btn btn-portfolio" @click="portfolioButtonClicked">
        <p>Portfolio</p>
      </div>
    </ElementTransition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataset: {
        title: "Shri Ganga View Guest House",
        pills: ["Web Design", "Web Development", "Chrome Extension", "Logo"],
        bgColor: "#125C6E",
        bgImage: "/images/projects/gangaview/web-mobile/image.png",
        bgShadow: "projects/gangaview/web-mobile/shadow",
        bgBase: "projects/gangaview/web-mobile/base",
        whole: "/images/projects/gangaview/web-mobile/whole.png",
        link: "https://gangaview.com"
      }
    };
  },
  methods: {
    portfolioButtonClicked() {
      this.$router.push({ path: "/portfolio" });
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  margin: 50px 0;
  @extend %display-flex;

  .cardWrapper {
    @extend %display-flex;

    width: 100%;
  }
}
</style>

<template>
  <div class="portfolio">
    <div class="heading">
      <h1>Recently, I Worked For</h1>
    </div>
    <div class="cardWrapper">
      <EachProjectCard :dataset="this.dataset" />
      <EachProjectCard :dataset="this.dataset" />
      <EachProjectCard :dataset="this.dataset" />
    </div>

    <div class="btn btn-portfolio" @click="portfolioButtonClicked">
      <p>Portfolio</p>
    </div>
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
  .heading {
    align-self: flex-start;

    h1 {
      font-weight: 100;
      font-size: 5rem;
      color: $blue-dark;
      padding: 10px;
      text-transform: uppercase;
    }
  }

  .cardWrapper {
    @extend %display-flex;

    width: 100%;
  }
}
</style>

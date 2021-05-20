<template>
  <div class="portfolio">
    <div class="heading">
      <h1>
        The feathers in my cap
      </h1>
    </div>
    <div class="reviews">
      <EachProjectCard
        v-for="data in dataset"
        :key="data.key"
        :dataset="data"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataset: [
        {
          title: "Shri Ganga View Guest House",
          pills: ["Web Design", "Web Development", "Chrome Extension", "Logo"],
          bgColor: "#125C6E",
          bgImage: "/images/projects/gangaview/web-mobile/image.png",
          bgShadow: "projects/gangaview/web-mobile/shadow",
          bgBase: "projects/gangaview/web-mobile/base",
          whole: "/images/projects/gangaview/web-mobile/whole.png",
          link: "https://gangaview.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  @extend %display-flex;
  justify-content: flex-start;

  .heading {
    margin: 30px 10px;
  }

  .reviews {
    width: 100%;
    height: 100%;
    @extend %display-flex;
    padding: 20px 0;
  }
}
</style>

<template>
  <div class="portfolio section">
    <Heading heading="Recently, I Worked For" />

    <div class="cardWrapper">
      <EachProjectCard
        :dataset="dataset"
        v-for="dataset in datasets"
        :key="dataset.key"
      />
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
      datasets: [
        {
          title: "Shri Ganga View Guest House",
          pills: ["Web Design", "Web Development", "Chrome Extension", "Logo"],
          bgColor: "#125C6E",
          image: "/images/projects/gangaview/web-mobile/whole.png",
          link: "https://gangaview.com",
          key: "prt-sgvgh"
        },
        {
          title: "Satvik Yogshala",
          pills: ["Web Development"],
          bgColor: "#FFD700",
          image: "/images/projects/satvikyogshala/website/whole.png",
          link: "https://satvikyogshala.com",
          key: "prt-svkyg"
        }
      ]
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
  @extend %display-flex;
  .cardWrapper {
    @extend %display-flex;
    flex-flow: row wrap;
    width: min(115ch, 98%);
  }
}
</style>

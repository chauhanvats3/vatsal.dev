<template>
  <div class="portfolio">
    <ScrollToTop />

    <Heading heading="The feathers in my cap " />
    <div class="projects">
      <EachProjectCard
        :dataset="dataset"
        v-for="dataset in datasets"
        :key="dataset.key"
      />
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

  .projects {
    width: min(115ch, 98%);
    height: 100%;
    @extend %display-flex;
    padding: 20px 0;
    flex-flow: row wrap;
  }

  .projects > div {
    width: min(90%, 450px);
  }
}
</style>

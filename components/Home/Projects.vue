<template>
  <div class="projects">
    <Heading heading="Recently, I Worked For" />

    <div class="carouselWrapper">
      <EachProjectCard
        :dataset="dataset"
        v-for="dataset in datasets"
        :key="dataset.key"
      />
      <div></div>
    </div>

    <div class="btn btn-projects" @click="projectsButtonClicked">
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
          description:
            "Branding, Website Design / Development for a local Guest House in Rishikesh.",
          pills: ["Web Design", "Web Development", "Chrome Extension", "Logo"],
          bgColor: "#125C6E",
          descColor: "#ffffff",
          image: "/images/projects/gangaview/web-mobile/whole-min.png",
          link: "https://gangaview.com",
          key: "prt-sgvgh"
        }
      ]
    };
  },
  methods: {
    projectsButtonClicked() {
      this.$router.push({ path: "/projects" });
    }
  }
};

/* ,
        {
          title: "Satvik Yogshala",
          description:
            "Website for One of the best yoga school in Rishikesh Area.",
          pills: ["Web Development"],
          bgColor: "#FFD700",
          descColor: "#000000",
          image: "/images/projects/satvikyogshala/website/whole.png",
          link: "https://satvikyogshala.com",
          key: "prt-svkyg"
        } */
</script>

<style lang="scss" scoped>
.projects {
  @extend %display-flex;
  background: white;
  padding: 100px 0 100px 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  position: relative;
  z-index: 1;

  .carouselWrapper {
    width: 100%;
    @extend %display-flex;
  }
}
</style>

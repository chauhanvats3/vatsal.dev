<template>
  <div class="portfolio">
    <Metatags :metadata="metadata" />
    <Heading>The feathers in my cap</Heading>
    <div class="projects">
      <CardCarousel>
        <EachProjectCard
          :dataset="project"
          v-for="project in projects"
          :key="project.key"
        />
      </CardCarousel>
    </div>
    <ScrollToTop />
    <IntersectionObserver />
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  data() {
    return {
      metadata: {
        title: "Portfolio",
        description:
          "Here are some of the projects that I have worked on recently.",
        image: "https://vatsal.dev/images/screenshots/sitemap.webp",
        location: "",
        creator: "",
        site: ""
      }
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
    flex-flow: column wrap;
  }
}
</style>

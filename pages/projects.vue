<template>
  <div class="portfolio">
    <Heading heading="The feathers in my cap " />
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

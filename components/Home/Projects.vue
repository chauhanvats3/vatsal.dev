<template>
  <div class="projects">
    <Heading heading="Recently, I Worked For" />

    <div class="test">
      <CardCarousel>
        <EachProjectCard
          :dataset="project"
          v-for="project in projects"
          :key="project.key"
        />
      </CardCarousel>
    </div>

    <div class="btn btn-projects" @click="projectsButtonClicked">
      <p>Portfolio</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  methods: {
    projectsButtonClicked() {
      this.$router.push({ path: "/projects" });
    }
  }
};
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

  .test {
    width: 100%;
    min-height: 100vh;
    @extend %display-flex;
  }
}
</style>

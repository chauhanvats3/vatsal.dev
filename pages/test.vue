<template>
  <div class="test">
    <CardCarousel>
      <EachProjectCard
        :dataset="project"
        v-for="project in projects"
        :key="project.key"
      />
    </CardCarousel>
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
.test {
  width: 100%;
  min-height: 100vh;
  @extend %display-flex;
}
</style>

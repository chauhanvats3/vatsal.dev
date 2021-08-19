<template>
  <div class="testimonials">
    <Heading heading="Some Of The Praises My Work Has Got " />

    <EachReviewCard
      v-for="project in projects"
      :key="project.review.key"
      :dataset="project.review"
    />

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
.testimonials {
  @extend %display-flex;
  min-width: 100vw;
  min-height: 100vh;
}
</style>

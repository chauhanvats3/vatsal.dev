<template>
  <div class="testimonials">
    <Metatags :metadata="metadata" />
    <Heading>Some Of The Praises My Work Has Got</Heading>

    <CardCarousel>
      <EachReviewCard
        v-for="project in projects"
        :key="project.review.key"
        :dataset="project.review"
      />
    </CardCarousel>

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
        title: "Testimonials",
        description: "All the praises that my work has got.",
        image: "https://vatsal.dev/images/screenshots/testimonials.webp",
        location: "",
        creator: "",
        site: ""
      }
    };
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

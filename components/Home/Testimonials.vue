<template>
  <div class="testimonials section">
    <Heading heading="Which Was Well Received" />

    <CardCarousel>
      <EachReviewCard
        v-for="project in projects"
        :key="project.review.key"
        :dataset="project.review"
      />
    </CardCarousel>
    <div class="btn btn-testimonials" @click="portfolioButtonClicked">
      <p>Testimonials</p>
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
    portfolioButtonClicked() {
      this.$router.push({ path: "/testimonials" });
    }
  }
};
</script>

<style lang="scss" scoped>
.testimonials {
  @extend %display-flex;
  align-items: center;
  background: #f7f7f7;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 100px 0 100px 0;
  z-index: 2;
  margin-top: -20px;
  position: relative;
  .cardWrapper {
    width: 100%;
    height: 100%;
    @extend %display-flex;
    margin: 0 0 35px 0;
    flex-flow: column wrap;
  }

  @media (max-width: 1035px) {
    .cardWrapper > :not(div:first-child) {
      display: none;
    }
  }
}
</style>

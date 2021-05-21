<template>
  <div class="testimonials">
    <div class="heading">
      <h1>Which Left Them Saying</h1>
    </div>
    <div class="cardWrapper">
      <EachReviewCard :dataset="this.dataset" />
    </div>

    <div class="btn btn-testimonials" @click="portfolioButtonClicked">
      <p>Testimonials</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataset: {
        f_name: "Abhishek",
        l_name: "Chauhan",
        company: "Shri Ganga View Guest House",
        review:
          "Vatsal is a very talented designer/developer. He helped immensely in taking my business online and also designing the brand identity be it logo, business card or color palette. 10/10 Would recommend.",
        bgColor: "18, 92, 110",
        image: "/images/projects/gangaview/review.jpg"
      }
    };
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
  margin: 50px 0;
  @extend %display-flex;
  align-items: center;

  .cardWrapper {
    width: 100%;
    height: 100%;
    @extend %display-flex;
    margin: 0 0 35px 0;
  }
}
</style>

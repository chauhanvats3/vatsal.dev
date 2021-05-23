<template>
  <div class="testimonials section">
    <Heading heading="Which Left Them Saying " />

    <div class="cardWrapper">
      <EachReviewCard
        v-for="dataset in datasets"
        :key="dataset.key"
        :dataset="dataset"
      />
    </div>

    <ElementTransition :options="{ delay: `0.3` }">
      <div class="btn btn-testimonials" @click="portfolioButtonClicked">
        <p>Testimonials</p>
      </div>
    </ElementTransition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          f_name: "Abhishek",
          l_name: "Chauhan",
          company: "Shri Ganga View Guest House",
          review:
            "Vatsal is a very talented designer/developer. He helped immensely in taking my business online and also designing the brand identity be it logo, business card or color palette. 10/10 Would recommend.",
          bgColor: "18, 92, 110",
          image: "/images/projects/gangaview/review.jpg",
          key: "tst-sgvgh"
        },
        {
          f_name: "Pritam",
          l_name: "Rawat",
          company: "Satvik Yogshala",
          review:
            "Thanks you bro for developing my website. Surely will work with you again when I need a redesign in the near future.",
          bgColor: "255, 215, 0",
          image: "/images/projects/satvikyogshala/review.jpg",
          key: "tst-svkyg"
        }
      ]
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
  @extend %display-flex;
  align-items: center;

  .cardWrapper {
    width: 100%;
    height: 100%;
    @extend %display-flex;
    margin: 0 0 35px 0;
    flex-flow: row wrap;
  }
  .cardWrapper > div {
    width: min(90%, 600px);
  }

  @media (max-width: 1035px) {
    .cardWrapper > :not(div:first-child) {
      display: none;
    }
  }
}
</style>

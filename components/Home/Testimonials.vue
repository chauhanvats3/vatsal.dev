<template>
  <div class="testimonials section">
    <Heading heading="Which Was Well Received" />

    <div class="cardWrapper">
      <EachReviewCard
        v-for="dataset in datasets"
        :key="dataset.key"
        :dataset="dataset"
      />
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
      datasets: [
        {
          f_name: "Abhishek",
          l_name: "Chauhan",
          company: "Shri Ganga View Guest House",
          review:
            "Vatsal is a very talented designer/developer. He helped immensely in taking my business online and also designing the brand identity be it logo, business card or color palette. 10/10 Would recommend.",
          bgColor: "18, 92, 110",
          bgImage: "/images/projects/gangaview/bg.svg",
          fontColor: "white",
          image: "/images/projects/gangaview/review.jpg",
          key: "tst-sgvgh"
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

/* ,
        {
          f_name: "Pritam",
          l_name: "Rawat",
          company: "Satvik Yogshala",
          review:
            "Thanks you bro for developing my website. Surely will work with you again when I need a redesign in the near future.",
          bgColor: "255, 215, 0",
          fontColor: "black",
          image: "/images/projects/satvikyogshala/review.jpg",
          bgImage: "/images/projects/satvikyogshala/bg.svg",

          key: "tst-svkyg"
        } */
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

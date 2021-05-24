<template>
  <div class="testimonials">
    <Heading heading="My clients give the best reviews " />
    <div class="reviews">
      <EachReviewCard
        v-for="dataset in datasets"
        :key="dataset.key"
        :dataset="dataset"
      />
    </div>
    <ScrollToTop />
    <IntersectionObserver />
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
  }
};
</script>

<style lang="scss" scoped>
.testimonials {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  @extend %display-flex;
  justify-content: flex-start;

  .heading {
    margin: 30px 10px;
  }

  .reviews {
    width: 100%;
    height: 100%;
    @extend %display-flex;
    padding: 20px 0;
    flex-flow: row wrap;
  }

  .reviews > div {
    width: min(90%, 600px);
  }
}
</style>

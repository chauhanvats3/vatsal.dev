<template>
  <div class="testimonials">
    <Heading heading="My clients give the best reviews " />
    <div class="reviews">
      <EachReviewCard v-for="data in dataset" :key="data.key" :dataset="data" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataset: [
        {
          f_name: "Abhishek",
          l_name: "Chauhan",
          company: "Shri Ganga View Guest House",
          review:
            "Vatsal is a very talented designer/developer. He helped immensely in taking my business online and also designing the brand identity be it logo, business card or color palette. 10/10 Would recommend.",
          bgColor: "18, 92, 110",
          image: "/images/projects/gangaview/review.jpg"
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
  }
}
</style>

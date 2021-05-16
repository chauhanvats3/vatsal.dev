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
        name: "Jonathan Doe",
        company: "Imaginary Co.",
        review:
          "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, excepturi aperiam? Unde, quis rerum, hic earum quisquam aspernatur doloremque quod quas quidem laboriosam accusantium, reiciendis molestiae eveniet animi dolores adipisci!",
        bgColor: "113, 157, 168",
        image: "/images/projects/gangaview/review.jpg",
        blobBack: "/blobs/back/1.svg",
        blobFront: "/blobs/front/1.svg",
      },
    };
  },
  methods: {
    portfolioButtonClicked() {
      this.$router.push({ path: "/portfolio" });
    },
  },
};
</script>
 
<style lang='scss' scoped>
.testimonials {
  margin: 50px 0;
  @extend %display-flex;
  align-items: center;
  .heading {
    h1 {
      font-weight: 100;
      font-size: 5rem;
      color: $blue-dark;
      padding: 10px;
      text-transform: uppercase;
    }
  }

  .cardWrapper {
    width: 100%;
    height: 100%;
    @extend %display-flex;
    margin: 50px 10px;
  }
}
</style>
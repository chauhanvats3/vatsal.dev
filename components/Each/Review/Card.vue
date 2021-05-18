<template>
  <div class="reviewCard" :style="cssProps">
    <div class="imageGroup">
      <div class="blobBack"></div>
      <div class="image"></div>
    </div>
    <div class="content">
      <div class="heading">
        <div class="name">{{ dataset.name }}</div>
        <div class="company">{{ dataset.company }}</div>
      </div>
      <div class="review">{{ dataset.review }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataset"],
  computed: {
    cssProps() {
      return {
        "--bg-color": this.dataset.bgColor,
        "--image": `url('${this.dataset.image}')`,
        "--blob-back": `url('${this.dataset.blobBack}')`,
        "--blob-front": `url('${this.dataset.blobFront}')`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reviewCard {
  width: min(90%, 650px);
  height: 400px;
  position: relative;
  @extend %display-flex;
  .imageGroup {
    position: absolute;
    width: 150px;
    height: 150px;
    left: -20px;
    top: -35px;

    .blobBack {
      background: linear-gradient(
        -115.08deg,
        rgba(var(--bg-color), 1) 0%,
        rgba(var(--bg-color), 0) 100%
      );
      mask: var(--blob-back) no-repeat center;
      width: 120%;
      height: 120%;
      position: absolute;
      top: -5px;
      left: -5px;
    }

    .image {
      background: var(--image) no-repeat center;
      background-size: 85%;
      mask: var(--blob-front) no-repeat center;
      width: 130%;
      height: 130%;
      position: absolute;
      top: -5px;
      left: -5px;
    }
  }

  .content {
    background: linear-gradient(
      115.08deg,
      rgba(var(--bg-color), 0) 0%,
      rgba(var(--bg-color), 0.15) 100%
    );
    width: 95%;
    height: 95%;
    @extend %display-flex;
    justify-content: flex-start;
    align-items: flex-start;

    border-radius: 20px;

    .heading {
      @extend %display-flex;
      align-items: flex-start;
      margin-left: 150px;
      font-size: 2rem;
      min-height: 100px;

      .name {
        font-size: 2.9rem;
        text-transform: uppercase;
        margin: 5px 0;
      }

      .company {
        letter-spacing: 0.3rem;
        color: rgb(78, 78, 78);
      }
    }
    .review {
      padding: 25px 15px 0 35px;
      margin-bottom: 25px;
      width: 100%;
      min-height: 100px;
      font-size: 2rem;
      letter-spacing: 0.15rem;
      line-height: 3.2rem;
      word-spacing: 0.4rem;
      overflow: hidden;
    }
  }
}
</style>

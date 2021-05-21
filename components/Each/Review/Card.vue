<template>
  <div class="reviewCard" :style="cssProps">
    <div class="imageGroup">
      <BlobImage :image="dataset.image" />
    </div>
    <div class="content">
      <div class="cardHeading">
        <div class="name">
          <strong>{{ dataset.f_name }}</strong> {{ dataset.l_name }}
        </div>
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
        "--bg-color": `${this.dataset.bgColor}`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.reviewCard {
  width: min(90%, 550px);
  min-height: 400px;
  position: relative;
  @extend %display-flex;

  .imageGroup {
    position: absolute;
    width: 150px;
    height: 150px;
    left: -20px;
    top: -35px;
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

    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25), 2px 2px 2px rgba(0, 0, 0, 0.2);

    .cardHeading {
      @extend %display-flex;
      align-items: flex-start;
      margin-left: 150px;
      font-size: 1rem;
      min-height: 100px;
      margin-top: 10px;

      .name {
        font-size: 1.2rem;
        text-transform: uppercase;
        margin: 5px 0;
      }

      .company {
        font-family: $poiret;
        letter-spacing: 0.15rem;
        color: rgb(87, 87, 87);
        font-weight: 600;
      }
    }
    .review {
      padding: 25px 15px 0 35px;
      margin-bottom: 25px;
      width: 100%;
      min-height: 100px;
      font-size: 1rem;
      letter-spacing: 0.09rem;
      line-height: 1.6rem;
      word-spacing: 0.2rem;
      font-weight: 300;
    }
  }
}
</style>

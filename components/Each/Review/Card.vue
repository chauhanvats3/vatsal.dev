<template>
  <div class="reviewCard" :style="cssProps">
    <ElementTransition :options="{ delay: `0.2` }">
      <ElementTransition :options="{ delay: `0.3` }">
        <div class="imageGroup">
          <BlobImage :image="dataset.image" />
        </div>
      </ElementTransition>

      <ElementTransition :options="{ delay: `0.4` }">
        <div class="content">
          <div class="cardHeading">
            <div class="name">
              <strong>{{ dataset.f_name }}</strong> {{ dataset.l_name }}
            </div>
            <div class="company">{{ dataset.company }}</div>
          </div>
          <div class="review">{{ dataset.review }}</div>
        </div>
      </ElementTransition>
    </ElementTransition>
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
  min-height: 350px;
  position: relative;
  @extend %display-flex;
  margin: 15px 45px;
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
    width: 100%;
    min-height: 350px;
    @extend %display-flex;
    justify-content: flex-start;
    align-items: flex-start;

    border-radius: 20px;

    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1), 6px 6px 8px rgba(0, 0, 0, 0.05);

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

  @media (max-width: 800px) {
    margin: 10px;
  }
}
</style>

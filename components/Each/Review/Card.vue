<template>
  <div class="reviewCard" :style="cssProps">
    <div class="intro">
      <div
        v-html="
          require(`/static/images/projects/${dataset.projectname}/bg.svg?raw`)
        "
        class="bg"
      />

      <img :src="dataset.image" alt="" srcset="" />
      <div class="name">
        <p>
          <strong>{{ dataset.f_name }}</strong> <br />
          {{ dataset.l_name }}
        </p>
      </div>
      <div class="company">{{ dataset.company }}</div>
    </div>

    <div class="review">
      <p>{{ dataset.review }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataset"],
  computed: {
    cssProps() {
      return {
        "--bg-color": `${this.dataset.bgColor}`,
        "--font-color": `${this.dataset.fontColor}`,
        "--bg-image": `url(${this.dataset.bgImage})`
      };
    },
    bgImage() {
      return `require('/static${this.dataset.bgImage}?raw')`;
    }
  }
};
</script>

<style lang="scss" scoped>
.reviewCard {
  width: 750px;
  height: 400px;
  position: relative;
  @extend %display-flex;
  flex-flow: row nowrap;
  margin: 15px 45px;
  color: var(--font-color);
  .intro,
  .review {
    height: 100%;
    padding: 25px;
    border-radius: 15px;
  }

  .intro {
    width: 55%;
    @extend %display-flex;
    overflow: hidden;
    position: relative; /* 
    background: var(--bg-image) repeat-x;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
 */
    .bg {
      position: absolute;
      z-index: -1;
      height: 100%;
      min-width: 100%;
    }

    img {
      border-radius: 15px;
      width: 7rem;
      height: 7rem;
      margin: 15px;
    }

    .name {
      p {
        font-size: 1.7rem;
        text-transform: uppercase;
        line-height: 2rem;
        margin: 15px;
        letter-spacing: 0.15rem;
      }
    }

    .company {
      font-family: $poiret;
      font-weight: bold;
      letter-spacing: 0.2rem;
      font-size: 1rem;
      text-align: center;
      max-width: 15ch;
      text-transform: uppercase;
    }
  }

  .review {
    width: 50%;
    background: rgb(var(--bg-color));
    margin-left: -25px;
    @extend %display-flex;
    font-weight: normal;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 800px) {
    margin: 10px;
    flex-flow: row wrap;
    height: fit-content;
    width: min(95%, 400px);

    .intro,
    .review {
      width: 100%;
      padding: 25px;
      border-radius: 15px;
    }

    .intro {
      flex-flow: row wrap;
      padding-bottom: 35px;
    }

    .review {
      margin-left: 0px;
      margin-top: -25px;
      padding: 25px;
    }
  }
}
</style>

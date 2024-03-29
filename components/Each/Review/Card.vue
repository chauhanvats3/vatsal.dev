<template>
  <div class="reviewCard" :style="cssProps">
    <div class="intro">
      <div class="waves" ref="waves">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
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
        "--bg-image": `url(${this.dataset.bgImage})`,
        "--bg-wave-1": `url(${this.dataset.bgWave}/1.svg)`,
        "--bg-wave-2": `url(${this.dataset.bgWave}/2.svg)`,
        "--bg-wave-3": `url(${this.dataset.bgWave}/3.svg)`,
        "--bg-wave-4": `url(${this.dataset.bgWave}/4.svg)`
      };
    },
    bgImage() {
      return `require('/static${this.dataset.bgImage}?raw')`;
    }
  },
  methods: {
    addWavesObserver() {
      let wavesCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            if (this.$refs.waves) {
              entry.target.classList.remove("animate");
            }
          }
        });
      };
      let wavesObserver = new IntersectionObserver(wavesCallback, {});
      this.$refs.waves.querySelectorAll(".wave").forEach(ele => {
        wavesObserver.observe(ele);
      });
      //
    }
  },
  mounted() {
    this.addWavesObserver();
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
  border-radius: 15px;

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
    position: relative;

    .waves {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      overflow: hidden;

      .wave {
        position: absolute;
        height: 100%;
        padding-top: 12%;
        left: 0;
        will-change: background-position;
      }

      .wave:nth-of-type(1) {
        background: 0% 100% / 200% repeat-x border-box var(--bg-wave-1);
      }

      .wave.animate:nth-of-type(1) {
        width: 100%;
        animation: wave 15s linear infinite;
        animation-delay: -1.25s;
      }

      .wave:nth-of-type(2) {
        background: 0% 100% / 50% repeat-x border-box var(--bg-wave-2);
      }
      .wave.animate:nth-of-type(2) {
        width: 200%;
        animation: wave 21s linear infinite, tide 10s ease infinite;
        animation-delay: -0.25s;
      }

      .wave:nth-of-type(3) {
        background: 0% 100% / 25% repeat-x border-box var(--bg-wave-3);
      }
      .wave.animate:nth-of-type(3) {
        width: 300%;
        animation: wave 25s linear infinite;
        animation-delay: +0.55s;
      }

      .wave:nth-of-type(4) {
        background: 0% 100% / 50% repeat-x border-box var(--bg-wave-4);
      }
      .wave.animate:nth-of-type(4) {
        width: 200%;
        animation: wave 17s linear infinite, tide 7s ease infinite;
        animation-delay: +1.75s;
      }

      @keyframes wave {
        0% {
          background-position-x: 0;
        }
        100% {
          background-position-x: 200%;
        }
      }

      @keyframes tide {
        0%,
        100% {
          transform: translate3d(0, 0, 0);
        }
        50% {
          transform: translate3d(0, 20px, 0);
        }
      }
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
        color: rgb(var(--bg-color));
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
      color: rgb(var(--bg-color));
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
    margin: 25px 100%;
    flex-flow: row wrap;
    height: fit-content;
    width: min(500px, 90vw);
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

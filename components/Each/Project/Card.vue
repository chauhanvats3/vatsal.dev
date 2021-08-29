<template>
  <div class="projectCard" :style="cssProps" ref="card" @click="toggleInfo">
    <div class="title">
      <p>{{ dataset.title }}</p>
      <div class="cta">
        <a>Details</a>
        <a :href="dataset.link" target="_blank" rel="noreferrer">Website</a>
      </div>
    </div>
    <div class="images">
      <img
        class="image"
        :src="dataset.image"
        alt=""
        ref="image"
        loading="eager"
      />
    </div>
    <div class="description">
      <p>
        {{ dataset.description }}
      </p>
    </div>
    <div class="pills">
      <ul>
        <li v-for="pill in dataset.pills" :key="pill">
          <p>{{ pill }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataset"],
  data() {
    return {
      parallax: {}
    };
  },
  computed: {
    cssProps() {
      return {
        "--bg-color": this.dataset.bgColor,
        "--delay": "0.2s",
        "--desc-color": this.dataset.descColor
      };
    }
  },
  methods: {
    toggleInfo() {
      this.$refs.card.classList.toggle("projectCard__info");
    },
    addParallax() {
      const anime = this.$anime;
      this.$data.parallax = anime({
        targets: this.$refs.image,
        translateY: -150,
        translateZ: 1,
        delay: function(el, i) {
          return i * 100;
        },
        elasticity: 200,
        easing: "easeInOutSine",
        autoplay: false
      });
    },
    scrolling(e) {
      let parallax = this.$data.parallax;
      let bounding = this.$refs.image.getBoundingClientRect();
      let decider =
        (bounding.bottom / (window.innerHeight + bounding.height)) % 100;
      parallax.seek(parallax.duration * decider);
    }
  },
  mounted() {
    this.addParallax();

    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", this.scrolling);
        } else {
          window.removeEventListener("scroll", this.scrolling);
        }
      });
    };
    let observer = new IntersectionObserver(callback, { threshold: 0 });
    observer.observe(this.$refs.image);
  }
};
</script>

<style lang="scss" scoped>
.projectCard {
  @extend %display-flex;
  background: var(--bg-color);
  border-radius: 20px;
  width: min(90vw, 375px);
  height: 550px;
  justify-content: space-between;
  margin: 30px 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.2),
    0 0 4px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.2),
    0 0 16px rgba(0, 0, 0, 0.2), 0 0 32px rgba(0, 0, 0, 0.2);

  @media (min-width: 800px) {
    width: 790px;
  }

  @media (max-width: 800px) {
    margin: 30px 100%;
    &__info {
      .title {
        .cta {
          transform: translateY(0px) !important;
          opacity: 1 !important;
        }
      }

      .description {
        transform: translateY(0px) !important;
        opacity: 1 !important;
        z-index: 1 !important;
      }

      .images,
      .pills {
        transform: translateY(-75px);
        opacity: 0;
      }

      .pills {
        z-index: -1 !important;
      }
    }
  }

  .title {
    width: 100%;
    height: 80px;
    @extend %display-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-family: $poiret;
    padding: 10px 15px;
    background: rgba(49, 49, 49, 0.527);
    border-top-left-radius: 21.5px;
    border-top-right-radius: 21.5px;
    z-index: 10;
    color: white;

    @media (max-width: 800px) {
      font-size: 1.3rem;
      justify-content: center;
      text-align: center;
    }

    @supports (backdrop-filter: blur()) {
      backdrop-filter: blur(4px);
    }

    .cta {
      @extend %display-flex;
      flex-flow: row nowrap;

      a {
        font-family: $nunito;
        margin: 0 8px;
        padding: 0 12px;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        font-weight: 100;
        background: rgba(255, 255, 255, 0.486);
        border-radius: 7px;
        @supports (backdrop-filter: blur()) {
          backdrop-filter: blur(4px);
        }
      }
      @media (max-width: 800px) {
        position: absolute;
        top: 400px;
        width: 100%;
        left: 0;
        flex-flow: column nowrap;
        opacity: 0;
        transform: translateY(15px);
        transition: all 0.5s ease-in-out;
        z-index: -1;

        a {
          font-size: 1.7rem;
          margin: 10px;
          width: 40%;
          text-align: center;
          background: rgba(43, 42, 42, 0.548);
        }
      }
    }
  }

  .images {
    width: 100%;
    height: 100%;
    position: absolute;
    @extend %display-flex;
    overflow: hidden;
    border-radius: 21.5px;
    transition: all 0.5s ease-in-out;

    @media (min-width: 800px) {
      justify-content: flex-end;
    }

    .image {
      position: absolute;
      right: 5%;
      will-change: transform;
    }
  }

  .description {
    @media (max-width: 800px) {
      opacity: 0;
      transform: translateY(15px);
      font-size: 1.3rem;
      width: 100%;
      margin: 0;
      padding: 15px;
      z-index: -1;
    }
    width: 45%;
    align-self: flex-start;
    margin: 30px;
    color: var(--desc-color);
    letter-spacing: 0.05rem;
    transition: all 0.5s ease-in-out;
  }

  .pills {
    z-index: 10;
    width: 100%;
    transition: all 0.5s ease-in-out;

    ul {
      @extend %display-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      padding: 10px;

      li p {
        background: rgba(49, 49, 49, 0.527);
        font-size: 0.9rem;
        font-weight: normal;
        margin: 5px;
        padding: 5px 15px;
        border-radius: 8px;
        color: white;

        @supports (backdrop-filter: blur()) {
          backdrop-filter: blur(4px);
        }
      }
    }
  }
}
</style>

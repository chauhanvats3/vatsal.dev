<template>
  <div class="projectCard" :style="cssProps" ref="card">
    <div class="title">
      <p>{{ dataset.title }}</p>
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
    addParallax() {
      const anime = this.$anime;
      this.$data.parallax = anime({
        targets: this.$refs.image,
        translateY: -100,
        translateZ: 0,
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
  width: min(90%, 375px);
  height: 550px;
  justify-content: space-between;
  margin: 30px 10px;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.2),
    0 0 4px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.2),
    0 0 16px rgba(0, 0, 0, 0.2), 0 0 32px rgba(0, 0, 0, 0.2);

  @media (min-width: 800px) {
    width: min(90%, 800px);
  }

  .title {
    width: 100%;
    height: 80px;
    @extend %display-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    font-family: $poiret;
    padding: 10px 15px;
    background: rgba(49, 49, 49, 0.527);
    border-top-left-radius: 21.5px;
    border-top-right-radius: 21.5px;
    z-index: 10;
    color: white;

    @supports (backdrop-filter: blur()) {
      backdrop-filter: blur(4px);
    }
  }

  .images {
    width: 100%;
    height: 100%;
    position: absolute;
    @extend %display-flex;
    overflow: hidden;
    border-radius: 21.5px;

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
      display: none;
    }
    width: 45%;
    align-self: flex-start;
    margin: 30px;
    color: var(--desc-color);
  }

  .pills {
    z-index: 10;
    width: 100%;

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

<template>
  <div class="projectCard" :style="cssProps" @click="handleClick" ref="card">
    <div class="title">
      <p>{{ dataset.title }}</p>
      <a :href="dataset.link" target="_blank" @click.stop rel="noreferrer"
        ><img src="/icons/link.svg" alt=""
      /></a>
    </div>
    <div class="images">
      <img
        class="image"
        :src="dataset.whole"
        alt=""
        ref="image"
        loading="eager"
      />
    </div>
    <div class="pills">
      <ul>
        <li v-for="pill in dataset.pills" :key="pill">{{ pill }}</li>
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
        "--bg-color": this.dataset.bgColor
      };
    }
  },
  methods: {
    handleClick() {
      this.$router.push({ path: "/portfolio" });
    },
    addParallax() {
      const anime = this.$anime;
      this.$data.parallax = anime({
        targets: this.$refs.image,
        translateY: -70,
        translateZ: 0,
        translateX: 15,
        delay: function(el, i) {
          return i * 100;
        },
        elasticity: 200,
        easing: "easeInOutSine",
        autoplay: false
      });
    },
    scrolling(e) {
      //Make Magic
      //parallax.seek(animation.duration * (seekProgressEl.value / 100));

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
  width: min(90%, 400px);
  min-height: 500px;
  justify-content: space-between;
  margin: 30px;
  position: relative;
  cursor: pointer;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  .title {
    width: 100%;
    @extend %display-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: 1.2rem;
    font-family: $poiret;
    padding: 10px 15px;
    background: rgba(104, 104, 104, 0.3);
    border-top-left-radius: 21.5px;
    border-top-right-radius: 21.5px;
    z-index: 10;
    color: white;

    @supports (backdrop-filter: blur()) {
      backdrop-filter: blur(4px);
    }
  }

  .pills {
    z-index: 10;

    ul {
      @extend %display-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      padding: 20px;

      li {
        background: rgba(255, 255, 255, 0.3);
        font-size: 0.7rem;
        font-weight: normal;
        margin: 5px;
        padding: 5px 10px;
        border-radius: 5px;

        @supports (backdrop-filter: blur()) {
          backdrop-filter: blur(4px);
        }
      }
    }
  }

  .images {
    width: 100%;
    height: 100%;
    position: absolute;
    @extend %display-flex;
    justify-content: flex-start;
    overflow: hidden;

    .image {
      position: absolute;
      top: -10%;
      left: 8%;
    }
  }
}
</style>

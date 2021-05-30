<template>
  <div class="hero" ref="hero" id="hero">
    <div class="designer" ref="designer">
      <div class="hero-overlay ">
        <div>I</div>
        <div>Design</div>
        <div>Elegant</div>
        <div>UI</div>
      </div>
    </div>
    <div class="developer" ref="developer">
      <div class="hero-overlay ">
        <div>And</div>
        <div>Bring</div>
        <div>Them</div>
        <div>Alive</div>
      </div>
    </div>
    <!-- 
    <a href="#contact" class="chat-link">
      <div class="btn btn-chat">
        <p>Let's Talk</p>
      </div>
    </a> -->
  </div>
</template>

<script>
export default {
  methods: {
    chatButtonClicked() {
      this.$router.push({ path: "/contact" });
    }
  },
  mounted() {
    this.addHeroObserver();
  },
  methods: {
    addHeroObserver() {
      let heroCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.$refs.hero.classList.add("animate");
            document.querySelector("#scrollToTop").classList.add("hide");
          } else {
            if (this.$refs.hero) {
              this.$refs.hero.classList.remove("animate");
              document.querySelector("#scrollToTop").classList.remove("hide");
            }
          }
        });
      };
      let heroObserver = new IntersectionObserver(heroCallback, {});
      heroObserver.observe(this.$refs.hero);
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  @extend %display-flex;
  width: 100%;
  height: fit-content;
  justify-items: flex-start;

  .hero-overlay {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.493);
    padding: 45px;
    transition: all 0.3s ease;
    font-family: $poiret;
    font-size: 3.5rem;
    font-weight: 100;
    color: #252525;
    letter-spacing: 1.5rem;
    line-height: 10rem;

    @supports (backdrop-filter: blur()) {
      background: rgba(255, 255, 255, 0.267);
      backdrop-filter: blur(4px);
    }
  }

  .designer,
  .developer {
    @extend %display-flex;
    height: calc(100vh - #{$navbar-height});
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 60vh, 60vh, 190%;
    background-position: center 62%, center 62%, bottom center;
    will-change: background-position;
    font-family: $poiret;
    position: relative;
    z-index: -10;
  }

  .designer {
    background-image: url("/images/home/hero/designer.svg"),
      url("/images/home/hero/base.svg"), url("/bg/hero-bg.svg");
  }

  .developer {
    background-image: url("/images/home/hero/developer.png"),
      url("/images/home/hero/base.svg"), url("/bg/hero-bg.svg");
  }
}

.hero.animate {
  .designer,
  .developer {
    animation: animatedBackground 1.5s ease infinite alternate;
  }
}

@keyframes animatedBackground {
  0% {
    background-position: center 55%, center 50%, center;
  }

  100% {
    background-position: center 65%, center 70%, center;
  }
}
</style>

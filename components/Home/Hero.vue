<template>
  <div class="hero" ref="hero" id="hero">
    <div class="hero-overlay overlay-front">
      <div>I</div>
      <div>Design</div>
      <div>Elegant</div>
      <div>UI</div>
    </div>
    <div class="hero-overlay overlay-back">
      <div>I</div>
      <div>Design</div>
      <div>Elegant</div>
      <div>UI</div>
    </div>

    <div class="designer" ref="designer"></div>
    <div class="developer" ref="developer"></div>
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
    this.addDesignerObserver();
    this.addDeveloperObserver();
    this.addScrollDetect();
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
    },
    addDesignerObserver() {
      let overlayCallback = (entries, observer) => {
        entries.forEach(entry => {
          let ratio = entry.intersectionRatio;

          if (entry.isIntersecting) {
            //console.log("Designer Intersecting " + ratio);
            this.$refs.hero.classList.remove("hide-overlay");
          } else {
            //console.log("Designer Not Intersecting " + ratio);
            this.$refs.hero.classList.add("hide-overlay");
          }
        });
      };
      let overlayObserver = new IntersectionObserver(overlayCallback, {
        threshold: [0.95]
      });
      overlayObserver.observe(this.$refs.designer);
    },
    addDeveloperObserver() {
      let overlayCallback = (entries, observer) => {
        entries.forEach(entry => {
          let ratio = entry.intersectionRatio;
          let direction = "";

          var st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > window.lastScroll) {
            direction = "down";
          } else {
            direction = "up";
          }
          window.lastScroll = st <= 0 ? 0 : st;

          if (entry.isIntersecting) {
            console.log(`Dveloper Intersecting  ${ratio} ${direction}`);
          } else {
            console.log(`Dveloper Not Intersecting  ${ratio} ${direction}`);
          }
        });
      };
      let overlayObserver = new IntersectionObserver(overlayCallback, {
        threshold: [0.95]
      });
      overlayObserver.observe(this.$refs.developer);
    },
    addScrollDetect() {
      window["lastScroll"] = window.pageYOffset;
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
    position: fixed;
    width: 100%;
    //height: calc(100vh - #{$navbar-height});
    height: calc((100vh - #{$navbar-height}));
    z-index: -11;
    background: rgba(209, 209, 209, 0.24);
    padding: 15px;
    transition: all 0.3s ease;
    top: $navbar-height;
    font-family: $poiret;
    font-size: 5rem;
    font-weight: 100;
    color: $black;
    letter-spacing: 1.3rem;
    line-height: 10rem;
    will-change: opacity;
  }

  .overlay-front {
    z-index: -9;
    @supports (backdrop-filter: blur()) {
      backdrop-filter: blur(4px);
    }
  }

  .overlay-back {
    opacity: 0;
  }

  .designer,
  .developer {
    @extend %display-flex;
    height: calc(100vh - #{$navbar-height});
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 60vh;
    background-position: center 62%;
    will-change: background-position;
    font-family: $poiret;
    position: relative;
    z-index: -10;
  }

  .designer {
    background-image: url("/images/home/hero/designer.svg"),
      url("/images/home/hero/base.svg");
  }

  .developer {
    background-image: url("/images/home/hero/developer.png"),
      url("/images/home/hero/base.svg");
  }
}

.hide-overlay {
  .overlay-front {
    opacity: 0;
  }
  .overlay-back {
    opacity: 1;
    color: rgba(87, 87, 87, 0.76);
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
    background-position: center 55%, center 50%;
  }

  100% {
    background-position: center 65%, center 70%;
  }
}
</style>

<template>
  <div class="hero" ref="hero" id="hero">
    <div class="overlay">
      <div>I ❤️ To</div>
      <div>Design</div>
      <div>Elegant</div>
      <div>UI/UX</div>
    </div>
    <div class="designer" ref="designer"></div>
    <div class="developer" ref="developer"></div>

    <div
      class="scroll"
      v-html="require(`/static/bg/scroll.svg?raw`)"
      ref="scroll"
    />
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
    this.addScrollDetect();
    this.addDeveloperObserver();
  },
  methods: {
    addHeroObserver() {
      let heroCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.$refs.hero.classList.remove("hide");
            document.querySelector("#scrollToTop").classList.add("hide");
            this.$refs.scroll.style.opacity = 1;
          } else {
            if (this.$refs.hero) {
              this.$refs.hero.classList.add("hide");
              document.querySelector("#scrollToTop").classList.remove("hide");
              this.$refs.scroll.style.opacity = 0;
            }
          }
        });
      };
      let heroObserver = new IntersectionObserver(heroCallback, {});
      heroObserver.observe(this.$refs.hero);
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
            //console.log(`Dveloper Intersecting  ${ratio} ${direction}`);
            if (direction == "down")
              this.changeOverlayText(["And", "Bring", "Them", "Alive"]);
          } else {
            //console.log(`Dveloper Not Intersecting  ${ratio} ${direction}`);
            if (direction == "up" && ratio != 0)
              this.changeOverlayText(["I ❤️ To", "Design", "Elegant", "UI/UX"]);
          }
        });
      };
      let overlayObserver = new IntersectionObserver(overlayCallback, {
        threshold: [0.5]
      });
      overlayObserver.observe(this.$refs.developer);
    },
    addScrollDetect() {
      window["lastScroll"] = window.pageYOffset;
    },
    changeOverlayText(text) {
      document.querySelector(".overlay").children.forEach((div, index) => {
        setTimeout(() => {
          div.classList.toggle("flip");
          setTimeout(() => {
            div.innerText = text[index];
            div.classList.toggle("flip");
          }, 650);
        }, index * 150);
      });
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
  position: relative;

  .overlay {
    @extend %display-flex;
    justify-content: flex-start;

    width: 100%;
    height: calc(100vh - #{$navbar-height});
    background: rgba(212, 212, 212, 0.39);
    padding: 45px;
    transition: all 0.3s ease;
    font-family: $poiret;
    font-size: 3.5rem;
    font-weight: bold;
    color: #252525;
    letter-spacing: 1rem;
    line-height: 10rem;
    position: fixed;
    top: $navbar-height;
    left: 0;
    z-index: -5;
    text-transform: uppercase;

    @supports (backdrop-filter: blur()) {
      backdrop-filter: blur(2px);
    }
    @media (min-width: 800px) {
      flex-flow: row wrap;
      width: 60%;
      line-height: 6rem;
      align-content: center;
      border-top-right-radius: 35px;
      border-bottom-right-radius: 35px;
    }

    div {
      width: 100%;
      margin: 0 10px;
      padding: 0 10px;
      transition: all 0.4s ease;

      @media (min-width: 800px) {
        width: auto;
      }
    }

    .flip {
      transform: rotateX(90deg);
    }
  }

  .designer,
  .developer {
    @extend %display-flex;
    height: calc(100vh - #{$navbar-height});
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 60vh, 60vh, 200%;
    background-position: center;
    will-change: background-position;
    font-family: $poiret;
    position: relative;
    z-index: -10;

    @media (min-width: 800px) {
      background-size: 60vh, 60vh, 100%;
      background-position: right center, right center, center;
    }
  }

  .designer {
    background-image: url("/images/home/hero/designer.svg"),
      url("/images/home/hero/base.svg"), url("/bg/hero-bg.svg");
  }

  .developer {
    background-image: url("/images/home/hero/developer.png"),
      url("/images/home/hero/base.svg"), url("/bg/hero-bg.svg");
  }

  .scroll {
    position: fixed;
    right: 40px;
    bottom: -15px;
  }
}

.hero.animate {
  .designer,
  .developer {
    animation: animatedBackground 1.5s ease infinite alternate;

    @media (min-width: 800px) {
      animation: desktopAnimatedBackground 1.5s ease infinite alternate;
    }
  }
}

.hero.hide {
  .designer,
  .developer {
    background-image: none;
  }
}

@keyframes animatedBackground {
  0% {
    background-position: center 55%, center 50%, right;
  }

  100% {
    background-position: center 65%, center 70%, right;
  }
}

@keyframes desktopAnimatedBackground {
  0% {
    background-position: right 85%, right 80%, center;
  }

  100% {
    background-position: right 95%, right 100%, center;
  }
}
</style>

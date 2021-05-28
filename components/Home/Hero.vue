<template>
  <div class="hero" ref="hero" id="hero">
    <div class="overlay">
      <p>I</p>
      <p>Design</p>
      <p>Elegant</p>
      <p>UI</p>
    </div>
    <div class="designer"></div>
    <div class="developer"></div>
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
    let callback = (entries, observer) => {
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
    let observer = new IntersectionObserver(callback, {});
    observer.observe(this.$refs.hero);
  }
};
</script>

<style lang="scss" scoped>
.hero {
  @extend %display-flex;
  width: 100%;
  height: fit-content;
  justify-items: flex-start;

  .overlay {
    position: fixed;
    width: 100%;
    height: calc(100vh - #{$navbar-height});
    top: $navbar-height;
    z-index: -5;
    background: rgba(209, 209, 209, 0.384);
    padding: 15px;
    transition: all 1s ease;

    @supports (backdrop-filter: blur()) {
      backdrop-filter: blur(4px);
    }

    p {
      font-family: $poiret;
      font-size: 6rem;
      font-weight: 100;
      color: $black;
      letter-spacing: 0.9rem;
      line-height: 10rem;
    }
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
    z-index: -6;
  }

  .designer {
    background-image: url(/images/home/hero/designer.svg),
      url("/images/home/hero/base.svg");
  }

  .developer {
    background-image: url(/images/home/hero/developer.png),
      url("/images/home/hero/base.svg");
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

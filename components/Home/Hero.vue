<template>
  <div class="hero" ref="hero" id="hero">
    <div class="designer">
      <div class="empty-info"></div>
      <p class="info">I Design Elegant UI</p>
    </div>
    <div class="developer">
      <p class="info">And Bring Them To Life</p>
      <div class="empty-info"></div>

      <a href="#contact" class="chat-link">
        <div class="btn btn-chat">
          <p>Let's Talk</p>
        </div>
      </a>
    </div>
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
          this.$refs.hero.classList.remove("animate");
          document.querySelector("#scrollToTop").classList.remove("hide");
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
    font-family: $bad-script;

    .empty-info {
      width: 100%;
      height: 100%;
    }

    .info {
      font-size: 1.7rem;
      width: 100%;
      text-align: center;
      padding: 20px 0;
      font-weight: normal;
      font-family: $poiret;

      @supports (backdrop-filter: blur()) {
        backdrop-filter: blur(4px);
      }

      @media (min-width: 650px) {
        font-size: 2.1rem;
      }

      @media (min-width: 1000px) {
        font-size: 2.5rem;
      }
    }
  }

  .designer {
    background-image: url(/images/home/hero/designer.svg),
      url("/images/home/hero/base.svg");
    justify-content: space-between;

    .info {
      background: rgba(156, 156, 156, 0.425);
    }
  }

  .developer {
    background-image: url(/images/home/hero/developer.png),
      url("/images/home/hero/base.svg");
    justify-content: space-between;
    color: white;
    position: relative;

    .info {
      background: rgba(58, 58, 58, 0.425);
    }

    .chat-link {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      height: auto;

      .btn-chat {
        position: absolute;
        bottom: -6.5%;
      }
    }
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

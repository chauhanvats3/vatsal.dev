<template>
  <div class="hero" ref="hero" id="hero">
    <div class="designer">
      <p class="info">I Design Elegant UI</p>
    </div>
    <div class="developer">
      <p class="info">And Bring Them To Life</p>

      <a href="#contact" class="chat-link">
        <div class="btn btn-chat">
          <p>Let's Chat</p>
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
          console.log("Intersecting");
          this.$refs.hero.classList.add("animate");
          document.querySelector("#scrollToTop").classList.add("hide");
        } else {
          console.log("Not Intersecting");
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
  font-size: 3.5rem;
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

    p {
      font-size: 2.5rem;
      width: 100%;
      text-align: center;
      padding: 20px 0;
    }
  }

  .designer {
    background-image: url(/images/home/hero/designer.svg),
      url("/images/home/hero/base.svg");
    font-family: $bad-script;
    justify-content: flex-end;
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
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;

      .btn-chat {
        position: absolute;
        bottom: -4%;

        p {
          color: $blue-metal;
          padding: 0;
          font-size: 2.5rem;
        }
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

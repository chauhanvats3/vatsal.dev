<template>
  <div class="home">
    <div class="designer">
      <p class="info">I Design Elegant UI</p>
    </div>
    <div class="developer">
      <p class="info">And Bring Them To Life</p>

      <div class="btn btn-chat" @click="chatButtonClicked">
        <p>Let's Chat</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    chatButtonClicked() {
      this.$router.push({ path: "/contact" });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
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
    animation: animatedBackground 1.5s ease infinite alternate;
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
      url("/images/home/hero/base-shadow.svg");
    font-family: $bad-script;
    justify-content: flex-end;
    .info {
      background: rgba(156, 156, 156, 0.425);
    }
  }

  .developer {
    background-image: url(/images/home/hero/developer.png),
      url("/images/home/hero/base-shadow.svg");
    justify-content: space-between;
    color: white;
    position: relative;

    .info {
      background: rgba(58, 58, 58, 0.425);
    }

    .btn-chat {
      position: absolute;
      bottom: -4%;

      p {
        color: $blue-metal;
        padding: 0;
        font-size: 1.7rem;
      }
    }
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

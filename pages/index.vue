<template>
  <div class="home">
    <div class="designer">
      <p class="info">I Design Elegant UI</p>
    </div>
    <div class="developer">
      <p class="info">And Bring Them To Life</p>

      <div class="btn btn-chat">
        <p>Let's Chat</p>
      </div>
    </div>
  </div>
</template>

<script>
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
    .info {
      background: rgba(58, 58, 58, 0.425);
    }
    .btn-chat {
      font-family: $bad-script;
      background: $black;
      padding: 10px 35px;
      margin: 15px;
      border-radius: 1.3rem;
      p {
        color: $blue-metal;
        padding: 0;
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

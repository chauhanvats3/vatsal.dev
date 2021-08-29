<template>
  <div class="carousel" ref="carousel">
    <div class="slider">
      <div class="slide active" id="slide-1">
        <p>Slide1</p>
      </div>
      <div class="slide" id="slide-2">
        <p>Slide2</p>
      </div>
      <div class="slide" id="slide-3">
        <p>Slide3</p>
      </div>
      <div class="slide" id="slide-4">
        <p>Slide4</p>
      </div>
      <div class="slide" id="slide-5">
        <p>Slide5</p>
      </div>
    </div>
    <div class="slide-nav">
      <div
        class="btn"
        @click="
          () => {
            goToSlide('prev');
          }
        "
      >
        <
      </div>
      <div
        class="btn"
        @click="
          () => {
            goToSlide('next');
          }
        "
      >
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToSlide(whereTo) {
      if (!whereTo) return;

      let activeSlide = this.$refs.carousel.querySelector(".slide.active");

      let scrollToElement;
      activeSlide.classList.remove("active");

      if (whereTo == "prev") {
        if (!activeSlide.previousElementSibling) {
          scrollToElement = activeSlide.parentElement.lastElementChild;
        } else {
          scrollToElement = activeSlide.previousElementSibling;
        }
      } else if (whereTo == "next") {
        if (!activeSlide.nextElementSibling) {
          scrollToElement = activeSlide.parentElement.firstElementChild;
        } else {
          scrollToElement = activeSlide.nextElementSibling;
        }
      } else {
      }

      scrollToElement.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
      });

      scrollToElement.classList.add("active");
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  min-height: 200px;
  position: relative;

  .slider {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    .slide {
      width: 600px;
      height: 300px;
      @extend %display-flex;
      flex-shrink: 0;
      background: rgb(67, 188, 224);
      border-radius: 15px;
      margin: 20px;
      color: black;
      transition: all 0.5s ease-in-out;
      transform-origin: center;
      scroll-snap-align: center;
    }

    .slide.active {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
    }

    .slide:not(.active) {
      opacity: 0.65;
    }
  }

  .slider::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .slider::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
  .slider::-webkit-scrollbar-track {
    background: transparent;
  }

  .slide-nav {
    .btn {
      @extend %display-flex;
      border-radius: 50%;
      padding: 0px;
      width: 50px;
      height: 50px;
      position: absolute;
      top: 50%;
      margin-top: -25px;
      z-index: 2;
      transition: all 0.3s ease;
    }
    .btn:nth-of-type(2) {
      right: 0;
    }

    .btn:hover {
      transform: scale(1.1);
    }
  }
}
</style>

<template>
  <div class="intro" ref="intro">
    <div class="imageGroup">
      <BlobImage image="/images/vatsal.jpg" />
    </div>
    <div class="content">
      <p>This Is Me,</p>
      <h1><strong>Vatsal</strong> Chauhan</h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("arrive");
          console.log(entry);
        }
      });
    };
    let observer = new IntersectionObserver(callback, { threshold: 0.3 });
    observer.observe(this.$refs.intro);
  }
};
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  @extend %display-flex;
  width: min(90%, 60ch);
  height: 170px;
  margin: 30px 0;
  will-change: transform, opacity;
  transform: scale(0.9);
  opacity: 0;
  transition: all 0.5s ease-in;
  transition-delay: 0.5s;
  .imageGroup {
    position: absolute;
    width: 170px;
    height: 170px;
    left: -25px;
    top: -25px;

    @media (min-width: 1000px) {
      width: 250px;
      height: 250px;

      left: -50px;
      top: -70px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    padding-left: 180px;
    @extend %display-flex;
    align-items: flex-start;
    p {
      font-size: 1.6rem;
    }
    h1 {
      font-size: 2rem;
      font-weight: 100;
      color: $blue-dark;
      font-family: $poiret;
    }

    @media (min-width: 1000px) {
      padding-left: 280px;
    }
  }
}
.arrive {
  transform: scale(1);
  opacity: 1;
}
</style>

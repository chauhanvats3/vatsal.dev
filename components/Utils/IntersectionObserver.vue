<template>
  <div class="intersectionObserver"></div>
</template>

<script>
export default {
  data() {
    return {
      fadeOptions: {
        threshold: 0.7
      }
    };
  },

  mounted() {
    let fadeElements = document.querySelectorAll(".onShowEffect");
    let fadeObserver = new IntersectionObserver(
      this.handleIntersection,
      this.fadeOptions
    );

    fadeElements.forEach(ele => {
      fadeObserver.observe(ele);
    });
  },
  methods: {
    handleIntersection(entries, observer) {
      entries.forEach(entry => {
        let target = entry.target;
        if (entry.isIntersecting) {
          console.log(target);
          target.classList.add("intersecting");
        } else if (!entry.isIntersecting && target.dataset.repeat === "true") {
          target.classList.remove("intersecting");
        }
      });
    }
  }
};
</script>

<style lang="scss">
.onShowEffect {
  --duration: 0.5s;
  --delay: 0.2s;
  will-change: transform, opacity;
  transition: all 0.1s ease-in;
  transition-delay: var(--delay);
}

.fade {
  transform: translateY(5%);
  opacity: 0;
}

.fade.intersecting {
  transform: translateY(0);
  opacity: 1;
  transition: all var(--duration) ease-in;
}
</style>

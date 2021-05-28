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
    let handler = this.handleIntersection;
    let options = this.fadeOptions;

    let fadeElements = document.querySelectorAll(".onShowEffect");
    console.log(fadeElements);

    let fadeObserver = new IntersectionObserver(handler, options);

    fadeElements.forEach(ele => {
      ele.classList.add("enable");
      fadeObserver.observe(ele);
    });
  },
  methods: {
    handleIntersection(entries, observer) {
      entries.forEach(entry => {
        let target = entry.target;

        if (entry.isIntersecting) {
          target.classList.remove("enable");
          target.classList.add("intersecting");
        } else if (!entry.isIntersecting && target.dataset.repeat === "true") {
          target.classList.add("enable");
          target.classList.remove("intersecting");
        } else {
          target.classList.add("enable");
          console.log("Not Intersecting");
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

.fade.enable {
  transform: translateY(5%);
  opacity: 0;
}

.fade.intersecting {
  transform: translateY(0);
  opacity: 1;
  transition: all var(--duration) ease-in;
}
</style>

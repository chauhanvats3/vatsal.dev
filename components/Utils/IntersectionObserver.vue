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
    document.addEventListener("DOMContentLoaded", () => {
      console.log("DOM CONTENT LOADED");
    });

    /* let handler = this.handleIntersection;
    let options = this.fadeOptions;
    console.log("mounted");
    console.log(fadeElements);

    let fn = () => {
      let fadeElements = document.querySelectorAll(".onShowEffect");
      let fadeObserver = new IntersectionObserver(handler, options);

      fadeElements.forEach(ele => {
        fadeObserver.observe(ele);
      });
    }; */
  },
  methods: {
    handleIntersection(entries, observer) {
      entries.forEach(entry => {
        let target = entry.target;
        console.log(target);

        if (entry.isIntersecting) {
          target.classList.add("intersecting");
        } else if (!entry.isIntersecting && target.dataset.repeat === "true") {
          target.classList.remove("intersecting");
        } else {
          console.log("Not Intersecting");
        }
      });
    },
    addObserver(handler, options) {},
    docReady(fn) {
      // see if DOM is already available
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

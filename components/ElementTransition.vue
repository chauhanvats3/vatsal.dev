<template>
  <div class="elementTransition" ref="elementTransition" :style="cssProps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["options"],
  computed: {
    cssProps() {
      let tempOptions;
      if (!this.options) {
        tempOptions = {
          delay: "0",
          duration: "0.5",
          type: "fade"
        };
      } else {
        tempOptions = this.options;
      }
      let delay = tempOptions.delay ? tempOptions.delay : 0;
      let duration = tempOptions.duration ? tempOptions.duration : 0.5;
      return {
        "--delay": `${delay}s`,
        "--duration": `${duration}s`
      };
    }
  },
  mounted() {
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        let tempOptions;
        if (!this.options) {
          tempOptions = {
            type: "fade"
          };
        } else {
          tempOptions = this.options;
        }

        console.log(this.options);
        if (entry.isIntersecting) {
          this.$refs.elementTransition.classList.add(
            tempOptions.type ? tempOptions.type : "fade"
          );
        }
      });
    };
    let observer = new IntersectionObserver(callback, { threshold: 0.8 });
    observer.observe(this.$refs.elementTransition);
  }
};
</script>

<style lang="scss" scoped>
.elementTransition {
  width: 100%;
  @extend %display-flex;
  will-change: transform, opacity;

  transition: all var(--duration) ease-in;
  transition-delay: var(--delay);
  transform: translateY(5%);
  opacity: 0;
}

.elementTransition.fade {
  transform: translateY(0);
  opacity: 1;
}
</style>

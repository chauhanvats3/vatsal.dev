<template>
  <div class="heading" ref="heading">
    <h1>{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  props: ["heading"],
  mounted() {
    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("arrive");
          console.log(entry);
        }
      });
    };
    let observer = new IntersectionObserver(callback, { threshold: 0.9 });
    observer.observe(this.$refs.heading);
  }
};
</script>

<style lang="scss" scoped>
.heading {
  align-self: flex-start;
  margin: 50px 10px;

  h1 {
    font-weight: 100;
    font-size: 3rem;
    color: $blue-dark;
    padding: 10px;
    text-transform: uppercase;
  }
  @media (min-width: 1000px) {
    padding-left: 15%;
  }
}
</style>

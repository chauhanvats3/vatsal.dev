<template>
  <div>
    <About />
    <ScrollToTop />
    <IntersectionObserver />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("About Mounted");
  }
};
</script>

<style lang="scss" scoped></style>

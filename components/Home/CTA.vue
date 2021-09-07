<template>
  <div class="cta">
    <div class="btn" @click="buttonClicked">
      <p>Let's Chat</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buttonClicked() {
      this.$router.push({ path: "/contact" });
    }
  }
};
</script>

<style lang="scss" scoped>
.cta {
  width: 100%;
  height: 0%;
  position: relative;
  @extend %display-flex;
  flex-flow: row wrap;
  background: rgba(255, 255, 255, 0);
  transition: all 0.5s ease-in-out;

  @media (min-width: 800px) {
    position: fixed;
    background: transparent;
    width: auto;
    padding: 0;
    left: 45px;
    bottom: 20%;
  }

  @media (min-width: 1400px) {
    bottom: 30%;
  }

  @media (max-width: 800px) {
    z-index: 2;
    .btn {
      position: absolute;
    }
  }
}
</style>

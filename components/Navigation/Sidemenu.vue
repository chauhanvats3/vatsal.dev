<template>
  <div class="sideMenu">
    <ul>
      <li v-for="item in menuItems" :key="item.title" @click="itemClicked">
        <NuxtLink :to="item.link">
          <p class="menuItem">{{ item.title }}</p>
          <div class="line"></div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["menuItems"],
  methods: {
    itemClicked() {
      document.querySelector(".hamburger").classList.toggle("active");
      this.$emit("itemClicked");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.sideMenu {
  width: 100%;
  min-height: 100%;
  background: $charcoal;
  background-size: 100%;

  ul {
    @extend %display-flex;
    align-items: center;
    padding: 30px;
    width: 100%;

    li {
      margin: 20px;
      font-size: 2rem;
      position: relative;

      p {
        font-family: $poiret;
        color: white;
        letter-spacing: 0.2rem;
      }
    }

    .line {
      position: absolute;
      width: 0%;
      height: 3px;
      background: $blue-light;
      bottom: 0px;
      z-index: 105;
      transition: all 0.5s ease;
      transform-origin: center;
    }

    .nuxt-link-exact-active .line {
      width: 100%;
    }
  }

  @media (min-width: 1250px) {
    display: none;
  }
}
</style>

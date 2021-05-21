<template>
  <div class="sideMenu">
    <ul>
      <li v-for="item in menuItems" :key="item.title" @click="itemClicked">
        <NuxtLink :to="item.link">
          <p class="menuItem">{{ item.title }}</p>
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
    align-items: flex-start;
    padding: 30px;
    width: 100%;

    li {
      width: 100%;
      margin: 20px;
      font-size: 2rem;

      p {
        font-family: $poiret;
        color: white;
      }
    }
  }
}
</style>

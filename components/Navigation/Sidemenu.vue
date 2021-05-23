<template>
  <div class="sideMenu">
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="item.title"
        @click="itemClicked"
      >
        <NuxtLink :to="item.link">
          <ElementTransition
            :options="{ delay: `${(index * 1.1) / 10}`, repeat: true }"
          >
            <p class="menuItem">{{ item.title }}</p>
          </ElementTransition>
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

      p {
        font-family: $poiret;
        color: white;
      }
    }
  }
}
</style>

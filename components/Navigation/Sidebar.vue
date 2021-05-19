<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in menuItems" :key="item.title">
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
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  min-height: 100%;
  background: url(/images/low-poly-grid-sidebar-dark.svg);
  background-size: 400%;

  ul {
    @extend %display-flex;
    align-items: flex-start;
    padding: 30px;
    width: 100%;

    li {
      width: 100%;
      margin: 20px;
      font-size: 4rem;

      p {
        color: white;
      }
    }
  }
}
</style>

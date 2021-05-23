<template>
  <ElementTransition>
    <div class="heading" ref="heading">
      <h1>{{ heading }}</h1>
    </div>
  </ElementTransition>
</template>

<script>
export default {
  props: ["heading"]
};
</script>

<style lang="scss" scoped>
.heading {
  align-self: flex-start;
  margin: 10px;

  h1 {
    font-weight: 100;
    font-size: 3rem;
    color: $blue-dark;
    padding: 10px;
    text-transform: uppercase;

    @media (max-width: 1000px) {
      font-size: 2.2rem;
    }
  }
  @media (min-width: 1000px) {
    padding-left: 15%;
  }
}
</style>

<template>
  <div class="heading onShowEffect fade" ref="heading">
    <h2 v-if="type === 'h2'"><slot> </slot></h2>
    <h3 v-else-if="type === 'h3'"><slot></slot></h3>
    <h4 v-else-if="type === 'h4'"><slot></slot></h4>
    <h5 v-else-if="type === 'h5'"><slot></slot></h5>
    <h6 v-else-if="type === 'h6'"><slot></slot></h6>
    <h1 v-else><slot> </slot></h1>
  </div>
</template>

<script>
export default {
  props: ["type"]
};
</script>

<style lang="scss" scoped>
.heading {
  align-self: flex-start;
  margin: 10px;
  width: 100%;

  * {
    font-weight: 100;
    color: $blue-dark;
    padding: 10px;
    text-transform: uppercase;
  }

  h1 {
    font-size: 3rem;

    @media (max-width: 1000px) {
      font-size: 2.2rem;
    }
  }

  h3 {
    width: 100%;
    font-size: 2rem;
    padding-left: 10%;
    @media (max-width: 1000px) {
      font-size: 1.7rem;
      padding-left: 5%;
    }
  }

  @media (min-width: 1000px) {
    padding-left: 15%;
  }
}
</style>

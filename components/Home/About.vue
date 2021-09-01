<template>
  <div class="about">
    <Heading>This is me</Heading>
    <HomeIDCard />

    <NuxtLink to="/about">
      <p class="btn">About Me</p>
    </NuxtLink>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  @extend %display-flex;
  align-items: center;
  background: #f3f3f3;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 100px 0 100px 0;
  z-index: 2;
  margin-top: -20px;
  position: relative;
}
</style>

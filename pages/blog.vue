<template>
  <div class="blog">
    <Metatags :metadata="metadata" />

    Coming Soon
  </div>
</template>

<script>
export default {
  //TODO: Custom Parallax , Blob Animation
  data() {
    return {
      metadata: {
        title: "Blog",
        description: "Blogposts Coming Soon",
        image: "https://source.unsplash.com/random",
        location: "",
        creator: "",
        site: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.blog {
  @extend %display-flex;
  width: 100%;
  height: 100vh;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-family: $poiret;
  color: $blue-dark;
  padding: 10px;
  letter-spacing: 0.2rem;
  word-spacing: 0.8rem;
}
</style>

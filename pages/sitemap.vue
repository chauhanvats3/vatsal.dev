<template>
  <div class="sitemap">
    <Heading>Sitemap </Heading>
    <div class="links">
      <NuxtLink to="/">
        <div class="overlay">
          <p>Home</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/blog">
        <div class="overlay">
          <p>Blog</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/contact">
        <div class="overlay">
          <p>Contact</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/projects">
        <div class="overlay">
          <p>Portfolio</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/testimonials">
        <div class="overlay">
          <p>Testimonials</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sitemap {
  @extend %display-flex;
  flex-flow: column wrap;
  width: 100%;
  min-height: 100vh;
  font-size: 2.5rem;
  font-family: $poiret;
  text-transform: uppercase;
  padding: 10px;
  .heading {
    align-self: center;
    padding: 0;
  }

  .links {
    @extend %display-flex;
    flex-flow: row wrap;
    a {
      width: 40vw;
      height: 350px;
      @extend %display-flex;
      border-radius: 20px;
      margin: 2vw;
      transition: all 0.4s ease;

      @media (max-width: 800px) {
        width: 95vw;
      }
    }
    a:hover {
      transform: scale(1.1);
    }

    a:nth-of-type(1) {
      background: url("https://source.unsplash.com/featured/?home");
      background-position: center;
      background-size: cover;
    }
    a:nth-of-type(2) {
      background: url("https://source.unsplash.com/random/?tech");
      background-position: center;
      background-size: cover;
    }
    a:nth-of-type(3) {
      background: url("https://source.unsplash.com/random/?landscape");
      background-position: center;
      background-size: cover;
    }
    a:nth-of-type(4) {
      background: url("https://source.unsplash.com/featured/?tool");
      background-position: center;
      background-size: cover;
    }
    a:nth-of-type(5) {
      background: url("https://source.unsplash.com/featured/");
      background-position: center;
      background-size: cover;
    }

    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(68, 68, 68, 0.425);
      color: white;
      letter-spacing: 0.2rem;
      border-radius: 20px;
      @extend %display-flex;
      @supports (backdrop-filter: blur()) {
        backdrop-filter: blur(2px);
      }
    }
  }
}
</style>

<template>
  <div>
    <Metatags :metadata="metadata" />
    <HomeHero />
    <ScrollToTop />
    <HomeCTA />
    <HomeProjects />
    <HomeTestimonials />
    <HomeAbout />
    <HomeContact />
    <IntersectionObserver />
  </div>
</template>

<script>
export default {
  data() {
    return {
      metadata: {
        title: "Home",
        description:
          "Hi! I am Vatsal Chauhan. I am a freelance Designer/Developer. I ❤️ to design Elegant UI/UX and make them come alive.",
        image: "https://vatsal.dev/images/screenshots/home.webp",
        location: "",
        creator: "",
        site: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>

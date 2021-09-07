<template>
  <div class="contactPage">
    <Metatags :metadata="metadata" />
    <HomeContact />
    <ScrollToTop />
    <IntersectionObserver />
  </div>
</template>

<script>
export default {
  data() {
    return {
      metadata: {
        title: "Contact",
        description:
          "Need My Expertise? Message me and I will contact you right away! We can also connect on social media of your choice.",
        image: "https://vatsal.dev/images/screenshots/contact.webp",
        location: "",
        creator: "",
        site: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.contactPage {
  min-height: 100vh;
}
</style>

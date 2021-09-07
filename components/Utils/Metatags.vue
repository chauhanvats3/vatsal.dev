<template>
  <div class="metatags" v-if="false"></div>
</template>

<script>
export default {
  mounted() {
    console.log(this.metadata);
  },
  props: ["metadata"],
  head() {
    return {
      title: this.metadata.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.metadata.description
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content:
            this.metadata.title + " | Vatsal Chauhan , Designer / Developer"
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: this.metadata.site
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: this.metadata.creator
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            this.metadata.title + " | Vatsal Chauhan , Designer / Developer"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.metadata.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.metadata.image
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Vatsal Chauhan"
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website"
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://vatsal.dev" + this.metadata.location
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            this.metadata.title + " | Vatsal Chauhan , Designer / Developer"
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.metadata.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

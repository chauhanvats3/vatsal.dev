<template>
  <div class="metatags" v-if="false"></div>
</template>

<script>
export default {
  props: ["metadata"],
  head() {
    return {
      title: this.metadata.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.metadata.description,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content:
            this.metadata.title + " | Vatsal Chauhan , Designer / Developer",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: this.metadata.site,
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: this.metadata.creator,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            this.metadata.title + " | Vatsal Chauhan , Designer / Developer",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.metadata.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.metadata.image,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Vatsal Chauhan",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://vatsal.dev" + this.metadata.location,
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            this.metadata.title + " | Vatsal Chauhan , Designer / Developer",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.metadata.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

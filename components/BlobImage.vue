<template>
  <div class="blobImage" :style="cssProps">
    <img :src="image" alt="" />
  </div>
</template>

<script>
export default {
  props: ["image"],
  computed: {
    cssProps() {
      var rand1 = this.getRandomNumber();
      return {
        "--rand1": `url(/blobs/back/${rand1}.svg)`
      };
    }
  },
  methods: {
    getRandomNumber() {
      let res = Math.ceil(Math.random() * 100) % 12;
      res = res < 1 ? this.getRandomNumber() : res;
      return res;
    }
  }
};
</script>

<style lang="scss" scoped>
.blobImage {
  width: 100%;
  height: 100%;
  background-size: 1%;
  background-image: var(--rand1);
  -moz-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15))
    drop-shadow(0 6px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05));
  -ms-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15))
    drop-shadow(0 6px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05));
  -o-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15))
    drop-shadow(0 6px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05));
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15))
    drop-shadow(0 6px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05));

  background-repeat: no-repeat;
  background-position: center;

  img {
    width: 120%;
    height: 120%;
    mask: var(--rand1);
    -webkit-mask-box-image: var(--rand1);
  }
}
</style>

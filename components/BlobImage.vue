<template>
  <div class="blobImage drop-shadow" :style="cssProps">
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

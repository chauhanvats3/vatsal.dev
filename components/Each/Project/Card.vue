<template>
  <div class="projectCard" :style="cssProps" @click="handleClick">
    <div class="title">
      <p>{{ dataset.title }}</p>
      <a :href="dataset.link" target="_blank" @click.stop
        ><img src="/icons/link.svg" alt=""
      /></a>
    </div>
    <div class="pills">
      <ul>
        <li v-for="pill in dataset.pills" :key="pill">{{ pill }}</li>
      </ul>
    </div>
    <div class="images">
      <img :src="dataset.bgImage" alt="" class="image" />
      <img :src="dataset.bgBase" alt="" class="base" />
      <img :src="dataset.bgShadow" alt="" class="shadow" />
    </div>
  </div>
</template>
 
<script>
export default {
  props: ["dataset"],
  computed: {
    cssProps() {
      return {
        "--bg-color": this.dataset.bgColor,
        "--bg-image": `url("${this.dataset.bgImage}")`,
        "--bg-base": `url("${this.dataset.bgBase}")`,
        "--bg-shadow": `url("${this.dataset.bgShadow}")`,
      };
    },
  },
  methods: {
    handleClick() {
      this.$router.push({ path: "/portfolio" });
    },
  },
};
</script>
 
<style lang='scss' scoped>
.projectCard {
  @extend %display-flex;
  background: var(--bg-color);
  border-radius: 20px;
  width: min(90%, 400px);
  min-height: 500px;
  justify-content: space-between;
  margin: 30px;
  position: relative;
  cursor: pointer;

  .title {
    width: 100%;
    @extend %display-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: 2rem;
    font-family: $bad-script;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.3);
    border-top-left-radius: 21.5px;
    border-top-right-radius: 21.5px;
    z-index: 10;

    @supports (backdrop-filter: blur()) {
      backdrop-filter: blur(4px);
    }
  }

  .pills {
    z-index: 10;

    ul {
      @extend %display-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      padding: 20px;

      li {
        background: rgba(255, 255, 255, 0.3);
        font-size: 1.2rem;
        font-weight: normal;
        margin: 5px;
        padding: 5px 10px;
        border-radius: 5px;

        @supports (backdrop-filter: blur()) {
          backdrop-filter: blur(4px);
        }
      }
    }
  }

  .images {
    width: 100%;
    height: 100%;
    position: absolute;
    @extend %display-flex;
    justify-content: flex-start;
    overflow: hidden;

    img {
      top: 0;
      left: 0;
      height: 80%;
      position: absolute;
    }

    .image {
      z-index: 3;
      top: -10.5%;
      left: 10%;
      height: 79%;
    }
    .base {
      z-index: 2;
      top: -10%;
      left: 10%;
    }
    .shadow {
      top: -15%;
      height: 100%;
      z-index: 1;
    }
  }
}
</style>
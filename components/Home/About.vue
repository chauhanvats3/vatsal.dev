<template>
  <div class="aboutMe" :style="cssProps">
    <div class="heading">
      <h1>A Little Bit About Me</h1>
    </div>
    <div class="intro">
      <div class="imageGroup">
        <div class="blobBack"></div>
        <div class="image"></div>
      </div>
      <div class="content">
        <p>This Is Me,</p>
        <h1>Vatsal Chauhan</h1>
      </div>
    </div>

    <div class="story">
      <div class="subHeading">
        <h1>How'd I get Into Freelance Designing?</h1>
      </div>
      <div class="content">
        <p>
          <span>Same</span> as most folks; <span>Boring old job</span> got
          intolerable amidst <span>pandemic.</span>
        </p>
        <p>
          <span>Decided</span> to jump ship to <span>Designing.</span> Haven’t
          had a day that <span>I can’t wait</span> to get to
          <span>work</span> since then.
        </p>
      </div>
    </div>

    <div class="story">
      <div class="subHeading">
        <h1>Next Up, Hobbies and other stuff i like.</h1>
      </div>
      <div class="content">
        <p><span>Chess.</span> Winning at Chess, to be more precise.</p>
        <p>The smell of food slathered with <span>oregano and garlic.</span></p>
        <p><span>Paradoxes.</span> Challanges. Riddles. Nature.</p>
        <p>
          <span>Astronomy.</span> History. Philosophy.
          <span>Travel.</span> Bizarre Events. <span>Mysteries.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cssProps() {
      var rand1 = this.getRandomNumber();
      var rand2 = this.getRandomNumber();
      return {
        "--rand1": `url(/blobs/back/${rand1}.svg)`,
        "--rand2": `url(/blobs/front/${rand2}.svg)`
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
.aboutMe {
  margin: 50px 0;
  @extend %display-flex;
  .heading {
    align-self: flex-start;

    h1 {
      font-weight: 100;
      font-size: 5rem;
      color: $blue-dark;
      padding: 10px;
      text-transform: uppercase;
    }
  }

  .intro {
    position: relative;
    @extend %display-flex;
    width: min(90%, 80ch);
    height: 170px;

    .imageGroup {
      position: absolute;
      width: 150px;
      height: 150px;
      left: -20px;
      top: -10px;

      .blobBack {
        background-color: #09517c;
        mask: var(--rand1) no-repeat center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
      }

      .image {
        background: url(/images/vatsal.jpg) no-repeat center;
        background-size: 100%;
        mask: var(--rand2) no-repeat center;
        width: 90%;
        height: 90%;
        position: absolute;
        top: 10px;
        left: 15px;
      }
    }

    .content {
      width: 100%;
      height: 100%;
      padding-left: 150px;
      @extend %display-flex;
      align-items: flex-start;
      p {
        font-size: 2.5rem;
      }
      h1 {
        font-size: 3.5rem;
        font-weight: 100;
        color: $green-mid;
        font-family: $bad-script;
      }
    }
  }

  .story {
    @extend %display-flex;
    align-items: flex-start;
    width: min(90%, 80ch);
    .subHeading {
      h1 {
        color: $blue-dark;
        font-size: 3rem;
        font-weight: 100;
        text-transform: uppercase;
      }
    }

    .content {
      width: 100%;
      margin: 5px 0;
      p {
        font-size: 2rem;
        line-height: 3rem;
        margin: 25px 0;
        span {
          font-family: $bad-script;
          color: $green-mid;
        }
      }
    }
  }
}
</style>

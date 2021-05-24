<template>
  <div class="aboutMe">
    <Heading heading="A Little Bit About Me" />
    <AboutIntro />

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
          <span>Cosmology.</span> History. Philosophy.
          <span>Travel.</span> Bizarre Events. <span>Mysteries.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arriveOptionsHeading: {
        type: "fade"
      },
      arriveOptionsIntro: {
        type: "fade",
        delay: "0.5"
      }
    };
  },
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
  @extend %display-flex;

  .story {
    @extend %display-flex;
    align-items: flex-start;
    width: min(90%, 60ch);
    margin: 50px 0 0 0;
    .subHeading {
      h1 {
        color: $blue-dark;
        font-size: 1.5rem;
        font-weight: 100;
        text-transform: uppercase;
      }
    }

    .content {
      width: 100%;
      margin: 5px 0;
      p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 25px 0;
        span {
          font-family: $poiret;
          color: $blue-light;
          font-weight: bold;
        }
      }
    }
  }
}
</style>

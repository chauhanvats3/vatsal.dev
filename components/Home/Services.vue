<template>
  <div class="services" ref="services">
    <div class="heading">
      <h1>I Can</h1>
    </div>
    <div class="content">
      <div class="design">
        <div class="vector">
          <DesignBase />
        </div>
        <div class="text">
          <h1>Design.</h1>
          <p>UI/UX/Logo</p>
        </div>
      </div>
      <div class="develop">
        <div class="text">
          <h1>Develop.</h1>
          <p>Website/Extension</p>
        </div>
        <div class="vector">
          <DevBase />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DevBase from "/static/images/services/dev-base.svg?inline";
import DesignBase from "/static/images/services/design-base.svg?inline";

export default {
  components: { DevBase, DesignBase },
  mounted() {
    let tlDesign = this.createAnimationDesign();
    let tlDevelop = this.createAnimationDevelop();

    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tlDesign.play();
          tlDevelop.play();
        } else {
          tlDesign.pause();
          tlDevelop.pause();
        }
      });
    };
    let observer = new IntersectionObserver(callback, {});
    observer.observe(this.$refs.services);
  },
  methods: {
    createAnimationDesign() {
      const anime = this.$anime;
      var tl = anime.timeline({
        easing: "easeInOutExpo",
        duration: 1000,
        autoplay: false,
        loop: true,
        direction: "alternate"
      });
      tl.add({
        targets: ".design > .content >.group",
        translateX: 28,
        translateY: 50,
        translateZ: 0,
        delay: 500
      })
        .add(
          {
            targets: ".design > .content >.design-cls-4",
            translateX: -29,
            translateY: -51,
            translateZ: 0
          },
          500
        )
        .add({
          targets: ".design > .content >.design-cls-3",
          translateX: -29,
          translateY: -51,
          translateZ: 0
        })
        .add(
          {
            targets: ".design > .content >.group",
            translateX: 38,
            translateY: 70,
            translateZ: 0
          },
          "-=1000"
        )
        .add({
          targets: ".design > .content >.group>.design-cls-3",
          translateX: -47,
          translateY: 26,
          translateZ: 0
        })
        .add(
          {
            targets: ".design > .content >.group>.design-cls-4",
            translateX: 75,
            translateY: -35,
            translateZ: 0
          },
          "-=1000"
        )
        .add({
          targets: ".bogus",
          translateX: 75,
          translateY: -35,
          translateZ: 0,
          duration: 200
        });

      return tl;
    },
    createAnimationDevelop() {
      const anime = this.$anime;

      let tl = anime.timeline({
        easing: "easeInOutSine",
        duration: 700,
        direction: "alternate",
        loop: true,
        delay: anime.stagger(700, { start: 500 }) // increase delay by 100ms for each elements.
      });
      tl.add({
        targets: ".develop>.code>.line",
        strokeDashoffset: [anime.setDashoffset, 0]
      });
      tl.add({
        targets: ".bogus",
        rotate: 69
      });
      return tl;
    }
  }
};
</script>

<style lang="scss" scoped>
.services {
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
  .content {
    @extend %display-flex;
    width: 100%;
    .design,
    .develop {
      @extend %display-flex;
      width: min(500px, 90%);
      flex-flow: row nowrap;
      margin: 30px;
      .vector {
        width: 50%;
        height: 200px;

        img {
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.12));
        }
      }
      .text {
        width: 50%;
        h1 {
          font-size: 4rem;
          font-weight: 100;
        }
        p {
          font-size: 2rem;
        }
      }
    }

    .design {
      .text {
        text-align: right;
      }
      .vector {
        align-self: flex-start;
      }
    }

    .develop {
      .vector {
        align-self: flex-end;
      }
    }
  }
}
</style>

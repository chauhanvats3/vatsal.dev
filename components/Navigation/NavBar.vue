<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo/logo-full.svg" alt="" />
    </div>
    <div class="menu"></div>
    <div class="hamburger-wrapper" @click="hamburgerClicked">
      <svg
        class="hamburger"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        ref="Hamburger"
      >
        <defs>
          <style>
            .cls-1 {
              fill: none;
              stroke: #fff;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 45px;
            }
          </style>
        </defs>
        <g class="lines" data-name="lines">
          <g class="line-top">
            <line
              class="cls-1"
              x1="129.58"
              y1="258.71"
              x2="669.73"
              y2="258.71"
            />
          </g>
          <g class="line-bottom">
            <line
              class="cls-1"
              x1="135.07"
              y1="541.29"
              x2="670.42"
              y2="541.29"
            />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      description: "A blog post about some stuff",
    };
  },
  methods: {
    hamburgerClicked() {
      console.log("Clicked");
      this.$refs.Hamburger.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  @extend %display-flex;
  font-family: $bad-script;
  width: 100vw;
  height: $navbar-height;
  background: $black;
  flex-direction: row;
  justify-content: space-between;

  .logo {
    height: 100%;
    width: 150px;

    img {
      height: 100%;
    }
  }

  .hamburger-wrapper {
    @extend %display-flex;
    height: 100%;
    width: 50px;
    margin: 10px;

    .hamburger {
      cursor: pointer;
      .lines {
        .line-top,
        .line-bottom {
          line {
            transition: all 0.3s ease;
          }
        }
      }
    }

    .hamburger.active {
      .lines {
        .line-top {
          line {
            transform: rotate(-27deg);
            transform-origin: center;
          }
        }
        .line-bottom {
          line {
            transform: rotate(27deg);
            transform-origin: center;
          }
        }
      }
    }
  }
}
</style>
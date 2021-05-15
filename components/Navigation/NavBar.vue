<template>
  <div class="navbar">
    <NuxtLink to="/">
      <div class="logo">
        <img src="/logo/logo-full.svg" alt="" /></div
    ></NuxtLink>

    <div class="menu">
      <ul>
        <li v-for="item in menu" :key="item.title">
          <NuxtLink to="{item.link}">
            <p class="menuItem">{{ item.title }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="hamburger-wrapper" @click="hamburgerClicked">
      <svg
        class="hamburger"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        ref="Hamburger"
      >
        <g class="lines" data-name="lines">
          <g>
            <line
              class="line line-top"
              x1="129.58"
              y1="258.71"
              x2="669.73"
              y2="258.71"
            />
          </g>
          <g>
            <line
              class="line line-bottom"
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
      description: "stuff",
      menu: [
        {
          link: "/testimonials",
          title: "Testimonials",
        },
        {
          link: "/projects",
          title: "Projects",
        },
        {
          link: "/concepts",
          title: "Concepts",
        },
        {
          link: "/contact",
          title: "Contact Me",
        },
      ],
    };
  },
  methods: {
    hamburgerClicked() {
      this.$refs.Hamburger.classList.toggle("active");
      this.$emit("hamburgerClicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  @extend %display-flex;
  width: 100%;
  height: $navbar-height;
  background: $black;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;

  .logo {
    height: 100%;
    width: 150px;

    img {
      height: 100%;
    }
  }

  .menu {
    @extend %display-flex;
    flex-direction: row;
    display: none;

    ul {
      @extend %display-flex;
      flex-flow: row wrap;
      li {
        font-size: 2rem;
      }

      .menuItem {
        @extend %display-flex;
        height: $navbar-height;
        margin: 0 25px;
      }
    }
  }

  .hamburger-wrapper {
    @extend %display-flex;
    height: 100%;
    width: 50px;
    margin: 10px;
    cursor: pointer;

    .hamburger {
      .line {
        fill: none;
        stroke: #fff;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 45px;

        transition: all 0.4s ease;
        transform-origin: center;
      }
    }

    .hamburger.active {
      .line-top {
        transform: rotate(-27deg);
      }
      .line-bottom {
        transform: rotate(27deg);
      }
    }
  }

  @media (min-width: 800px) {
    .menu {
      display: flex;
    }
    .hamburger-wrapper {
      display: none;
    }
  }
}
</style>
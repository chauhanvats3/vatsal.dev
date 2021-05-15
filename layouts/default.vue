<template>
  <div class="body">
    <NavBar @hamburgerClicked="toggleSidebar" />
    <div class="body-content">
      <div class="main" ref="main">
        <Nuxt />
      </div>
      <div class="sidebarWrapper" ref="sidebarWrapper">
        <Sidebar :menuItems="menuItems" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarVisible: false,
      menuItems: [
        {
          link: "/",
          title: "Home",
        },
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
    toggleSidebar() {
      if (!this.sidebarVisible) {
        this.$refs.sidebarWrapper.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      } else {
        this.$refs.main.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
      this.sidebarVisible = !this.sidebarVisible;
    },
  },
};
</script>

<style lang="scss">
html {
  font-family: "Nunito", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 10px;
  font-weight: 100;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  letter-spacing: 0.15rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}

a {
  height: 100%;
  text-decoration: none;
  color: white;
}

ul {
  list-style-type: none; /* Remove bullets */
}
.body {
  overflow-x: hidden;
}
.body-content {
  @extend %display-flex;
  margin-top: $navbar-height;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 175vw;
  .main {
    width: 100vw;
    height: calc(100vh - #{$navbar-height});
    background: black;
    height: 200vh;
  }

  .sidebarWrapper {
    width: 75vw;
    height: calc(100vh - #{$navbar-height});
    transition: all 0.3s ease-in-out;
  }
}
</style>

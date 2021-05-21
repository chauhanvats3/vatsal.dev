<template>
  <div class="defaultLayout" ref="defaultLayout">
    <Global />
    <NavBar @hamburgerClicked="toggleSidebar" :menuItems="menuItems" />
    <div class="sideMenuWrapper" ref="sideMenu">
      <Sidemenu :menuItems="menuItems" @itemClicked="toggleSidebar" />
    </div>
    <div class="main" ref="main" id="main">
      <Nuxt />
      <Footer />
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
          title: "Home"
        },
        {
          link: "/testimonials",
          title: "Testimonials"
        },
        {
          link: "/portfolio",
          title: "Portfolio"
        },
        {
          link: "/concepts",
          title: "Concepts"
        },
        {
          link: "/about",
          title: "About Me"
        },
        {
          link: "/blog",
          title: "Blog"
        },
        {
          link: "/contact",
          title: "Contact Me"
        }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      if (!this.sidebarVisible) {
        this.$refs.defaultLayout.classList.add("showSideMenu");
        document.body.classList.add("noscroll");
      } else {
        this.$refs.defaultLayout.classList.remove("showSideMenu");

        document.body.classList.remove("noscroll");
      }
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
};
</script>

<style lang="scss">
.defaultLayout.showSideMenu {
  .sideMenuWrapper {
    right: 0;
  }
}
.sideMenuWrapper {
  width: 100vw;
  height: 100vh;
  margin-top: $navbar-height;
  position: fixed;
  transition: all 0.4s ease-in-out;
  overflow: scroll;
  z-index: 50;
  right: -100vw;
}
.main {
  padding-top: $navbar-height;
}
</style>

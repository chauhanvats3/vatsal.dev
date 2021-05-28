<template>
  <div class="defaultLayout" ref="defaultLayout">
    <Global />
    <div class="sideMenuWrapper" ref="sideMenu">
      <Sidemenu :menuItems="menuItems" @itemClicked="toggleSidebar" />
    </div>
    <div class="main" ref="main" id="main">
      <NavBar @hamburgerClicked="toggleSidebar" :menuItems="menuItems" />

      <Nuxt />
      <Footer />
    </div>

    <div class="background"></div>
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
          link: "/portfolio",
          title: "Portfolio"
        },
        {
          link: "/testimonials",
          title: "Testimonials"
        },
        {
          link: "/blog",
          title: "Blog"
        },
        {
          link: "/about",
          title: "About Me"
        },
        {
          link: "/contact",
          title: "Contact"
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
.defaultLayout {
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    z-index: -100;
  }
}
.defaultLayout.showSideMenu {
  .sideMenuWrapper {
    right: 0;
  }
}
.sideMenuWrapper {
  width: 100%;
  height: 100%;
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

<template>
  <div class="wholeWrapper">
    <div class="body" id="body">
      <Global />
      <NavBar @hamburgerClicked="toggleSidebar" :menuItems="menuItems" />
      <div class="body-content" ref="bodyContent">
        <div class="main" ref="main" id="main">
          <Nuxt />
          <Footer />
        </div>
        <div class="sidebarWrapper" ref="sidebarWrapper">
          <Sidebar :menuItems="menuItems" />
        </div>
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
          link: "/#main",
          title: "Home"
        },
        {
          link: "/testimonials#main",
          title: "Testimonials"
        },
        {
          link: "/portfolio#main",
          title: "Portfolio"
        },
        {
          link: "/concepts#main",
          title: "Concepts"
        },
        {
          link: "/about#main",
          title: "About Me"
        },
        {
          link: "/blog#main",
          title: "Blog"
        },
        {
          link: "/contact#main",
          title: "Contact Me"
        }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      if (!this.sidebarVisible) {
        this.$refs.bodyContent.classList.toggle("showSidebar");
      } else {
        this.$refs.bodyContent.classList.toggle("showSidebar");
      }
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
};
</script>

<style lang="scss">
.body {
  overflow-x: hidden;
  position: relative;
  min-width: 96vw;
  min-height: 100vh;
}
.body-content {
  @extend %display-flex;
  margin-top: $navbar-height;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  .main {
    min-width: 95vw;
    width: 100%;
    min-height: calc(100vh - #{$navbar-height});
    position: absolute;
    left: 0;
    transition: all 0.4s ease-in-out;
  }

  .sidebarWrapper {
    width: 75vw;
    height: calc(100vh - #{$navbar-height});
    transition: all 0.3s ease-in-out;
    position: fixed;
    right: -75vw;
    transition: all 0.4s ease-in-out;
    overflow: scroll;
  }
}

.body-content.showSidebar {
  .main {
    left: -75vw;
  }
  .sidebarWrapper {
    right: 0;
  }
}
</style>

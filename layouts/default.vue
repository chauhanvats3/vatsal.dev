<template>
  <div class="wholeWrapper">
    <div class="body" id="body">
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
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus textarea:-webkit-autofill,
textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  box-shadow: 0 0 0px 1000px #ffffff inset !important;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.noscroll {
  overflow: hidden;
}

.btn {
  font-family: $bad-script;
  background: linear-gradient(
    103deg,
    #005073 0%,
    #005073 20%,
    #107dac 20%,
    #107dac 40%,
    #189ad3 40%,
    #189ad3 60%,
    #1ebbd7 60%,
    #1ebbd7 80%,
    #71c7ec 80%,
    #71c7ec 100%
  );
  padding: 10px 35px;
  border-radius: 1.3rem;
  cursor: pointer;
  width: fit-content;

  background-size: 150%;
  background-position: left;
  animation: movingGradientBG 2.5s ease-in-out infinite alternate;
  will-change: background-position;

  p {
    color: white;
    padding: 0;
    font-size: 2.5rem;
  }
}

.btn {
  font-size: 2.5rem;
  color: white;
  background: linear-gradient(
    103deg,
    #005073 0%,
    #005073 20%,
    #107dac 20%,
    #107dac 40%,
    #189ad3 40%,
    #189ad3 60%,
    #1ebbd7 60%,
    #1ebbd7 80%,
    #71c7ec 80%,
    #71c7ec 100%
  );
  background-size: 150%;
  background-position: left;
  animation: movingGradientBG 2.5s ease-in-out infinite alternate;
  will-change: background-position;
}

@keyframes movingGradientBG {
  0% {
    background-position: left;
  }

  100% {
    background-position: right;
  }
}

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
  scroll-behavior: smooth;
}

a {
  height: 100%;
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none; /* Remove bullets */
}
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

@media (max-width: 800px) {
  *::-webkit-scrollbar {
    display: none;
  }
  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

.heading {
  align-self: flex-start;

  h1 {
    font-weight: 100;
    font-size: 5rem;
    color: $blue-dark;
    padding: 10px;
    text-transform: uppercase;
  }
  @media (min-width: 1000px) {
    padding-left: 25%;
  }
}
</style>

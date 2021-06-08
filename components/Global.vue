<template> <div class="global-css"></div> </template>

<script>
export default {};
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

.btn {
  font-size: 1.5rem;

  font-family: $poiret;
  background: $blue-dark;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: fit-content;
  color: white;
  margin: 20px;

  box-shadow: 0px 1px 1px rgb(0 0 0 / 25%), 0px 2px 2px rgb(0 0 0 / 20%),
    0px 4px 4px rgb(0 0 0 / 15%), 0px 6px 8px rgb(0 0 0 / 10%),
    0px 8px 16px rgb(0 0 0 / 5%);

  p,
  a {
    color: white;
    padding: 0;
    font-size: 1.5rem;
    margin: 0;
    letter-spacing: 0.2rem;
  }
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
  font-size: 100%;

  @media (min-width: 800px) {
    font-size: 125%;
  }
}

body {
  background: white;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
  overflow-x: hidden;
}

p {
  margin-bottom: 1rem;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 3rem 0 1.38rem;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 4.209rem;
}

h2 {
  font-size: 3.157rem;
}

h3 {
  font-size: 2.369rem;
}

h4 {
  font-size: 1.777rem;
}

h5 {
  font-size: 1.333rem;
}

small,
.text_small {
  font-size: 0.75rem;
}

html {
  font-family: "Nunito", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
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

.drop-shadow {
  -moz-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15))
    drop-shadow(0 6px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05));
  -ms-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15))
    drop-shadow(0 6px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05));
  -o-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15))
    drop-shadow(0 6px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05));
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.25))
    drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15))
    drop-shadow(0 6px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.05));
}
</style>

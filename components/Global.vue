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
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  width: fit-content;
  color: white;
  margin: 20px;

  box-shadow: 0px 1px 1px rgb(0 0 0 / 25%), 0px 2px 2px rgb(0 0 0 / 20%),
    0px 4px 4px rgb(0 0 0 / 15%), 0px 6px 8px rgb(0 0 0 / 10%),
    0px 8px 16px rgb(0 0 0 / 5%);

  p {
    color: white;
    padding: 0;
    font-size: 1.5rem;
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

.section {
  margin: 120px 0;

  @media (max-width: 800px) {
    margin: 60px 0;
  }
}

html {
  font-family: "Nunito", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 20px;
  font-weight: 100;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  letter-spacing: 0.09rem;
  overflow-x: hidden;
}
body {
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

@media (max-width: 1250px) {
  *::-webkit-scrollbar {
    display: none;
  }
  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>

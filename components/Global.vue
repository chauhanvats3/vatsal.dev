<template> </template>

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

.noscroll {
  height: 100vh;
  overflow: hidden;
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

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);

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
  margin: 50px 10px;

  h1 {
    font-weight: 100;
    font-size: 3rem;
    color: $blue-dark;
    padding: 10px;
    text-transform: uppercase;
  }
  @media (min-width: 1000px) {
    padding-left: 15%;
  }
}
</style>

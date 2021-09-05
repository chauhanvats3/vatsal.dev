<template>
  <div class="about">
    <Heading>Hello There! I am</Heading>
    <HomeIDCard />
    <div class="intro">
      <div class="designer">
        <Heading type="h3">As a designer</Heading>
        <div class="content">
          <p>I design clean and modern UI</p>
          <p>That incorporates an intuitive User Experience,</p>
          <p>And uses illustrations wherever words seem superfluous.</p>
          <p>I also design logos, business cards, flex banners etc.</p>
        </div>
      </div>
      <div class="developer">
        <Heading type="h3">As a developer</Heading>
        <div class="content">
          <p>
            I develop web apps that are SEO friendly and have high
            <a href="https://web.dev/measure/" target="_blank" rel="noreferrer"
              >Lighthouse</a
            >
            scores.
          </p>
          <p>
            Developed using advance technologies like
            <a rel="noreferrer" href="https://vuejs.org" target="_blank">Vue</a
            >,
            <a href="https://svelte.dev" target="_blank" rel="noreferrer">
              Svelte</a
            >,
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
              >Firebase</a
            >,
            <a href="https://sanity.io" target="_blank" rel="noreferrer"
              >Sanity</a
            >
            etc.
          </p>
          <p>
            Which are hosted on
            <a rel="noreferrer" href="https://netlify.com" target="_blank"
              >Netlify</a
            >
            for lifetime free hosting.
          </p>
        </div>
      </div>

      <div class="human">
        <Heading type="h3">As a human</Heading>
        <div class="content">
          <p>I love giving checkmates in chess,</p>
          <p>And food slathered with garlic and oregano.</p>
          <p>
            Also Yoga, Weightlifting and any other taxing activity that fancies
            my interest.
          </p>
          <p>
            Sometimes I click pretty great photographs too which are posted on
            my
            <a
              href="https://instagram.com/dazed._.confused"
              target="_blank"
              rel="noreferrer"
              >Instagram</a
            >.
          </p>
        </div>
      </div>
    </div>

    <IntersectionObserver />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  @extend %display-flex;
  min-height: 100vh;
  background: #f3f3f3;
  position: relative;
  justify-content: flex-start;

  .intro {
    width: 100%;
    @extend %display-flex;
    flex-flow: column nowrap;
    .designer,
    .developer,
    .human {
      width: 100%;
      padding: 25px;

      .content {
        @extend %display-flex;
        margin: auto;
        max-width: 65ch;
        align-items: flex-start;

        @media (max-width: 800px) {
          margin: 5px 5%;
        }
        p {
          font-size: 1.7rem;
          word-spacing: 0.3rem;
          letter-spacing: 0.1rem;
          margin: 15px 0;

          a {
            color: $blue-light;
          }
        }
      }
    }
  }
}
</style>

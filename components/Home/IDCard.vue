<template>
  <div class="id-card">
    <img src="/images/vatsal.webp" alt="" class="photo" />
    <div class="name">
      <strong>Vatsal</strong><br />
      Chauhan
    </div>
    <div class="services">
      Designer / Developer
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.id-card {
  @extend %display-flex;
  flex-flow: row wrap;
  max-width: 700px;
  width: 80%;
  background: white;
  border-radius: 30px;
  padding: 20px;
  margin: 20px;

  @media (max-width: 800px) {
    max-width: 500px;
  }

  .photo {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin: 20px;

    @media (max-width: 800px) {
      width: 150px;
      height: 150px;
    }
  }

  .name {
    font-size: 2.5rem;
    text-transform: uppercase;
    text-align: center;
    font-family: $poiret;
    letter-spacing: 0.3rem;
    margin: 20px;
    strong {
      letter-spacing: 1rem;
    }

    @media (max-width: 800px) {
      font-size: 1.7rem;
      letter-spacing: 0.45rem;
    }
  }

  .services {
    font-size: 2rem;
    font-weight: lighter;
    letter-spacing: 0.2rem;
    margin: 20px;
    text-align: center;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
}
</style>

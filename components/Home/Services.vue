<template>
  <div class="services">
    <div class="heading">
      <h1>I Can</h1>
    </div>
    <div class="content">
      <div class="design">
        <div class="vector">
          <DesignBase />
        </div>
        <div class="text">
          <h1>Design.</h1>
          <p>UI/UX/Logo</p>
        </div>
      </div>
      <div class="develop">
        <div class="text">
          <h1>Develop.</h1>
          <p>Website/Extension</p>
        </div>
        <div class="vector">
          <DevBase />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DevBase from "/static/images/services/dev-base.min.svg?inline";
import DesignBase from "/static/images/services/design-base.min.svg?inline";

export default {
  components: { DevBase, DesignBase }
};
</script>

<style lang="scss" scoped>
.services {
  margin: 50px 0;
  @extend %display-flex;
  .heading {
    align-self: flex-start;

    h1 {
      font-weight: 100;
      font-size: 5rem;
      color: $blue-dark;
      padding: 10px;
      text-transform: uppercase;
    }
  }
  .content {
    @extend %display-flex;
    width: 100%;
    .design,
    .develop {
      @extend %display-flex;
      width: min(500px, 90%);
      flex-flow: row nowrap;
      margin: 30px;
      .vector {
        width: 50%;
        height: 200px;

        img {
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.12));
        }
      }
      .text {
        width: 50%;
        h1 {
          font-size: 4rem;
          font-weight: 100;
        }
        p {
          font-size: 2rem;
        }
      }
    }

    .design {
      .text {
        text-align: right;
      }
      .vector {
        align-self: flex-start;
      }
    }

    .develop {
      .vector {
        align-self: flex-end;
      }
    }
  }
}
</style>

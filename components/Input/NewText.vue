<template>
  <div class="field">
    <input
      type="text"
      :name="metadata.inputname"
      :placeholder="metadata.inputname"
      :inputname="metadata.inputname"
      :id="metadata.id"
      v-model="val"
      @input="emitVal"
      ref="field"
    />
    <label for="metadata.id">{{ metadata.inputname }}</label>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: ["metadata", "val"],
  methods: {
    emitVal() {
      this.$emit("input:val", this.$props.val);
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  @extend %display-flex;
  width: 100%;
  margin: 2.5rem 5px 5px;
  position: relative;

  input {
    width: 95%;
    font-size: 2rem;
    border: none;
    border-radius: 5px;
    padding: 5px 0px 0;
    font-family: $nunito;
    background: transparent;
  }

  input::placeholder {
    color: $blue-metal;
  }

  label {
    font-size: 1.3rem;
    position: absolute;
    left: 2.65%;
    top: 0;
    z-index: -2;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    color: $blue-dark;
  }

  .line {
    width: 95%;
    height: 2px;
    background: $blue-mid;
    border-radius: 1px;
  }

  .line::after {
    content: "";
    display: block;
    width: 0;
    background: $green-light;
    height: 2px;
    transition: all 0.5s ease-in;
  }

  input:focus {
    outline: none;
  }

  input:focus::placeholder {
    color: $green-light;
  }

  input:focus ~ .line::after {
    width: 100%;
  }

  input:not(:placeholder-shown) ~ label {
    top: -1.7rem;
    opacity: 1;
  }
}
</style>

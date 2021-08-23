<template>
  <div class="field">
    <!-- <input
      type="text"
      :name="metadata.inputname"
      :placeholder="metadata.inputname"
      :inputname="metadata.inputname"
      :id="metadata.id"
      v-model="val"
      @input="emitVal"
      ref="field"
    /> -->
    <textarea
      :name="metadata.inputname"
      :placeholder="metadata.inputname"
      :inputname="metadata.inputname"
      :id="metadata.id"
      v-model="val"
      @input="emitVal"
      ref="field"
      rows="3"
    ></textarea>

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

  textarea {
    width: 95%;
    font-size: 2rem;
    border: none;
    border-radius: 5px;
    padding: 5px 0px 0;
    font-family: $nunito;
    background: transparent;
    resize: none;
  }

  textarea::placeholder {
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
    height: 3px;
    background: #aaaaaa;
    border-radius: 1px;
  }

  .line::after {
    content: "";
    display: block;
    width: 0;
    background: $green-light;
    height: 3px;
    transition: all 0.5s ease;
  }

  textarea:focus {
    outline: none;
  }

  textarea:focus::placeholder {
    color: $green-light;
  }

  textarea:focus ~ .line::after {
    width: 100%;
  }

  textarea:not(:placeholder-shown) ~ label {
    top: -1.7rem;
    opacity: 1;
  }
}
</style>

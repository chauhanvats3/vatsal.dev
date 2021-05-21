<template>
  <div class="form__group field">
    <input
      type="email"
      class="form__field noselect"
      :placeholder="metadata.placeholder"
      :inputname="metadata.inputname"
      :id="metadata.id"
      v-model="val"
      autocomplete="off"
      @input="emitVal"
      ref="field"
    />
    <label for="metadata.id" class="form__label noselect" @click="labelClicked">
      {{ metadata.inputname
      }}<span class="hint">{{ metadata.hint }}</span></label
    >
  </div>
</template>

<script>
export default {
  props: ["metadata", "val"],
  methods: {
    emitVal() {
      this.$emit("input:val", this.$props.val);
    },
    labelClicked() {
      this.$refs.field.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 40px;
  width: 95%;
  flex-flow: column nowrap;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $blue-metal;
  outline: 0;
  font-size: 1.5rem;
  color: $blue-dark;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.5s ease-in;
}

.form__field::placeholder {
  transition: all 0.3s ease-in-out;
  color: transparent;
  left: 35px;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 1.5rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  transition: 0.3s ease-in-out;
  font-size: 1rem;
  color: $blue-metal;
  text-align: left;
  z-index: 10;
}

.hint {
  display: none;
  color: $green-mid;
  font-size: 0.8rem;
  text-align: right;
}

.form__field:focus {
  padding-bottom: 6px;
  border-width: 2px;
  border-image: linear-gradient(90deg, $blue-metal, $green-light);
  border-image-slice: 1;
}

.form__field:focus::placeholder {
  color: #bbbbbb;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: -30px;
  left: 0px;
  display: block;
  transition: 0.2s;
  font-size: 1.1rem;
  color: $green-mid;
}

.form__field:focus ~ .form__label .hint {
  display: block;
}

/* reset input */
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
</style>

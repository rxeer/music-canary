<template>
  <label class="form-label" :class="{ disabled, error }">
    <template v-if="label && notes">
      <div class="notes-wrapper">
        <span class="form-label-title-note">{{ label }}</span>
        <span v-on:click="onNotesClick" class="notes">{{ notes }}</span>
      </div>
    </template>
    <span v-else class="form-label-title">{{ label }}</span>

    <template v-if="multiline">
      <textarea
        :cols="cols"
        :rows="rows"
        :minLength="minLength"
        :maxLength="maxLength"
        :required="required"
        :disabled="disabled"
        class="form-control textarea"
        :placeholder="placeholder"
      />
    </template>
    <template v-else>
      <input
        :type="inputType"
        :readOnly="readonly"
        :required="required"
        :minLength="minLength"
        :maxLength="maxLength"
        class="form-control"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </template>

    <span v-if="error" class="label-error">{{ error }}</span>

    <template v-if="type === 'password'">
      <span :onClick="{ togglePasswordVisibility }" class="eye-icon"></span>
    </template>
  </label>
</template>

<script>
export default {
  props: [
    "error",
    "multiline",
    "notes",
    "type",
    "onNotesClick",
    "label",
    "cols",
    "minLength",
    "maxLength",
    "value",
    "rows",
    "required",
    "autocomplete",
    "disabled",
    "placeholder",
    "readonly"
  ],
  data() {
    return {
      inputValue: "",
      passwordVisibility: false
    };
  },
  computed: {
    inputType() {
      return this.passwordVisibility ? "text" : this.type;
    }
  },
  methods: {
    togglePasswordVisibility() {
      alert("sdsd");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/_vars.scss";

$muted-input-color: #999;
$input-hover-color: #dfe1e2;

.form-control {
  &:not([type="checkbox"]) {
    &:not([type="radio"]) {
      position: relative;
      border-radius: 5px;
      background-color: $input-bg;
      border: 1px solid $input-bg;
      width: 100%;
      padding: 12px 16px;
      font-size: 1rem;
      color: $text-color;
      font-weight: 500;
      font-family: $base-font;
      transition: all 0.15s;

      &::placeholder {
        font-family: $base-font;
        font-weight: 400;
        font-size: 16px;
        color: $muted-input-color;
        opacity: 1;
      }

      &:hover {
        background-color: darken($input-bg, 3%);
      }

      &:focus {
        outline: none;
        background-color: darken($input-bg, 5%);
      }

      &.small {
        border: 1px solid $muted-input-color;
        border-radius: 5px;
        padding: 6px 10px;
      }
    }
  }

  &.textarea {
    resize: none;
    width: 100%;
  }
}

.form-label {
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  .notes-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .notes {
      font-size: 14px;
      line-height: 20px;
      color: $secondary;
    }
  }

  &.disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  .form-label-title {
    font-family: $base-font;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 20px;
    color: $text-color;
    margin-left: 8px;
    margin-bottom: 8px;
  }

  .form-label-title-note {
    font-family: $base-font;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 20px;
    color: $text-color;
    margin-left: 8px;
    margin-bottom: 8px;
  }

  &.error {
    .label-error {
      display: block;
      width: 100%;
      color: $primary;
      margin-top: 6px;
      font-size: 0.875rem;
    }
  }
}
</style>

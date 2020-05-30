<template>
  <v-select
    :value="value"
    :options="options"
    :searchable="searchable"
    :clearable="false"
    class="select"
    @input="setSelected"
  ></v-select>
</template>

<script>
export default {
  props: ['options', 'searchable', 'value', 'onChange'],
  methods: {
    setSelected(value) {
      this.onChange(value);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/sass/_vars.scss';

.v-select {
  background: $primary;
  text-align: center;
  border-radius: 5px;

  .vs__actions,
  .vs__clear,
  .vs__open-indicator {
    fill: #fff;
  }

  .vs__dropdown-option {
    font-family: $base-font;
    font-weight: 600;
    text-align: center;
  }

  .vs__dropdown-option--highlight,
  .vs__dropdown-option--selected {
    background: $primary;
    color: #fff;
  }

  .vs__dropdown-toggle {
    border: 0;
  }

  &.vs--open {
    background: $grey;
  }

  .vs__selected {
    color: #fff;
    font-weight: 600;
  }
  .vs1__listbox {
    border: 0;
    background: $primary;
    color: #a4a4a4 !important;
  }
}
</style>

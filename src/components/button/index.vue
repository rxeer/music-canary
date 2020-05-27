<template>
  <button
    class="button"
    :class="{ [variant || 'primary']: true, [size]: true, [className]: true }"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <div v-if="loading">
    </div>
    <template v-else>
      <template v-if="brandIcon">
        <font-awesome-icon :icon="['fab', brandIcon]" />
      </template>
      <span>
        <slot></slot>
      </span>
    </template>
  </button>
</template>

<script>
export default {
  props: [
    'onClick',
    'variant',
    'type',
    'brandIcon',
    'size',
    'loading',
    'disabled',
    'className',
  ],
  methods: {
    handleClick(event) {
      if (this.onClick) {
        this.onClick(event);
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/sass/_vars.scss';

.button {
  appearance: 0;
  border: 0;
  outline: 0;
  font-size: 1rem;
  color: #fff;
  border-radius: 5px;
  padding: 11px 45px;
  transition: all 0.15s;
  font-weight: 600;
  font-family: $base-font;
  margin-right: 12px;
  position: relative;

  &:not(:disabled) {
    cursor: pointer;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.4;
  }

  .spinner {
    width: 20px;
    height: 20px;

    .v-clip {
      width: 20px !important;
      height: 20px !important;
    }
  }

  &.disabled {
    pointer-events: none;
    cursor: auto;
  }

  &.full-width {
    width: 100%;
    flex-basis: 100%;
  }

  &:hover {
    box-shadow: 0 2px 4px 0 $box-shadow-color;
  }

  &.primary {
    background: $primary;

    &:hover {
      background: darken($primary, 16%);
    }

    &:active {
      background: lighten($primary, 16%);
    }

    &.outlined {
      background: transparent;
      box-shadow: none;
      color: $primary;
      border: 1px solid $primary;

      &:hover {
        background: $primary;
        color: #fff;
      }
    }
  }

  &.secondary {
    background: $secondary;

    &:hover {
      background: darken($secondary, 16%);
    }

    &:active {
      background: lighten($secondary, 16%);
    }

    &.outlined {
      color: $secondary;
      background: transparent;
      box-shadow: none;
      border: 1px solid $secondary;

      &:hover {
        background: $secondary;
        color: #fff;
      }
    }
  }

  &.small {
    border-radius: 5px;
    font-size: 14px;
    padding: 5px 18px;
  }

  &.icon {
    padding: 0;
    box-shadow: none;
    cursor: pointer;
    margin: 0 8px;
    background: transparent;

    & > img {
      border-radius: 50%;
      padding: 7px;
      transition: background-color 0.2s;

      &:hover {
        //background: $close-btn-hover-bg;
      }
    }
  }

  &.medium {
    min-width: 140px;
  }

  &.big {
    padding: 20px;
  }

  @media (max-width: 420px) {
    width: 100%;
    flex-basis: 100%;
  }
}
</style>

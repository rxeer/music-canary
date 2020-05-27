<template>
  <div class="overlay" :class="{ gradient }"></div>
</template>

<script>
export default {
  props: ['gradient'],
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);

  &.gradient {
    background: linear-gradient(
      180deg,
      rgba(36, 41, 46, 0.2) 0%,
      rgba(36, 41, 46, 0.8) 100%
    );
  }
}
</style>

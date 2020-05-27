<template>
  <div class="loader-container">
    <div v-if="loading" class="spinner">
      <clip-loader class="spinner" :loading="loading" color="#39424D" />
      <h5 class="text">Fetching data</h5>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader';

export default {
  props: ['loading'],
  components: {
    ClipLoader,
  },
};
</script>

<style lang="scss" scoped>
.loader-container {
  .text {
    font-weight: 600;
    text-align: center;
  }

  .spinner {
    margin-top: 10rem;
  }
}
</style>

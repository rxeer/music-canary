<template>
  <ul class="chips">
    <li class="chip" v-for="(item, index) in items" :key="index">
      <font-awesome-icon icon="times" class="icon" v-on:click="onClick" />

      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items', 'onClick'],
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_vars.scss';

.chips {
  padding: 0;
  margin: 0;
  text-align: left;
  list-style: none;

  .chip {
    font-size: 16px;
    color: $divider-color;
    line-height: 20px;
    margin-bottom: 6px;
  }

  .icon {
    cursor: pointer;
    color: $primary;
    margin-right: 8x;
  }
}
</style>

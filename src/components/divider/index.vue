<template>
  <div class="divider" :class="className">
    <span>{{ label }}</span>
  </div>
</template>
<script>
export default {
  props: ['label', 'className'],
};
</script>
<style lang="scss" scoped>
@import '@/assets/sass/_vars.scss';

.divider {
  font-weight: 600;
  font-size: 18px;
  color: #8e9399;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    background: transparent;
    margin: 0 8px;
  }

  &:before,
  &:after {
    height: 1px;
    content: '';
    flex: 1;
    background: $divider-color;
  }
}
</style>

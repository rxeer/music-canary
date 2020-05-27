<template>
  <div class="btn-group-container">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="group" :class="{ [className]: true }">
      <div
        class="button"
        :class="{ active: active === item }"
        v-for="item in items"
        @click="onChange(item)"
        :key="item"
      >
        {{ item.toLowerCase() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'active', 'onChange', 'label', 'className'],
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_vars.scss';

.btn-group-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  .label {
    flex-grow: 1;
    font-size: 14px;
    text-align: left;
    padding-right: 10px;
  }

  &.full-width {
    .group {
      flex-basis: 100%;
    }
  }

  .group {
    min-width: 111px;
  }
}

.group {
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s;

  .button {
    text-align: center;
    flex-basis: 50%;
    font-size: 14px;
    color: $divider-color;
    font-weight: 600;
    background: $grey;
    padding: 5px 10px;
    cursor: pointer;
    margin: 0;
    border-radius: 0;
    text-transform: capitalize;

    &:hover {
      background: darken($grey, 1%);
    }

    &.active {
      background: $primary;
      color: #fff;
    }
  }
}
</style>

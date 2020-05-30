<template>
  <div class="image">
    <img :src="source" alt="" />
    <template v-if="showClose">
    </template>
  </div>
</template>
<script>
export default {
  props: ['onDelete', 'source', 'showClose'],
};
</script>
<style lang="scss" scoped>
@import '@/assets/sass/_vars.scss';

.image {
  position: relative;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  min-height: 175px;

  & > img {
    object-fit: cover;
    max-width: 100%;
    width: 100%;
    height: 100%;
    max-height: 170px;
  }

  .icon {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background: $secondary;
    position: absolute;
    top: 10px;
    color: #fff;
    right: 10px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: rotate(90deg);
    }
  }
}
</style>

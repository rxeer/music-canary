<template>
  <h2 class="logo" :style="{ color }" v-on:click="onLogoClick">Music Canary</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['color'],
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    onLogoClick() {
      const path = this.currentUser.id ? '/like-dislike' : '/';
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_vars.scss';

.logo {
  z-index: 3;
  text-align: center;
  font-family: $base-font;
  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  margin: 0;
  color: #fff;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
</style>

<template>
  <header class="header">
    <p class="route-name">{{ routeName }}</p>

    <div class="user-info">
      <div class="avatar">
        <img :src="currentUser.avatar" alt="avatar image" />
      </div>

      <p class="user-name">
        {{ currentUser.firstName }} {{ currentUser.lastName }}
      </p>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['getCurrentUser']),
  },
  async mounted() {
    try {
      await this.getCurrentUser();
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
    routeName() {
      return this.$route.name || '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/header.scss';
</style>

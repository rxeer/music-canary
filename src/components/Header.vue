<template>
  <header class="header">
    <p class="route-name">{{ routeName }}</p>

    <div class="user-info">
      <div class="notifications" v-popover:notifications>
        <font-awesome-icon icon="bell" class="icon" />
        <div class="badge">1</div>
      </div>

      <popover name="notifications">
        <div class="notifications-list">Notifications 🎉</div>
      </popover>

      <div class="avatar">
        <img :src="currentUser.avatar" alt="avatar image" />
      </div>

      <p class="user-name">
        {{ currentUser.firstName }} {{ currentUser.lastName }}
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['getCurrentUser']),
  },
  async mounted() {
    await this.getCurrentUser();
  },
  computed: {
    ...mapGetters(['currentUser']),
    routeName(): string {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/header.scss';
</style>

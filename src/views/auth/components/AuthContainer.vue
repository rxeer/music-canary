<template>
  <section class="auth-container" v-if="ready">
    <div class="row">
      <div class="col-12 auth-header">
        <logo />

        <div class="navigation">
          <span>{{ header || 'Not a member?' }}</span>
          &nbsp; &nbsp;
          <span class="link" v-on:click="onHeaderLinkClick">{{
            link || 'Sign up now'
          }}</span>
        </div>
      </div>
    </div>

    <div class="content">
      <card class="card-wrapper">
        <h1 class="title">{{ title }}</h1>

        <slot></slot>
      </card>
    </div>
  </section>
</template>
<script>
import Logo from '@/components/logo';
import Card from '@/components/card';

import { getToken } from '@/rest/token';

export default {
  data() {
    return {
      ready: false,
    };
  },
  name: 'AuthContainer',
  props: ['title', 'onHeaderLinkClick', 'header', 'link'],
  components: {
    Card,
    Logo,
  },
  mounted() {
    if (getToken()) {
      this.$router.push({ path: '/like-dislike' });
    }
    this.ready = true;
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/auth-container.scss';
</style>

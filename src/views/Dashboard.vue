<template>
  <section class="main" v-if="ready">
    <app-header />
    <sidebar />

    <main class="content">
      <div class="pages">
        <router-view />
      </div>
    </main>
    <upload-popup />
  </section>
</template>
<script lang="ts">
import AppHeader from "@/components/Header.vue";
import Sidebar from "@/components/sidebar";

import { getToken } from "@/rest/token";

import UploadPopup from "@/views/popups/upload";
export default {
  data() {
    return {
      ready: false
    };
  },
  components: {
    Sidebar,
    UploadPopup,
    AppHeader
  },
  mounted() {
    if (!getToken()) {
      this.$router.push({ path: "/" });
    } else {
      this.$router.push({ path: "/profile" });
    }
    this.ready = true;
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/_vars.scss";

.main {
  max-height: 100vh;
}

.content {
  right: 0;
  top: $header-height;
  left: $sidebar-width;
  position: absolute;

  .pages {
    padding: 30px 40px;
  }

  @media (max-width: 1200px) {
    left: $sidebar-md-width;

    .pages {
      padding: 20px 25px;
    }
  }
}
</style>

<template>
  <div id="app">
    <router-view />
    <notifications group="app" classes="canary-notification" />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
@import "@/assets/sass/_vars.scss";
@import "@/assets/sass/base.scss";

#app {
  font-family: $base-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark;
  min-height: 100vh;
  width: 100vw;
}

html {
  overflow: scroll;
  overflow-x: hidden;
  background: rgba($grey, 50%);
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}
</style>

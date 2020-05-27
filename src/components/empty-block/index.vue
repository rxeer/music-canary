<template>
  <section class="empty-clock">
    <div class="empty">
      <div class="empty-image">
        <img @click="refreshPage" src="@/assets/icons/svg/empty-data.svg" />
      </div>
      <p class="empty-description">{{ title || 'No Data' }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    refreshPage() {
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_vars.scss";

.empty-clock {
  width: 100%;
  text-align: center;
  padding: 42px 24px 50px;
  color: rgba(0, 0, 0, 0.85);

  .empty {
    .empty-image {
      & > img {
        max-width: 80px;
        cursor: pointer;
        transition: all 0.25s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .empty-description {
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>

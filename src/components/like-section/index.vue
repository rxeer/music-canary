<template>
  <div class="like-section">
    <div class="image">
      <img :src="image" alt />
    </div>

    <div class="actions">
      <button class="action back" @click="onBack">
        <img src="@/assets/icons/back.svg" alt="back icon" />
      </button>
      <button class="action" @click="onLike">
        <img src="@/assets/icons/like-section.svg" alt=" like icon" />
      </button>
      <button class="action dislike" @click="onDislike">
        <img src="@/assets/icons/dislike.svg" alt="dislike icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["onBack", "onLike", "onDislike", "image"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_vars.scss";

.like-section {
  position: relative;
  height: 100%;

  .actions {
    position: absolute;
    bottom: 50px;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%);

    .action {
      background: $secondary;
      border-radius: 10px;
      display: flex;
      margin-right: 10px;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
      margin-right: 40px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.25s;

      &:hover {
        background: darken($secondary, 6%);
      }

      &:active {
        transform: scale(1.1);
      }

      &.dislike {
        background: $primary;

        &:hover {
          background: darken($primary, 6%);
        }
      }

      &.back {
        background: #fff;

        &:hover {
          background: darken(#fff, 6%);
        }
      }
    }
  }

  .image {
    border-radius: 20px;
    overflow: hidden;

    & > img {
      max-width: 100%;
      object-fit: cover;
      height: 100%;
      width: 100%;
      max-height: 80vh;
    }
  }
}
</style>

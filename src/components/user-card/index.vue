<template>
  <article
    class="container"
    v-bind:style="{
      backgroundImage: 'url(' + user.image + ')',
    }"
  >
    <div class="content">
      <template v-if="user.liked || filled">
      </template>
      <template v-else>
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          class="icon"
          v-on:click="toggleLike(user.id)"
          :class="{ filled: user.liked }"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 20C10.6868 20 10.3848 19.8841 10.1495 19.6734C9.26077 18.8794 8.40392 18.1331 7.64793 17.4749L7.64407 17.4714C5.42766 15.5415 3.5137 13.8747 2.18201 12.2329C0.693375 10.3974 0 8.65708 0 6.75591C0 4.90876 0.619858 3.20464 1.74527 1.95726C2.88411 0.695126 4.44676 0 6.14587 0C7.4158 0 8.57881 0.410249 9.60251 1.21926C10.1191 1.62762 10.5874 2.1274 11 2.71036C11.4127 2.1274 11.8809 1.62762 12.3977 1.21926C13.4214 0.410249 14.5844 0 15.8543 0C17.5532 0 19.1161 0.695126 20.2549 1.95726C21.3803 3.20464 22 4.90876 22 6.75591C22 8.65708 21.3068 10.3974 19.8182 12.2327C18.4865 13.8747 16.5727 15.5413 14.3566 17.4711C13.5993 18.1304 12.7411 18.8778 11.8503 19.6738C11.6152 19.8841 11.313 20 11 20ZM6.14587 1.31685C4.81099 1.31685 3.5847 1.86121 2.6926 2.84979C1.78723 3.85329 1.28856 5.24046 1.28856 6.75591C1.28856 8.35489 1.87015 9.78493 3.17415 11.3927C4.43451 12.9467 6.30919 14.5791 8.47978 16.4693L8.48381 16.4727C9.24265 17.1336 10.1029 17.8827 10.9982 18.6826C11.8988 17.8812 12.7604 17.1308 13.5207 16.469C15.6911 14.5788 17.5657 12.9467 18.826 11.3927C20.1299 9.78493 20.7114 8.35489 20.7114 6.75591C20.7114 5.24046 20.2128 3.85329 19.3074 2.84979C18.4155 1.86121 17.189 1.31685 15.8543 1.31685C14.8764 1.31685 13.9786 1.63448 13.1859 2.26083C12.4794 2.81926 11.9873 3.52519 11.6987 4.01914C11.5504 4.27315 11.2892 4.42476 11 4.42476C10.7108 4.42476 10.4496 4.27315 10.3013 4.01914C10.0129 3.52519 9.52077 2.81926 8.81413 2.26083C8.02139 1.63448 7.12358 1.31685 6.14587 1.31685Z"
            fill="white"
          />
        </svg>
      </template>
      <div class="text" v-on:click="onUserClick(user.id)">
        <span class="years-old">{{ user.old }} y.o.</span>
        <p v-if="user.firstName && user.lastName" class="full-name">
          {{ fullName }}
        </p>
        <span v-if="user.location" class="location">{{ user.location }}</span>
      </div>

      <template v-if="match">
        <div class="match-action">
          <template v-if="user.likedReciprocity">
            <img
              src="./../../assets/icons/outlined-thumbs.svg"
              class="match-icon"
            />
          </template>
          <template v-if="user.likedByYou">
            <img
              src="./../../assets/icons/outlined-thumb-reverse.svg"
              class="match-icon"
            />
          </template>

          <template v-if="user.likedBy">
            <img
              src="./../../assets/icons/outlined-thumb.svg"
              class="match-icon"
            />
          </template>
        </div>
      </template>
    </div>
  </article>
</template>

<script>
export default {
  props: ['user', 'toggleLike', 'onUserClick', 'match', 'filled'],
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_vars.scss';

.container {
  height: 280px;
  width: 100%;
  color: #fff;
  padding: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-bottom: 30px;
  position: relative;
  margin-right: 40px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .icon {
    position: absolute;
    top: 10px;
    left: 8px;
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    &.filled {
      path {
        fill: red;
      }
    }
  }

  .match-action {
    background: $secondary;
    border-radius: 5px;
    display: flex;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .content {
    height: 100%;
    display: flex;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(0, 0, 0, 0.611764705882353)
    );
    align-items: flex-end;
    justify-content: space-between;

    .text {
      text-align: left;
      padding-left: 15px;
      padding-bottom: 10px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        opacity: 0.8;
      }

      .full-name {
        margin: 5px 0;
        font-weight: 600;
        font-size: 18px;
      }

      .years-old {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style>

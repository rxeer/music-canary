<template>
  <aside class="sidebar">
    <logo color="#39424D" class="sidebar-logo" />
    <h3 class="mobile-logo" @click="onLogoClick">LG</h3>
    <ul class="menu-list">
      <li class="menu-list-item">
        <router-link to="/home">
          <font-awesome-icon icon="home" class="menu-icon" />
          <span>Home</span>
        </router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/profile">
          <font-awesome-icon icon="user" class="menu-icon" />
          <span>My profile</span>
        </router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/search">
          <font-awesome-icon icon="search" class="menu-icon" />
          <span>Search</span>
        </router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/like-dislike">
          <font-awesome-icon icon="thumbs-up" class="menu-icon" />
          <span>Like/Dislike</span>
        </router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/chats">
          <font-awesome-icon icon="eye" class="menu-icon" />
          <span>Chats</span>
        </router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/matches">
          <font-awesome-icon icon="globe-europe" class="menu-icon" />
          <span>Matches</span>
        </router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/visitors">
          <font-awesome-icon icon="eye" class="menu-icon" />
          <span>Visitors</span>
        </router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/favorites">
          <font-awesome-icon icon="heart" class="menu-icon" />
          <span>Favorites</span>
        </router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/settings">
          <font-awesome-icon icon="cog" class="menu-icon" />
          <span>Setting</span>
        </router-link>
      </li>
    </ul>

    <p class="terms">
      Site Help & Support | Terms | Privacy 18 U.S.C. 2257 Record-Keeping
      Requirements Compliance Statement
    </p>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from '@/components/logo';

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    onLogoClick() {
      if (this.currentUser.username) {
        this.$router.push({ path: '/' });
      } else {
        this.$router.push({ path: '/like-dislike' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_vars.scss';

.sidebar {
  width: $sidebar-width;
  background: #fff;
  position: relative;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  bottom: 0;
  transform: translateY(-$header-height);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);

  .sidebar-logo {
    padding: 17px;
    border-bottom: 1px solid #d7e0ee;
  }

  .mobile-logo {
    display: none;
  }

  .terms {
    padding: 20px 30px;
    font-weight: 500;
    font-size: 9px;
    line-height: 14px;
    text-align: center;
  }

  .menu-list {
    padding: 0;
    margin: 10px 0;
    list-style: none;

    .menu-list-item {
      text-align: left;
      cursor: pointer;
      transition: all 0.15s;

      &:hover {
        background: #e5e5e5;
      }

      & > a {
        padding: 20px 30px;
        width: 100%;
        color: inherit;
        display: inline-block;
        text-decoration: none;
        font-family: inherit;
        transition: all 0.3s;
      }

      .router-link-active {
        font-weight: 600;

        & > svg {
          color: $primary;
        }
      }

      .menu-icon {
        margin: 0 15px;
      }
    }
  }

  @media (max-width: 1200px) {
    width: $sidebar-md-width;

    .menu-list {
      .menu-list-item {
        a {
          text-align: center;
          padding: 20px 5px;

          & > span {
            display: block;
            margin-top: 6px;
            font-size: 14px;
          }
        }
      }
    }

    .mobile-logo {
      display: block;
      color: #39424d;
      padding: 22px;
      margin-top: 0;
      cursor: pointer;
      text-align: center;
      border-bottom: 1px solid #d7e0ee;

      &:hover {
        opacity: 0.8;
      }
    }

    .sidebar-logo {
      display: none;
    }

    .terms {
      display: none;
    }
  }
}
</style>

<template>
  <loader-container :loading="loading">
    <div class="profile">
      <div class="cover" :style="{
          backgroundImage: 'url(' + cover + ')',
        }"></div>
      <div class="row">
        <div class="col-lg-3">
          <profile-info :editMode="editMode" />
        </div>
        <div class="col-lg-9">
          <profile-about
            :switchToEditMode="switchToEditMode"
            :saveForm="saveForm"
            :editMode="editMode"
          />

          <assets :switchToEditMode="switchToEditMode" :editMode="editMode" />
        </div>
      </div>
    </div>
  </loader-container>
</template>
<script>
import Vue from "vue";
import { mapActions } from "vuex";
import Component from "vue-class-component";
import LoaderContainer from "@/components/loader-container";

import Assets from "./components/Assets";
import ProfileAbout from "./components/About";
import ProfileInfo from "./components/ProfileInfo";

@Component({
  components: {
    Assets,
    ProfileAbout,
    ProfileInfo,
    LoaderContainer
  }
})
class Profile extends Vue {
  cover =
    "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/facebook-cover.jpg";
  editMode = false;
  loading = false;

  async mounted() {
    try {
      this.loading = true;
    } finally {
      this.loading = false;
    }
  }

  show(user) {
    this.$inertia.replace(this.route("users.edit", user.id));
  }

  switchToEditMode() {
    this.editMode = true;
  }

  saveForm() {
    this.editMode = false;
  }
}

export default Profile;
</script>
<style lang="scss">
@import "@/assets/sass/profile.scss";
</style>

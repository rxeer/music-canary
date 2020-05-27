<template>
  <card class="profile-card">
    <div class="profile-card-header">
      <p class="profile-card-title">About myself</p>

      <template v-if="editMode">
        <app-button size="small" :onClick="saveForm">Save</app-button>
      </template>

      <template v-else>
        <app-button
          size="small"
          class="outlined"
          variant="secondary"
          :onClick="switchToEditMode"
          >Edit profile</app-button
        >
      </template>
    </div>
    <p class="about" v-if="!editMode">{{ about }}</p>
    <textarea
      v-else
      type="text"
      class="about-input"
      v-model="about"
      maxlength="1000"
      rows="10"
    />
  </card>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Component from 'vue-class-component';

import Card from '@/components/card';
import AppButton from '@/components/button';

@Component({
  props: ['saveForm', 'editMode', 'switchToEditMode'],
  computed: {
    ...mapGetters(['currentUser']),
  },
  components: {
    Card,
    AppButton,
  },
})
class ProfileAbout extends Vue {
  about = '';

  mounted() {
    this.about = this.currentUser.description || 'Add description about you';
  }
}

export default ProfileAbout;
</script>

<template>
  <card class="profile-card info">
    <div class="profile-info">
      <div class="avatar">
        <div style="height: 100%;" class="avatar-container">
          <img :src="currentUser.avatar || placeholderImage" alt />

          <template v-if="editMode">
            <div class="avatar-overlay" @click="showModal">
              <div>
                <p class="title">New Photo</p>
              </div>
            </div>
          </template>
        </div>
        <template v-if="editMode">
          <TextInput
            :className="`small`"
            v-model="fullName"
            placeholder="Name Surname"
          />
        </template>
      </div>
      <template>
        <template v-if="editMode">
          <TextInput
            :className="`small`"
            v-model="fullName"
            placeholder="Name Surname"
          />
        </template>
        <h4 v-else class="name">
          {{ currentUser.surname }} {{ currentUser.username }}
        </h4>
      </template>

      <p class="nickname">nickname</p>

      <template>
        <template v-if="editMode">
          <TextInput
            :className="`small`"
            v-model="location"
            placeholder="Location"
          />
        </template>
        <p v-else class="location">{{ currentUser.location }}</p>
      </template>

      <template>
        <template v-if="editMode">
          <div style="max-width: 50%; margin: 0 auto;">
            <TextInput :className="`small`" v-model="age" placeholder="Years" />
          </div>
        </template>
        <span v-else class="years">25 y.o.</span>
      </template>

      <template v-if="!editMode">
        <ul class="actions">
          <li class="action">
            <img src="@/assets/icons/svg/profile-heart.svg" alt />
          </li>
          <li class="action">
            <img
              v-if="gender === 'male'"
              src="@/assets/icons/svg/male.svg"
              alt
            />
            <img v-else src="@/assets/icons/svg/woman.svg" alt />
          </li>
          <li class="action">
            <img src="@/assets/icons/svg/present.svg" alt />
          </li>
        </ul>
      </template>
    </div>
  </card>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Component from 'vue-class-component';

import Card from '@/components/card';
import AppButton from '@/components/button';
import TextInput from '@/components/text-input';

@Component({
  props: ['editMode'],
  computed: {
    ...mapGetters(['currentUser']),
  },
  components: {
    Card,
    TextInput,
    AppButton,
  },
})
class ProfileInfo extends Vue {
  fullName = '';
  location = '';
  age = 0;
  gender = 'male';
  placeholderImage = 'https://smk.org.uk/wp-content/uploads/avatar.jpg';

  showModal() {
    this.$modal.show('upload', { callback: null });
  }

  mounted() {
    this.age = 25;
    this.location = 'Ukraine';
    this.gender = this.currentUser.sex;
    this.fullName = this.currentUser.surname + ' ' + this.currentUser.surname;
  }

  switchGender(gender) {
    this.gender = gender;
  }
}

export default ProfileInfo;
</script>

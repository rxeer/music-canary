<template>
  <card class="profile-card">
    <div class="profile-card-header">
      <p class="profile-card-title"></p>

      <app-button
        size="small"
        class="outlined"
        variant="secondary"
        :onClick="showModal"
        >Add photos</app-button
      >
    </div>

    <div class="row" v-if="assetsGetter.photo && assetsGetter.photo.length">
      <div class="col-lg-3" v-for="photo in assetsGetter.photo" :key="photo.id">
        <v-image
          :showClose="editMode"
          :source="photo.path"
          :onDelete="() => deleteAsset(photo.id)"
        />
      </div>
    </div>
    <empty-block v-else />
  </card>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Component from 'vue-class-component';

import Card from '@/components/card';
import VImage from '@/components/image';
import AppButton from '@/components/button';
import EmptyBlock from '@/components/empty-block';

@Component({
  props: ['switchToEditMode', 'editMode'],
  computed: {
    ...mapGetters(['assetsGetter']),
  },
  methods: {
    ...mapActions(['deleteProfileContent', 'postProfileContent']),
  },
  components: {
    Card,
    VImage,
    EmptyBlock,
    AppButton,
  },
})
class Assets extends Vue {
  async deleteAsset(id) {
    try {
      await this.deleteProfileContent({
        contentType: 'photoId',
        contentId: id,
        type: 'photo',
      });
      this.$notify({
        group: 'app',
        type: 'success',
        title: 'Asset removed successfully',
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async saveForm(file) {
    try {
      return await this.postProfileContent({
        contentType: 'photo',
        contentData: {
          file,
          title: 'Super title',
          description: 'Super cool decription',
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  showModal() {
    this.$modal.show('upload', { callback: this.saveForm });
  }
}

export default Assets;
</script>

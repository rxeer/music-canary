<template>
  <modal name="upload" :width="460" :height="460" @before-open="beforeOpen">
    <div class="upload-modal">
      <div class="upload-content">
        <vue-dropzone
          ref="myVueDropzone"
          :id="isLoading ? 'loading' : 'dropzone'"
          @vdropzone-file-added="onDrop"
          @vdropzone-canceled="onCancel"
          @vdropzone-s3-upload-success="onSuccess"
          @vdropzone-success="onSuccess"
          :duplicateCheck="true"
          :options="dropzoneOptions"
        >
        </vue-dropzone>
        <div class="folder">
          <font-awesome-icon icon="cloud-upload-alt" class="icon" />
          <app-button size="small">Choose file</app-button>
          <p class="description">One high resolution image</p>
          <p class="extension">PNG, JPG 800x800</p>
        </div>
      </div>

      <div class="actions">
        <app-button
          size="small"
          :loading="loading"
          :disabled="disabled"
          :onClick="submit"
          >Upload photo</app-button
        >
      </div>
    </div>
  </modal>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

import AppButton from '@/components/button';

export default {
  components: {
    AppButton,
    vueDropzone: vue2Dropzone,
  },
  methods: {
    hide() {
      this.$modal.hide('upload');
      this.isLoading = false;
      this.disabled = false;
    },
    onDrop() {
      this.isLoading = true;
    },
    onCancel() {
      this.isLoading = false;
    },
    onSuccess(file) {
      this.file = file;
      this.disabled = false;
    },
    beforeOpen(event) {
      this.callback = event.params.callback;
    },
    async submit() {
      try {
        this.callback(this.file);
      } finally {
        this.hide();
      }
    },
  },
  unmounted() {
    this.isLoading = false;
    this.loading = false;
  },
  data: function() {
    return {
      file: null,
      callback: null,
      disabled: true,
      isLoading: false,
      loading: false,
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 300,
        maxFilesize: 1.5,
        uploadMultiple: false,
        headers: { 'My-Awesome-Header': 'header value' },
      },
    };
  },
};
</script>

<style lang="scss">
.vm--modal {
  border-radius: 12px !important;
}

.upload-modal {
  height: 100%;
  padding: 20px;

  .actions {
    padding: 20px;
    text-align: center;
  }

  .upload-content {
    height: 370px;
    position: relative;
    border-radius: 10px;
    border: 1px dashed #ff4159;

    #dropzone {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      opacity: 0;
      background: transparent;
      z-index: 99;
      border: none;
      margin: 5px 0;
    }

    #loading {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 99;
      border: none;
      opacity: 1;
      height: 100%;
      background: #fff;
    }

    .dz-preview .dz-image img {
      margin: 0 auto;
    }

    .dz-preview {
      width: 100%;
      margin: 30px 0;
    }
  }

  .folder {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .icon {
      font-size: 80px;
      opacity: 0.5;
      margin-bottom: 10px;
      margin-top: 20%;
    }

    .extensionn {
      margin: 2px;
      font-weight: 600;
      opacity: 0.5;
    }

    .description {
      opacity: 0.5;
      margin-bottom: 0;
    }
  }
}
</style>

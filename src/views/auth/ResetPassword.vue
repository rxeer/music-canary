<template>
  <section class="reset-password">
    <auth-container title="Forgot password?" :onHeaderLinkClick="redirectToSignUp">
      <p class="reset-description">
        Enter the email address you used when you joined and we’ll send you
        instructions to reset your password.
      </p>

      <p class="reset-description">
        For security reasons, we do NOT store your password. So rest assured
        that we will never send your password via email.
      </p>

      <form class="reset-form" v-on:submit.prevent="resetPassword">
        <TextInput
          placeholder="Email Address"
          label="Email Address"
          v-model="form.email"
          type="text"
          :error="form.errors().has('email') && form.errors().get('email')"
        />

        <div class="actions">
          <app-button
            type="submit"
            variant="secondary"
            :loading="loading"
            :disabled="form.empty() || loading"
          >Send Reset Instructions</app-button>
        </div>
      </form>
    </auth-container>
  </section>
</template>
<script lang="ts">
import { mapActions } from "vuex";
import AppButton from "@/components/button";
import TextInput from "@/components/text-input";
import form from "vuejs-form";

import AuthContainer from "@/views/auth/components/AuthContainer.vue";

export default {
  name: "Auth",
  data() {
    return {
      loading: false,
      form: form({
        email: ""
      })
        .rules({
          email: "email|required"
        })
        .messages({
          "email.email": "Invalid email address"
        })
    };
  },
  components: {
    TextInput,
    AuthContainer,
    AppButton
  },
  methods: {
    ...mapActions(["startResetPassword"]),
    redirectToSignUp() {
      this.$router.push({ path: "sign-up" });
    },
    async resetPassword() {
      if (
        this.form
          .validate()
          .errors()
          .any()
      )
        return;

      this.loading = true;

      try {
        await this.startResetPassword(this.email);
      } catch (err) {
        this.$notify({
          group: "app",
          type: "error",
          title: "We can't find a user with that e-mail address"
        });
        throw new Error(err.message);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.reset-password {
  .actions {
    text-align: center;
  }

  .reset-form {
    padding: 10px 0 20px 0;
  }
}
</style>

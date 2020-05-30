<template>
  <section class="auth">
    <auth-container title="Sign In" :onHeaderLinkClick="redirectToSignUp">
      <form @submit.prevent="login">
        <TextInput
          placeholder="Email"
          v-model="form.email"
          label="Email"
          type="text"
          :error="form.errors().has('email') && form.errors().get('email')"
        />
        <TextInput
          placeholder="Password"
          label="Password"
          type="password"
          :error="
            form.errors().has('password') && form.errors().get('password')
          "
          v-model="form.password"
          notes="Forgot password?"
          :onNotesClick="redirectToResetPassword"
        />

        <checkbox color="#5e31dc" class="checkbox" v-model="rememberMe">Remember me</checkbox>

        <div class="actions">
          <app-button
            type="submit"
            variant="secondary"
            :loading="loading"
            :disabled="form.empty() || loading"
          >Sign In</app-button>
        </div>
      </form>
    </auth-container>
  </section>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import Component from "vue-class-component";
import form from "vuejs-form";

import Checkbox from "vue-material-checkbox";
import AppButton from "@/components/button";
import TextInput from "@/components/text-input";

import AuthContainer from "@/views/auth/components/AuthContainer.vue";

@Component({
  components: {
    TextInput,
    AuthContainer,
    AppButton,
    Checkbox
  },
  methods: {
    ...mapActions(["signIn"])
  }
})
class SignIn extends Vue {
  form = form({
    email: "",
    password: ""
  })
    .rules({
      email: "email|required",
      password: "required|min:5"
    })
    .messages({
      "email.email": "Invalid email address"
    });

  loading = false;
  rememberMe = false;

  redirectToSignUp() {
    this.$router.push({ path: "sign-up" });
  }

  redirectToResetPassword() {
    this.$router.push({ path: "/reset-password" });
  }

  async login() {
    if (
      this.form
        .validate()
        .errors()
        .any()
    )
      return;

    try {
      this.loading = true;

      await this.signIn(this.form.all());
      this.$router.push({ path: "/portal" });
    } finally {
      this.loading = false;
    }
  }
}

export default SignIn;
</script>

<style lang="scss" scoped>
@import "@/assets/sass/sign-in.scss";
</style>

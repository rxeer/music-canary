<template>
  <loader-container :loading="loadingApp">
    <section class="auth">
      <auth-container
        title="Sign Up"
        header="Already a member?"
        link="Sign in"
        :onHeaderLinkClick="redirectToSignIn"
      >
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-lg-6 col-sm-6 first-form-column">
              <TextInput
                placeholder="First Name"
                v-model="form.firsName"
                label="First Name"
                :error="form.errors().has('firsName') && form.errors().get('firsName')"
              />
              <TextInput
                placeholder="Email Address"
                label="Email Address"
                type="email"
                v-model="form.email"
                :error="form.errors().has('email') && form.errors().get('email')"
              />
              <TextInput
                placeholder="Password"
                label="Password"
                :error="form.errors().has('password') && form.errors().get('password')"
                v-model="form.password"
                type="password"
              />
            </div>
            <div class="col-lg-6 col-sm-6 second-form-column">
              <TextInput
                placeholder="Last Name"
                v-model="form.lastName"
                label="Last Name"
                :error="form.errors().has('lastName') && form.errors().get('lastName')"
              />

              <app-select :options="countryList" :searchable="true" />
              <TextInput
                v-model="form.confirmPassword"
                placeholder="Confirm Password"
                label="Confirm Password"
                type="password"
                :error="form.errors().has('confirmPassword') && form.errors().get('confirmPassword')"
              />
            </div>
          </div>

          <checkbox
            color="#5e31dc"
            class="checkbox"
            v-model="acceptTerms"
          >I agree to the terms & conditions and privacy policy</checkbox>

          <div class="actions">
            <app-button
              variant="secondary"
              :disabled="!acceptTerms || loading"
              :loading="loading"
              type="submit"
            >Create account</app-button>
          </div>
        </form>
      </auth-container>
    </section>
  </loader-container>
</template>
<script>
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import Component from "vue-class-component";
import form from "vuejs-form";

import Checkbox from "vue-material-checkbox";
import AppSelect from "@/components/select";
import AppButton from "@/components/button";
import TextInput from "@/components/text-input";
import LoaderContainer from "@/components/loader-container";

import AuthContainer from "@/views/auth/components/AuthContainer.vue";

@Component({
  components: {
    Checkbox,
    TextInput,
    AuthContainer,
    AppButton,
    AppSelect,
    LoaderContainer
  },
  computed: {
    ...mapGetters(['countryList'])
  },
  methods: {
    ...mapActions(["signUp", "getCountryList"])
  }
})
class SignUp extends Vue {
  form = form({
    email: "",
    password: ""
  })
    .rules({
      lastName: "text|required",
      email: "email|required",
      firstName: "text|required",
      password: "required|min:5",
      confirmPassword: "required|min:5"
    })
    .messages({
      "email.email": "Invalid email address"
    });

  loading = false;
  loadingApp = false;
  acceptTerms = false;

  async mounted() {
    this.loadingApp = true;
    try {
      await this.getCountryList();
    } finally {
      this.loadingApp = false;
    }
  }

  async submit() {
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

  redirectToSignIn() {
    this.$router.push({ path: "/" });
  }

  redirectToResetPassword() {
    this.$router.push({ path: "/reset-password" });
  }
}

export default SignUp;
</script>

<style lang="scss">
@import "@/assets/sass/sign-up.scss";
</style>

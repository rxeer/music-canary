<template>
  <section class="auth">
    <auth-container
      title="Sign Up"
      header="Already a member?"
      link="Sign in"
      :onHeaderLinkClick="redirectToSignIn"
    >
      <form v-on:submit.prevent="register">
        <div class="row">
          <div class="col-lg-6 col-sm-6 first-form-column">
            <TextInput
              placeholder="First Name"
              v-model="name"
              label="First Name"
              :required="true"
            />
            <TextInput
              placeholder="Email Address"
              label="Email Address"
              type="email"
              v-model="email"
              :required="true"
            />
            <TextInput
              placeholder="Password"
              label="Password"
              required
              v-model="password"
              type="password"
            />
          </div>
          <div class="col-lg-6 col-sm-6 second-form-column">
            <TextInput
              placeholder="Last Name"
              v-model="username"
              label="Last Name"
              required
            />
            <TextInput
              placeholder="Country"
              v-model="surname"
              label="Country"
            />
            <TextInput
              v-model="confirmPassword"
              placeholder="Confirm Password"
              label="Confirm Password"
              type="password"
            />
          </div>
        </div>

        <checkbox color="#5e31dc" class="checkbox" v-model="acceptTerms">
          I agree to the terms & conditions and privacy policy
        </checkbox>

        <div class="actions">
          <app-button
            variant="secondary"
            :disabled="!acceptTerms || loading"
            :loading="loading"
            type="submit"
            >Create account</app-button
          >
        </div>
      </form>
    </auth-container>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import Component from 'vue-class-component';

import Checkbox from 'vue-material-checkbox';
import AppButton from '@/components/button';
import TextInput from '@/components/text-input';

import AuthContainer from '@/views/auth/components/AuthContainer.vue';

@Component({
  components: {
    Checkbox,
    TextInput,
    AuthContainer,
    AppButton,
  },
  methods: {
    ...mapActions(['signUp']),
  },
})
class SignUp extends Vue {
  loading = false;
  acceptTerms = false;
  name = '';
  surname = '';
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  redirectToSignIn() {
    this.$router.push({ path: '/' });
  }

  redirectToResetPassword() {
    this.$router.push({ path: '/reset-password' });
  }

  async register() {
    const {
      name,
      surname,
      username,
      email,
      password,
      confirmPassword,
    } = this;
    if (this.password === this.confirmPassword) {
      try {
        this.loading = true;
        const { data } = await this.signUp({
          name,
          surname,
          username,
          email,
          password,
          method: 'mobile',
          confirmPassword,
        });

        if (data.status === 200 || data.status === '200') {
          this.$router.push({ path: '/' });
          this.$notify({
            group: 'app',
            type: 'success',
            title: 'You successfully registered. Please login.',
          });
        } else {
          Object.values(data.msg).forEach((item) => {
            this.$notify({
              group: 'app',
              type: 'error',
              title: item[0],
            });
          });
        }
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: err.message,
        });
      } finally {
        this.loading = false;
      }
    } else {
      this.$notify({
        group: 'app',
        type: 'error',
        title: "Password doesn't match",
      });
    }
  }
}

export default SignUp;
</script>

<style lang="scss">
@import '@/assets/sass/sign-up.scss';
</style>

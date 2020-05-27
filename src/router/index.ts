import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import SignInPage from '@/views/auth/SignIn.vue';
import SignUpPage from '@/views/auth/SignUp.vue';
import DashboardPage from '@/views/Dashboard.vue';
import ProfilePage from '@/views/profile/Profile.vue';
import ResetPasswordPage from '@/views/auth/ResetPassword.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'SignIn',
    component: SignInPage,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUpPage,
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPasswordPage,
  },
  {
    path: '/portal',
    component: DashboardPage,
    children: [
      {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

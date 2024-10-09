import Favicon from './extensions/icon.png';
import Logo from './extensions/logo.svg';
import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Favicon,
    },
    menu: {
      logo: Logo,
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Won Games!',
        'Auth.form.welcome.subtitle': 'Log in to your account',
      },
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: '#030415',
          primary600: '#f231a5',
          primary700: '#f231a5',
          neutral0: '#0d102f',
          neutral100: '#030415',
        },
      },
    },
    locales: [],
    tutorials: false,
    notifications: {
      releases: false,
    },
  },
  bootstrap(app: StrapiApp) {},
};

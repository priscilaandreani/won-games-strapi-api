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
    locales: [],
  },
  bootstrap(app: StrapiApp) {},
};

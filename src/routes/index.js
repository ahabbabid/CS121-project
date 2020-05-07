/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/Index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/views/Account/Index.vue'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/views/Login/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/views/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/about-me',
  },
  {
    path: '/customroute',
    name: 'customroute.index',
    component: () => import('@/views/CustomRoute/Index.vue'),

    //If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
  {
    path: '/about-me',
    name: 'about.me',
    component: () => import('@/views/About/Me.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },
  {
    path: '/about-project',
    name: 'about.project',
    component: () => import('@/views/About/Project.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/Portfolio.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },
  {
    path: '/*',
    redirect: '/about-me',
  },
  
];

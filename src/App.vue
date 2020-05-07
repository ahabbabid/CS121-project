<template>
  <div id="app">
    <v-hero></v-hero>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view/>
    </transition>
    <v-footer></v-footer>
  </div>
</template>
<script>
/* ============
 * Entry Point
 * ============
 *
 * The entry point of the application.
 */
import VHero from './components/hero.vue';
import VFooter from './components/Footer.vue';
export default {
  /**
   * The name of the application.
   */
  name: 'MyProfile',
  components:{
    VHero,
    VFooter,
  },

  /**
   * Fires when the app has been mounted.
   */
  mounted() {
    // If the user is authenticated,
    // fetch the data from the API
    
  },
};
</script>

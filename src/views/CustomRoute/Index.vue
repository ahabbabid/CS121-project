<template>
  <v-layout>
   
      <h1>My Custom Route</h1>
      <custom-component></custom-component>
  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import VLayout from '@/layouts/Default.vue';
import VCard from '@/components/Card.vue';
import CustomComponent from '@/components/CustomComponent.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'CustomRoute',

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    VCard,
    CustomComponent,
  },
  mounted:()=>{
    console.log("Custom Route");
  }
};
</script>

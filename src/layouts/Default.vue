<template>
  <div>
    
    
    <slot></slot>
    
  </div>
</template>


<script>
import VHero from "./../components/hero.vue";
import VFooter from "./../components/Footer.vue";
export default {
  /**
   * The name of the layout.
   */
  name: "DefaultLayout",
  components: {
    VHero,
    VFooter
  },

  
  data() {
    return {
      menuCollapsed: false
    };
  },

  
  methods: {
    
    logout() {
      this.$store.dispatch("auth/logout");
    },

    /**
     * Will toggle the menu.
     */
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    }
  }
};
</script>

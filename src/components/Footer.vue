<template>
  <footer class="footer">
    <div class="content has-text-centered is-primary">
      <p>
        <strong>e-Profile</strong> by
        <a href="#">Ahabb</a>. 
        
      </p>
    </div>
  </footer>
</template>

<script>
/* ============
 * Card Component
 * ============
 *
 * A basic card component.
 *
 * Gives an idea how components work.
 */

import SlotMixin from "@/mixins/slot";

export default {
  /**
   * The name of the component.
   */
  name: "Footer",

  /**
   * The mixins that the component can use.
   */
  mixins: [SlotMixin],

  /**
   * The properties that the component accepts.
   */
  props: {},

  /**
   * The computed properties that the component can use.
   */
  computed: {}
};
</script>

<style>
section {
  padding-top: 40px;
}
.intro {
  margin-top: -14em;
}
</style>

<template>
  <v-layout>
    <slot>
      <div :class="[modal.defaultClass, {'is-active': modal.active}]">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image animated fadeIn">
            <img :src="modal.image">
          </p>
        </div>
        <button class="modal-close is-large" @click="closeModal"></button>
      </div>
      <section class="hero is-medium is-warning is-long">
        <div class="hero-head">
          <div class="container has-text-centered" style="padding-top:40px;">
            <h1 class="title is-2">Here are some projects that I've worked on previously</h1>
          </div>
        </div>

        <div class="hero-body">
          <div class="container is-narrow has-text-centered">
            <div class="columns">
              <div class="column is-4" v-for="project in projects">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">{{project.name}}</p>
                  </header>
                  <div class="card-image">
                   
                  </div>
                  <div class="card-content">
                    <div class="content">
                      {{project.description}}
                    </div>
                    <div class="media ">
                      <div class="media-content has-text-centered">
                        <a @click="showImageModal(project)" class="subtitle has-text-link">Preview</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </slot>
  </v-layout>
</template>
<script>
import VLayout from "./../layouts/Default.vue";
export default {
  name: "AboutMe",

  data: function() {
    return {
      modal: {
        image: "",
        active: false,
        defaultClass: "modal",
        activeClass: ""
      },

      projects: [
        {
          name: "Misaal 18",
          description: "Misaal is an event that happens at my previous college every year. The event required a registration system to register people for the event. I built a fully customized cloud based registration system.",
          image: require("./../assets/images/misaal18.png")
        },
        {
          name: "GIKI Admin-Panel",
          description:"The GIKI Web Team is doing a complete revamp of the GIKI official website. I've been given the task to design the admin panel of the website and also work on the backend of the website.",
          image: require("./../assets/images/gikiadmin.png")
        },
        {
          name: "GIKI WebTeam Task",
          description:"This is a mini e-store I made as an induction task for the GIKI web team. It can register products from an administrator and display them to a customer. Products can be sorted by tags.",
          image: require("./../assets/images/estore.png")
        }
      ]
    };
  },

  components: {
    VLayout
  },
  methods: {
    showImageModal: function(project) {
      (this.modal.image = project.image), (this.modal.active = true);
    },
    closeModal: function() {
      this.modal.active = false;
    }
  }
};
</script>


<style>
.intro {
  margin-top: -4em;
}
.top-margin{
  margin-top:40px;
}
</style>

<template>
  <v-layout>
    <slot>
      <section class="hero is-medium is-warning is-long">
        <div class="hero-head">
          <div class="container has-text-centered" style="padding-top:40px;">
            <pulse-loader :loading="loading"></pulse-loader>
            <div @mouseover="showEdit" @mouseleave="hideEdit" >
              <div v-show="contentVisible">
                <h1 class="title is-2">{{user.description}}</h1>
                <h2 class="subtitle is-5">{{user.bio}}</h2>
              </div>
              <div class="columns is-centered">
                <div v-show="formVisible" class="column is-5">
                <form>
                  <input class="input" type="text" v-model="user.description">
                  <input class="input" type="text" v-model="user.bio">
                </form>
              </div>
              </div>
              
              <a @click="showForm" :class="[hidden, danger]">{{editButtonValue}}</a>
            </div>
            
            <div class="columns is-centered top-margin" >
              <div class="column is-2">
                <figure class="image is-256x256">
                  <img class="is-rounded" src="./../../assets/images/me.jpg">
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-foot has-text-centered">
          <img class="is-bottom" src="./../../assets/images/development.png" alt>
        </div>
      </section>
      <section class="has-text-centered">
        <div class="container intro">
          <div class="columns box">
            <div class="column">
              <span class="is-size-1">
                <i class="fa fa-graduation-cap"></i>
              </span>

              <h1 class="title is-3">Student</h1>
              <p>I am a student at the GIK Institute, currently enrolled in the BCS program.</p>
              <h2 class="subtitle is-4">My Subjects</h2>
              <ul>
                <li>CS121</li>
                <li>CS101</li>
                <li>MT101</li>
                <li>PH101</li>
                <li>HM101</li>
              </ul>
            </div>
            <div class="column">
              <span class="is-size-1">
                <i class="fa fa-code"></i>
              </span>
              <h1 class="title is-3">Front-End Developer</h1>
              <p>I've worked with the following frameworks based on HTML, CSS, and JavaScript:</p>
              <ul>
                <li>Twitter Bootstrap(CSS & JS)</li>
                <li>Bulma(CSS)</li>
                <li>Vue.js(JS)</li>
              </ul>
            </div>
            <div class="column">
              <span class="is-size-1">
                <i class="fa fa-linode"></i>
              </span>

              <h1 class="title is-3">Back-End Developer</h1>
              <p>I've worked with the following frameworks in PHP and Node.js</p>
              <ul>
                <li>Laravel(PHP)</li>
                <li>Express(Node.js)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </slot>
  </v-layout>
</template>
<script>

import VLayout from "./../../layouts/Default.vue";
import db from "@/plugins/firebase.js";
import PulseLoader from "@/plugins/pulse-loader.js";


export default {
  name: "AboutMe",
  components: {
    VLayout,
    PulseLoader
  },
  data: function() {
    return {
      loading:true,
      loadingFinished:false,
      contentVisible: true,
      formVisible: false,
      editButtonValue: "edit",
      hidden: "is-hidden",
      danger: "has-text-danger",
      user: {
        description: "",
        bio: ""
      }
    };
  },
  methods: {
    showEdit: function() {
      this.hidden = "";
    },
    showForm: function() {
      if (this.formVisible == false && this.contentVisible == true) {
        this.editButtonValue = "update"
        this.contentVisible = false
        this.formVisible = true
      }else{
        db.collection("user").doc("xUpf0GrdNn8pr4nPFaqH").update({
          description: this.user.description,
          bio:this.user.bio
        })
        this.editButtonValue = "edit"
        this.contentVisible = true
        this.formVisible = false
      }
    },
    hideEdit: function() {
      this.hidden = "is-hidden";
    }
  },

  created() {
    db.collection("user")
      .doc("xUpf0GrdNn8pr4nPFaqH")
      .get()
      .then(doc => {
        this.loading = false;
        this.user = doc.data();
      });
  }
};
</script>


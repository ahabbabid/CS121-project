<template>
  <div>
    
  <section class="hero is-dark is-medium">
    
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container"></div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <div>Hello! I am
              <pulse-loader :loading="loading"></pulse-loader>
              <br>

              <div @mouseleave="hideEdit" @mouseover="showEdit">
                <span v-show="showName" class="title is-2 bounceOutDown">{{user.name}}</span>
                <input class="input is-info" v-show="showInput" v-model="user.name" type="text">
                <a @click="showNameInput" :class="[hidden, danger]">{{editButtonValue}}</a>
              </div>
              <div @mouseleave="hideTitleEdit" @mouseover="showTitleEdit">
                <span v-show="showTitle" class="subtitle is-size-3">{{user.title}}</span>
                <input class="input is-info" v-show="showInputTitle" type="text" v-model="user.title">
                <a @click="showTitleInput" :class="[titleHidden, danger]">{{editTitleButtonValue}}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <ul>
            <li>
              <span class="is-size-3 animated">
                <i class="fa fa-facebook-f animated bounceInDown"></i>
              </span>
            </li>
            <li>
              <span class="is-size-3">
                <i class="fa fa-instagram animated bounceInDown"></i>
              </span>
            </li>
            <li>
              <span class="is-size-3 ">
                <i class="fa fa-twitter animated bounceInDown"></i>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <router-link tag="li" to="/about-me">
              <a>About Me</a>
            </router-link>
            <router-link tag="li" to="/about-project">
              <a>About This Project</a>
            </router-link>
            <router-link tag="li" to="/portfolio">
              <a>Portfolio</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  </div>
</template>

<script>


import SlotMixin from "@/mixins/slot";
import db from "@/plugins/firebase.js";
import PulseLoader from "@/plugins/pulse-loader.js";

export default {
  components:{
    PulseLoader,
  },
  
  name: "Hero",

  
  mixins: [SlotMixin],

  data: function() {
    return {
      loading:true,
      loadingFinished:false,
      danger:"has-text-danger",
      
      user: {
        name: "",
        title: "",
        description:"",
        title:"",
      },
      showName: true,
      showTitle: true,
      showInput: false,
      showInputTitle: false,
      hidden: "is-hidden",
      titleHidden: "is-hidden",
      editButtonValue: "edit",
      editTitleButtonValue: "edit",
      
    };
  },
  
 
  props: {},
  created(){
    db.collection("user").doc("xUpf0GrdNn8pr4nPFaqH").get().then(doc=>{
        this.loading=false;
        this.user=doc.data();
      })
  
    

  },
  
  

  /**
   * The computed properties that the component can use.
   */
  computed: {},
  methods: {
    showNameInput: function() {
      if (this.showName === true && this.showInput == false) {
        this.showName = false;
        this.showInput = true;
        this.editButtonValue = "update";
      } else if (this.showName == false && this.showInput == true) {
        db.collection("user").doc("xUpf0GrdNn8pr4nPFaqH").update({
          name: this.user.name
        })
        this.showName = true;
        this.showInput = false;
        this.editButtonValue = "edit";
      }
    },
    showTitleInput: function() {
      if (this.showTitle === true && this.showInputTitle == false) {
        this.showTitle = false;
        this.showInputTitle = true;
        this.editTitleButtonValue = "update";
      } else if (this.showTitle == false && this.showInputTitle == true) {
        db.collection("user").doc("xUpf0GrdNn8pr4nPFaqH").update({
          title: this.user.title
        })
        this.showTitle = true;
        this.showInputTitle = false;
        this.editTitleButtonValue = "edit";
      }
    },
    updateName: function() {
      this.showName = true;
      this.showInput = false;
    },
    showEdit: function() {
      this.hidden = "";
    },
    showTitleEdit: function() {
      this.titleHidden = "";
    },
    hideEdit: function() {
      this.hidden = "is-hidden";
    },
    hideTitleEdit: function() {
      this.titleHidden = "is-hidden";
    },

  }
};
</script>

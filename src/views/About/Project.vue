<style>
.column {
  align-items: stretch;
}
</style>


<template>
  <v-layout>
    <template>
      <section class="hero is-medium is-warning is-long">
        <div class="hero-head">
          <div class="container has-text-centered" style="padding-top:40px;">
            <h1 class="title is-size-2">This project was created using...</h1>
            <h2
              class="subtitle is-size-4"
            >This project has been created using Bulma, Vue.js and Firebase. The description of each of these is available below in case you want to learn these tools and frameworks.</h2>
          </div>
        </div>
        <div class="hero-body"></div>
      </section>
      <section class="flow-into-hero">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-flex">
              <div class="box">
                <img
                  src="./../../assets/images/bulma-logo.png"
                  alt
                  class="logo"
                  width="120"
                  height="60"
                >
                <p>Bulma is a free, open source CSS framework based on Flexbox and used by more than 100,000 developers. It is 100% responsive,built for mobile first. With its modularity you can easily import exactly what you need and use it instead of including many files</p>
              </div>
            </div>
            <div class="column is-flex">
              <div class="box">
                <img
                  src="./../../assets/images/vuejs-logo.png"
                  alt
                  class="logo"
                  width="30"
                  height="40"
                >
                <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
              </div>
            </div>
            <div class="column is-flex">
              <div class="box">
                  <img src="./../../assets/images/firebase-logo.png" alt="" width="140" height="80">
                  <p>Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users.</p>
                  <span class="subtitle">
                      Backed by Google, trusted by top apps
                  </span>
                  <p>Firebase is built on Google infrastructure and scales automatically, for even the largest apps.</p>
                  <span class="subtitle">One platform, with products that work better together</span>
                  <p>Firebase products work great individually but share data and insights, so they work even better together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </v-layout>
</template>
<script>
import VLayout from "./../../layouts/Default.vue";
export default {
  name: "AboutMe",
  components: {
    VLayout
  }
};
</script>


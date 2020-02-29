<template>
  <div class="container">
    <div>
      <div class="content-logos">
        <logo />
      </div>
      <h1 class="title">
        Nuxt.js
      </h1>
      <h2 class="subtitle">
        <a href="https://nuxtjs.org/">Nuxt</a> s a progressive framework based
        on <a href="https://vuejs.org/">Vuejs</a> to create modern web
        applications. It is based on Vue.js official libraries (vue, vue-router
        and vuex) and powerful development tools (webpack, Babel and PostCSS).
      </h2>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 5% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.h3 {
  font-weight: 400;
  margin: 10px;
}
</style>

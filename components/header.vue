<template>
  <header class="head">
    <h1 class="head__title">
      Nabucodonosor
    </h1>
    <a href="/">
      <h2 class="head__page">Inicio</h2>
    </a>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    pageTitle: {
      type: String,
      required: true,
      default: 'Inicio'
    }
  }
}
</script>

<style lang="scss">
.head {
  border-bottom: 2px solid $sandy-brown;
  background-color: $purple-light;
  padding: 30px 0;
  &__title,
  &__page {
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }

  &__title {
    color: #f0e1ba;
    font-size: 2em;
    line-height: 1.5em;
  }

  &__page {
    color: $sandy-brown;
    font-size: 1.2em;
    font-weight: 300;
    transition: 500ms;
    width: 10%;
    &:hover {
      font-size: 1.35em;
    }
  }
}
</style>

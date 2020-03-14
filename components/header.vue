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
  border-bottom: 1px solid $dark-slate-gray;
  background-color: $color-background;
  padding: 30px 0;
  &__title,
  &__page {
    color: $color-main;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }

  &__title {
    font-size: 2em;
    line-height: 1em;
    font-weight: 600;
  }

  &__page {
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

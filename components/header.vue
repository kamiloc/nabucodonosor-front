<template>
  <header>
    <h1 class="head__title">Nabucodonosor</h1>
    <h2 class="head__page">{{ pageTitle }}</h2>
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
  &__title,
  &__page {
    margin: 1% auto;
    text-align: center;
    width: 100%;
  }

  &__title {
    color: $primaryText;
    font-size: 2em;
  }

  &__page {
    font-size: 1.2em;
  }
}
</style>

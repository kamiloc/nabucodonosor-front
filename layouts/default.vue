<template>
  <div>
    <ap-header page-title="Inicio" />
    <nuxt />
  </div>
</template>

<script>
import apHeader from '~/components/header'

export default {
  components: { apHeader }
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  font-family: 'Nunito Sans', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

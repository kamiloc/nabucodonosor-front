<template>
  <footer class="foot">
    <p class="foot__line-1">
      <a href="https://www.poli.edu.co/">Politécnico Grancolombiano</a> -
      Arquitectura del computador
    </p>
    <p class="foot__line-2">
      Todos los derechos reservaods, contacto:
      <a href="mailto:crbarreto@poligran.edu.co">crbarreto@poligran.edu.co</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.foot {
  border-top: 1px solid $dark-slate-gray;
  bottom: 0;
  left: 0;
  padding: 20px 15px;
  position: absolute;
  right: 0;
  text-align: center;
  &__line-1 {
    font-size: 1em;
    line-height: 1.2em;
    margin: 4px 0;
  }
  &__line-2 {
    font-size: 0.8em;
    line-height: 0.8em;
  }
}
</style>

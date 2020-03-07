<template>
  <div>
    <ap-header :page-title="pageTitle" />
    <nuxt />
    <ap-footer />
  </div>
</template>

<script>
import apHeader from '~/components/header'
import apFooter from '~/components/footer'

export default {
  components: { apHeader, apFooter },
  props: {
    pageTitle: {
      type: String,
      default: 'Inicio'
    }
  }
}
</script>

<style lang="scss">
/* 
  ##########################################
  ## COMMONS
 */

@import url(../assets/_normalize.scss);
@import url(../assets/vars/_colors.scss);
@import url(../assets/vars/_mixins.scss);
</style>

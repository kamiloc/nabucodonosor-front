<template page-title="Historial">
  <div class="history">
    <div class="history__head">
      <h1 class="history__title">Historial</h1>
      <vs-button color="#3d405b" gradient @click="fetchData">
        Refrescar
      </vs-button>
    </div>

    <vs-alert shadow color="#e07a5f">
      <template #title>
        Aviso
      </template>
      La información presentada en este informe no corresponde a datos en
      <b>tiempo real</b>, de ser requerida la actualización de los mismos será
      necesario utilizar el botón para refrescar la vista.
    </vs-alert>

    <vuetable
      ref="vuetable"
      :css="css.table"
      :api-mode="false"
      :fields="fields"
      :per-page="perPage"
      :data-manager="dataManager"
      pagination-path="pagination"
      @vuetable:pagination-data="onPaginationData"
    ></vuetable>

    <div style="padding-top:10px">
      <vuetable-pagination
        ref="pagination"
        :css="css.pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import axios from 'axios'
import _ from 'lodash'

import VuetableStyle from '~/store/vuetable-styles'
import VuetableFileds from '~/store/vuetable-fileds'

import movements from '~/apollo/queries/movements'

export default {
  layout: 'ap-default',
  components: {
    Vuetable,
    VuetablePagination
  },
  apollo: {
    data: {
      prefetch: true,
      query: movements
    }
  },
  data() {
    return {
      css: VuetableStyle,
      fields: VuetableFileds,
      perPage: 10,
      data: []
    }
  },
  watch: {
    data(newVal, oldVal) {
      this.$refs.vuetable.refresh()
    }
  },
  mounted() {
    // this.fetchData()
  },
  methods: {
    fetchData() {
      const loading = this.$vs.loading()

      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.data = response.data
          if (loading) loading.close()
        })
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page)
    },
    dataManager(sortOrder, pagination) {
      if (!this.data || this.data.length < 1) return

      let local = this.data

      // sortOrder can be empty, so we have to check for that as well
      if (sortOrder.length > 0) {
        // eslint-disable-next-line no-console
        console.log('orderBy:', sortOrder[0].sortField, sortOrder[0].direction)
        local = _.orderBy(local, sortOrder[0].sortField, sortOrder[0].direction)
      }

      pagination = this.$refs.vuetable.makePagination(
        local.length,
        this.perPage
      )
      // eslint-disable-next-line no-console
      console.log('pagination:', pagination)
      const from = pagination.from - 1
      const to = from + this.perPage

      return {
        pagination,
        data: _.slice(local, from, to)
      }
    },
    onActionClicked(action, data) {
      // eslint-disable-next-line no-console
      console.log('slot actions: on-click', data.name)
    }
  }
}
</script>

<style lang="scss">
.foot {
  position: static;
}
.history {
  margin: 2% auto;
  width: 70%;
  &__head {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__title {
    margin-bottom: 2%;
  }
}
.vuetable-body-wrapper {
  margin-top: 2%;
}
</style>

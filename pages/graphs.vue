<template>
  <div>
    <p style="text-align: center; width: 100%;">Gráficas</p>

    <div class="chart-container">
      <div class="chart">
        <pie-chart v-if="loaded" :chartdata="chartdata" :options="options" />
      </div>

      <div class="chart">
        <bubble-chart
          v-if="loaded"
          :chartdata="secondChartdata"
          :options="secondOptions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'

import PieChart from '~/components/pie-chart'
import BubbleChart from '~/components/bubble-chart'
import movements from '~/apollo/queries/movements'

export default {
  layout: 'ap-default',
  components: { PieChart, BubbleChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options: {
      hoverBorderWidth: 20,
      responsive: true,
      maintainAspectRatio: false
    },
    secondOptions: {
      hoverBorderWidth: 20,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    }
  }),
  mounted() {
    const loading = this.$vs.loading()
    this.loaded = false

    this.$apollo
      .query({ query: movements })
      .then(({ data }) => {
        if (data && data.Movements) {
          const { labels, dates } = this.getMoveDatesGroup(data.Movements)

          this.chartdata = {
            labels: ['Arriba', 'Abajo', 'Izquierda', 'Derecha'],
            datasets: [
              {
                label: 'Repeticiones',
                backgroundColor: ['#fcba03', '#41B883', '#E46651', '#00D8FF'],
                data: this.getMoveCountArr(data.Movements)
              }
            ]
          }

          this.secondChartdata = {
            labels,
            datasets: [
              {
                label: '-',
                backgroundColor: ['#fcba03', '#41B883', '#E46651', '#00D8FF'],
                data: dates
              }
            ]
          }
        }

        this.loaded = true
        loading.close()
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)

        this.loaded = true
        loading.close()
      })
  },
  methods: {
    getMoveCountArr(data) {
      const countArr = []

      countArr.push(data.filter((item) => item.type === 'up').length || 0)
      countArr.push(data.filter((item) => item.type === 'down').length || 0)
      countArr.push(data.filter((item) => item.type === 'left').length || 0)
      countArr.push(data.filter((item) => item.type === 'right').length || 0)

      return countArr
    },
    getMoveDatesGroup(data) {
      const groups = _.groupBy(data, (date) =>
        moment(date.created)
          .startOf('day')
          .format()
      )

      return {
        labels: Object.keys(groups).map((date) =>
          moment(date).format('MMM Do YY')
        ),
        dates: Object.keys(groups).map((date) => groups[date].length)
      }
    }
  }
}
</script>

<style lang="scss">
.chart-container {
  align-items: center;
  display: flex;
  margin: 4% auto;
  width: 95%;

  .chart {
    flex: 0 0 45%;
    margin: 0 auto;
    max-width: 45%;
  }
}
</style>

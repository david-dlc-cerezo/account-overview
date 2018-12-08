<template>
  <div class="portfolio-summary">
    <div v-if="portfolio">
      {{portfolio.type}}
      {{portfolio.name}}
      {{portfolio.latest_allocation.balance | currency}}
      {{portfolio.latest_allocation.invested | currency}}
      {{portfolio.latest_allocation.earnings | currency}}
      {{portfolio.risk_level}}
    </div>
  </div>
</template>

<script>
import currency from '@/filters/currency.js'

export default {
  name: 'PortfolioSummary',
  props: {
    portfolio: Object
  },
  filters: {
    currency
  }
}
</script>

<style scoped>
</style>

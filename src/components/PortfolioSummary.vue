<template>
  <div class="portfolio-summary">
    <div v-if="portfolio">
      {{portfolio.currency.symbol}}
      {{portfolio.type}}
      {{portfolio.name}}
      {{portfolio.latest_allocation.balance | currency(portfolio.currency.code) }}
      {{portfolio.latest_allocation.invested | currency(portfolio.currency.code) }}
      {{portfolio.latest_allocation.earnings | currency(portfolio.currency.code) }}
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

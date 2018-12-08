<template>
  <div class="transaction-row">
    {{transaction.portfolio.name}}
    {{transaction.status}}
    {{transaction.item}}
    {{transaction.created | date }}
    {{transaction.amount | currency }}
  </div>
</template>

<script>
import currency from '@/filters/currency.js'
import date from '@/filters/date.js'

export default {
  name: 'TransactionRow',
  props: {
    transaction: Object
  },
  filters: {
    currency,
    date
  }
}
</script>

<style scoped>
</style>

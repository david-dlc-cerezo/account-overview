<template>
  <section class="section portfolio-overview">
    <div class="container">
      <LoadingOverlay :loading="loading"></LoadingOverlay>
      <div v-if="!loading">
        <UseHeader :user="user"></UseHeader>
        <UserPosition :position="userPosition" :currency="portfolio.currency"></UserPosition>
        <PortfolioSummary :portfolio="portfolio"></PortfolioSummary>
        <TransactionRow
          v-for="(transaction, index)  in transactions"
          :key="index"
          :transaction="transaction"
        ></TransactionRow>
      </div>
    </div>
  </section>
</template>

<script>

import LoadingOverlay from '@/components/LoadingOverlay.vue'
import PortfolioSummary from '@/components/PortfolioSummary.vue'
import TransactionRow from '@/components/TransactionRow.vue'
import UseHeader from '@/components/UserHeader.vue'
import UserPosition from '@/components/UserPosition.vue'

const DATA_SOURCE = '/data/data.json'

export default {
  name: 'PortfolioOverview',
  components: {
    LoadingOverlay,
    PortfolioSummary,
    TransactionRow,
    UseHeader,
    UserPosition
  },
  props: {
  },
  data: function () {
    return {
      loading: Boolean,
      portfolio: Object,
      transactions: Object,
      user: Object
    }
  },
  methods: {
    getTransactions: function getTransactions () {
      this.loading = true
      fetch(DATA_SOURCE)
        .then(response => response.json())
        .then(json => {
          this.portfolio = json.portfolios.results[0]
          this.user = json.user
          this.transactions = json.transfers.results

          // Agregate all portfolios
          this.userPosition = {
            balance: 0,
            invested: 0,
            earnings: 0
          }
          json.portfolios.results.reduce((acc, { latest_allocation }) => {
            acc.balance += latest_allocation.balance
            acc.invested += latest_allocation.invested
            acc.earnings += latest_allocation.earnings
          }, this.userPosition)
        })
        .catch(error => console.error(error))
        .finally(() => {
          this.loading = false
        })
    }
  },
  created: function () {
    this.loading = true
    this.getTransactions()
  }
}
</script>

<style scoped>
</style>

<template>
  <section class="section portfolio-overview">
    <div class="container">
      <LoadingOverlay :loading="loading"></LoadingOverlay>
      <div v-if="!loading">
        <UseHeader
          :user="user"
        ></UseHeader>
        <PortfolioSummary
          :portfolio="portfolio"
        ></PortfolioSummary>
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

const DATA_SOURCE = '/data/data.json'

export default {
  name: 'PortfolioOverview',
  components: {
    LoadingOverlay,
    PortfolioSummary,
    TransactionRow,
    UseHeader
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

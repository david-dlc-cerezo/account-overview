<template>
  <div class="portfolio-overview">
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
</template>

<script>

import PortfolioSummary from '@/components/PortfolioSummary.vue'
import TransactionRow from '@/components/TransactionRow.vue'
import UseHeader from '@/components/UserHeader.vue'

const DATA_SOURCE = '/data/data.json'

export default {
  name: 'PortfolioOverview',
  components: {
    PortfolioSummary,
    TransactionRow,
    UseHeader
  },
  props: {
  },
  data: function () {
    return {
      portfolio: Object,
      transactions: Object,
      user: Object
    }
  },
  methods: {
    getTransactions: function getTransactions () {
      fetch(DATA_SOURCE)
        .then(response => response.json())
        .then(json => {
          this.portfolio = json.portfolios.results[0]
          this.user = json.user
          this.transactions = json.transfers.results
        })
        .catch(error => console.error(error))
    }
  },
  created: function () {
    this.getTransactions()
  }
}
</script>

<style scoped>
</style>

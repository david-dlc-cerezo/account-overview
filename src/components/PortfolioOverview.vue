<template>
  <div class="portfolio-overview">
    <UseHeader
      :user="user"
    ></UseHeader>
    <TransactionRow
      v-for="(transaction, index)  in transactions"
      :key="index"
      :transaction="transaction"
    ></TransactionRow>
  </div>
</template>

<script>

import TransactionRow from '@/components/TransactionRow.vue'
import UseHeader from '@/components/UserHeader.vue'

const DATA_SURCE = '/data/data.json'

export default {
  name: 'PortfolioOverview',
  components: {
    TransactionRow,
    UseHeader
  },
  props: {
  },
  data: function () {
    return {
      transactions: Object
    }
  },
  methods: {
    getTransactions: function getTransactions () {
      fetch(DATA_SURCE)
        .then(response => response.json())
        .then(json => {
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

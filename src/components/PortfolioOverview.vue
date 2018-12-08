<template>
  <div class="portfolio-overview">
    <TransactionRow
      v-for="(transaction, index)  in transactions"
      :key="index"
      :transaction="transaction"
    >
    </TransactionRow>
  </div>
</template>

<script>

import TransactionRow from '@/components/TransactionRow.vue'

const DATA_SURCE = '/data/data.json'

export default {
  name: 'PortfolioOverview',
  components: {
    TransactionRow
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

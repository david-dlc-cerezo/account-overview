<template>
  <div class="transaction-row">
    <div class="columns" @click="openModal">
      <div class="column is-one-quarter">
        <div class="has-text-primary">
          {{transaction.portfolio.name}}
        </div>
        {{transaction.item | mapItem}}
      </div>
      <div class="column is-one-quarter">
        {{transaction.created | date }}
      </div>
      <div class="column is-one-quarter">
        <span :class="currencyClass">
          {{transaction.amount | currency(currency.code) }}
        </span>
      </div>
      <div class="column is-one-quarter">
        <span class="tag" :class="statusClass">{{transaction.status | capitalizeFirstLetter}}</span>
      </div>
    </div>
    <TransactionModal
      :transaction="transaction"
      :currency="currency"
      :isActive="isModalOpen"
      @close="closeModal"
    ></TransactionModal>
  </div>
</template>

<script>
import TransactionModal from '@/components/TransactionModal.vue'
import capitalizeFirstLetter from '@/filters/capitalizeFirstLetter.js'
import currency from '@/filters/currency.js'
import date from '@/filters/date.js'
import mapItem from '@/filters/mapItem.js'

export default {
  name: 'TransactionRow',
  components: {
    TransactionModal
  },
  filters: {
    capitalizeFirstLetter,
    currency,
    date,
    mapItem
  },
  props: {
    transaction: Object,
    currency: Object
  },
  data: function () {
    return {
      isModalOpen: false
    }
  },
  computed: {
    currencyClass: function() {
      return {
        'has-text-success': this.transaction.amount > 0,
        'has-text-danger': this.transaction.amount < 0
      }
    },
    statusClass: function() {
      if(this.transaction.status && typeof this.transaction.status === 'string'){
        return {
          'is-dark': this.transaction.status.toUpperCase() === 'CANCELLED',
          'is-info': this.transaction.status.toUpperCase() === 'PENDING',
          'is-success': this.transaction.status.toUpperCase() === 'SUCCESS'
        }
      } else {
        return ''
      }
    }
  },
  methods: {
    openModal: function() {
      this.isModalOpen = true
    },
    closeModal: function() {
      this.isModalOpen = false
    }
  }
}
</script>

<style scoped>
.transaction-row .columns {
  cursor: pointer !important;
}
</style>

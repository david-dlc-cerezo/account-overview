<template>
  <div class="transaction-row" @click="openModal">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="has-text-primary">
          {{transaction.portfolio.name}}
        </div>
        {{mappedItem}}
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
  </div>
</template>

<script>
import capitalizeFirstLetter from '@/filters/capitalizeFirstLetter.js'
import currency from '@/filters/currency.js'
import date from '@/filters/date.js'

export default {
  name: 'TransactionRow',
  filters: {
    capitalizeFirstLetter,
    currency,
    date
  },
  props: {
    transaction: Object,
    currency: Object
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
    },
    mappedItem: function() {
      const MAP = {
        AUTODEPOSIT: 'Regular deposit',
        CHARGE: 'Fee'
      }

      return MAP[this.transaction.item] || this.transaction.item
    }
  },
  methods: {
    openModal: function() {
      console.log('Open modal', this.transaction)
    }
  }
}
</script>

<style scoped>
.transaction-row {
  cursor: pointer;
}
</style>

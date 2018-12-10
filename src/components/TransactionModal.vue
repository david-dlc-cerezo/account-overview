<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="tile notification">
        <div class="content">
          <h3>Activity detail:</h3>
          <div class="columns">
            <div class="column is-half"><h5>Name</h5></div>
            <div class="column is-half">{{transaction.portfolio.name}}</div>
          </div>
          <div class="columns">
            <div class="column is-half">Type</div>
            <div class="column is-half">{{transaction.item | mapItem}}</div>
          </div>
          <div class="columns">
            <div class="column is-half">Date</div>
            <div class="column is-half">{{transaction.created | date}}</div>
          </div>
          <div class="columns">
            <div class="column is-half">Amount</div>
            <div class="column is-half" :class="currencyClass">{{transaction.amount | currency(currency.code)}}</div>
          </div>
          <div class="columns">
            <div class="column is-half">Status</div>
            <div class="column is-half">{{transaction.status | capitalizeFirstLetter}}</div>
          </div>
          <div class="has-text-centered is-centered">
            <a class="closeLink" @click="closeModal">Close</a>
          </div>
        </div>
      </div>
    </div>
    <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import capitalizeFirstLetter from '@/filters/capitalizeFirstLetter.js'
import currency from '@/filters/currency.js'
import date from '@/filters/date.js'
import mapItem from '@/filters/mapItem.js'

export default {
  name: 'TransactionRow',
  filters: {
    capitalizeFirstLetter,
    currency,
    date,
    mapItem
  },
  props: {
    transaction: Object,
    currency: Object,
    isActive: Boolean,
  },
  computed: {
    currencyClass: function() {
      return {
        'has-text-success': this.transaction.amount > 0,
        'has-text-danger': this.transaction.amount < 0
      }
    }
  },
  methods: {
    closeModal: function() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.closeLink{
  cursor: pointer;
}
.tile .content {
  width: 100%;
}
.columns .column:nth-of-type(1) {
  text-align: left;
  font-weight: bold;
  padding-left: 2em;
}
.columns .column:nth-of-type(2) {
  text-align: right;
  padding-right: 2em;
}
</style>

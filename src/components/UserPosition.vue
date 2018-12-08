<template>
  <div class="user-position container">
    <div class="tile is-ancestor">
      <div class="tile is-horizontal">
        <article class="tile is-child">
          <p class="title">Balance</p>
          <p class="subtitle">
            {{position.balance | currency(currency.code)}}
          </p>
        </article>
        <article class="tile is-child">
          <p class="title">Invested</p>
          <p class="subtitle">
            {{position.invested | currency(currency.code)}}
          </p>
        </article>
        <article class="tile is-child">
          <p class="title">Earnings</p>
          <p class="subtitle">
            {{position.earnings | currency(currency.code)}}
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import currency from '@/filters/currency.js'

export default {
  name: 'UserPosition',
  props: {
    position: Object,
    currency: Object
  },
  filters: {
    currency
  }
}
</script>

<style scoped>
.tile .title {
  text-transform: uppercase;
  font-size: 1em;
}
</style>

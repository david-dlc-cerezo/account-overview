<template>
  <div class="user-position">
    <div class="columns">
      <div class="column">
        <PositionBox
          title="Balance"
          image="/img/image-balance.png"
          :ammount="position.balance"
          :currency="currency.code"
        ></PositionBox>
      </div>
      <div class="column">
        <PositionBox
          title="Invested"
          :ammount="position.invested"
          :currency="currency.code"
        ></PositionBox>
      </div>
      <div class="column">
        <PositionBox
          title="Earnings"
          :ammount="position.earnings"
          :currency="currency.code"
        ></PositionBox>
      </div>
    </div>
  </div>
</template>

<script>
import PositionBox from '@/components/PositionBox.vue'

export default {
  name: 'UserPosition',
  components: {
    PositionBox
  },
  props: {
    position: Object,
    currency: Object
  }
}
</script>

<style scoped>
  .user-position {
    margin-bottom: 4em;
  }
</style>

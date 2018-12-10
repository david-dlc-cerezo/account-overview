<template>
  <div class="portfolio-summary">
    <div v-if="portfolio">
      <div class="columns">
        <div class="column is-full">
          <div class="level">
            <div class="level-left">
              <img :src="typeImage" :alt="portfolio.portfolio_type" />
              <span class="portfolio-name">{{portfolio.name}}</span>
            </div>
            <div class="level-right">
              Created in {{portfolio.created | dateMonth}}
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <PortfolioBox
            title="Balance"
            :value="portfolio.latest_allocation.balance | currency(portfolio.currency.code)"
          ></PortfolioBox>
        </div>
        <div class="column">
          <PortfolioBox
            title="Invested"
            :value="portfolio.latest_allocation.invested | currency(portfolio.currency.code)"
          ></PortfolioBox>
        </div>
        <div class="column">
          <PortfolioBox
            title="Earnings"
            :value="portfolio.latest_allocation.earnings | currency(portfolio.currency.code)"
          ></PortfolioBox>
        </div>
        <div class="column">
          <PortfolioBox
            title="Risk Level"
            :value="portfolio.risk_level"
          ></PortfolioBox>
        </div>
        <div class="column">
          <button id="fund"
            class="button is-primary"
            @click="fund"
          >Fund</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioBox from '@/components/PortfolioBox.vue'
import currency from '@/filters/currency.js'
import dateMonth from '@/filters/dateMonth.js'

export default {
  name: 'PortfolioSummary',
  components: {
    PortfolioBox
  },
  filters: {
    currency,
    dateMonth
  },
  props: {
    portfolio: Object
  },
  computed: {
    typeImage: function() {
      let { portfolio_type } = this.portfolio
      if (portfolio_type){
        portfolio_type = portfolio_type.toUpperCase();
        const TYPE_IMAGES = {
          'GIA': '/img/image-gia.png'
        }
        return TYPE_IMAGES[portfolio_type]
      }
      return '';
    }
  },
  methods: {
    fund: function(){
      console.log("fund", this.portfolio);
    }
  }
}
</script>

<style scoped>
  .portfolio-summary {
    border-color: #00a7d0;
    border-top-style: solid;
    border-top-width: 3px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    padding: 1em;
  }
  .portfolio-name {
    font-size: 1.2em;
  }
  .columns + .columns {
    border-top: 1px solid #cccccc;
  }
</style>

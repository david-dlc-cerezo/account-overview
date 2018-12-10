<template>
  <article class="media">
    <div v-if="image" class="media-left">
      <figure class="image is-64x64">
        <img :src="image" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p class="title">{{title}}</p>
        <p class="ammount">
          {{ammount | currency(currency)}}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import currency from '@/filters/currency.js'

export default {
  name: 'PositionBox',
  props: {
    image: String,
    title: String,
    ammount: Number,
    currency: String
  },
  filters: {
    currency
  }
}
</script>

<style scoped>
.media {
  padding: 1em;
  box-shadow: 0px 0px 10px #00a7d0;
}
.media .content .title {
  text-transform: uppercase;
  font-size: 0.8em;
  margin: 0.5em 0;
}
.media .content .ammount {
  font-size: 1.8em;
}
</style>
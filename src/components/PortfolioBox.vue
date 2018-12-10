<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <p class="title">{{title}}</p>
        <p class="value">
          {{value}}
        </p>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'PortfolioBox',
  props: {
    title: String,
    value: String | Number,
  }
}
</script>

<style scoped>
.media .content .title {
  text-transform: uppercase;
  font-size: 0.8em;
  padding: 0;
  margin: 0;
  color: #888888;
}
.media .content .value {
  font-size: 1.3em;
}
</style>
<template>
  <div class="user-header">
    <div class="welcome">
      Welcome back, <span class="welcome__name">{{user.last_name}}</span>!
    </div>
    <div class="last-login">
      Last login: {{user.last_login | date}}, {{user.last_login | hour}}
    </div>
  </div>
</template>

<script>
import date from '@/filters/date.js'
import hour from '@/filters/hour.js'

export default {
  name: 'UserHeader',
  props: {
    user: Object
  },
  filters: {
    date,
    hour
  }
}
</script>

<style scoped>
  .welcome__name {
    color: #00a7d0;
  }
</style>

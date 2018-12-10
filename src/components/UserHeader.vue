<template>
  <section class="user-header">
    <div class="level">
      <div class="level-left">
        <div class="level-item is-half welcome">
          Welcome back,&nbsp;<span class="welcome__name has-text-primary">{{user.last_name}}</span>!
        </div>
      </div>
      <div class="level-right">
        <div class="level-item is-half last-login">
          <img src="/img/image-login.png" class="last-login-icon" alt="">
          Last login: {{user.last_login | date}}, {{user.last_login | hour}}
        </div>
      </div>
    </div>
  </section>
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
  .welcome {
    font-size: 2em;
  }
  .user-header {
    margin-bottom: 1em;
  }
  .last-login-icon {
    vertical-align: middle;
  }
</style>

<template>
  <section id="app">
    <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu container">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <router-view class="container"/>
  </section>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #00a7d0;
}

#nav .navbar-menu {
  box-shadow: none;
}
</style>

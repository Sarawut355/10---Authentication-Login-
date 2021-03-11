<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="dark" id="nav">
      <b-navbar-brand href="/" style="color: #42b983">Home</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/">Home</router-link>
          <router-link to="/login">Login</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view id="bg" class="col-12"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #9e9e9e;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#bg{
  background-color: rgb(47, 47, 47);
  height: 60rem;
  color: rgb(255, 255, 255);
}
</style>

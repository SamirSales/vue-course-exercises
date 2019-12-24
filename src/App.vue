<template>
  <div id="app">
    <div id="nav">
      <router-link to="/exercise/1">Execise 1</router-link> |
      <router-link to="/exercise/2">Execise 2</router-link> |
      <router-link to="/exercise/3">Execise 3</router-link> |
      <router-link to="/exercise/4">Execise 4</router-link> |
      <router-link to="/exercise/5">Execise 5</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

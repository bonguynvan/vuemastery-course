<script setup>
import { inject } from 'vue'
const gStore = inject('gStore')
</script>

<template>
  <div id="layout">
    <div id="flash-message" v-if="gStore.flashMessage">
      <p>{{ gStore.flashMessage }}</p>
    </div>
    <header>
      <div class="wrapper">
        <div id="nav">
          <RouterLink to="/">Event List</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </div>
      </div>
    </header>
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flash-message {
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>

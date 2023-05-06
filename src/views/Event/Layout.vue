<script setup>
import { onMounted, ref, inject } from 'vue'

const gStore = inject('gStore')
</script>
<template>
  <div class="event-single" v-if="gStore.event">
    <h1>{{ gStore.event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'event-details' }">Details</router-link> |
      <router-link :to="{ name: 'event-edit' }">Edit</router-link> |
      <router-link :to="{ name: 'event-register' }">Register</router-link>
    </div>
    <router-view :event="gStore.event" />
  </div>
</template>

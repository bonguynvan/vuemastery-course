<script setup>
import { onMounted, ref } from 'vue'
import EventService from '@/services/event.service.js'
import { useRoute } from 'vue-router'
const event = ref(null)
const props = defineProps({
  id: {
    required: true
  }
})
onMounted(async () => {
  const result = await EventService.getEvent(props.id)
  console.log('result', result)
  if (result) {
    event.value = result.data
    console.log('result', result)
  }
})
</script>
<template>
  <div class="event-single">
    <h1 v-if="event">{{ event.title }}</h1>
    <router-link class="event-options" :to="{ name: 'event-details' }">Details</router-link> |
    <router-link class="event-options" :to="{ name: 'event-edit' }">Edit</router-link> |
    <router-link class="event-options" :to="{ name: 'event-register' }">Register</router-link>
    <router-view />
  </div>
</template>
<style scoped>
.event-options {
  text-decoration: none;
  color: black;
}
.event-options:active {
  color: aquamarine;
}
</style>

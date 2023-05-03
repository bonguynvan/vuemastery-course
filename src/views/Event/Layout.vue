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
  if (result) {
    event.value = result.data
  }
})
</script>
<template>
  <div class="event-single" v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'event-details' }">Details</router-link> |
      <router-link :to="{ name: 'event-edit' }">Edit</router-link> |
      <router-link :to="{ name: 'event-register' }">Register</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>

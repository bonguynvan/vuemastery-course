<script setup>
import { onMounted, ref } from 'vue'
import EventService from '@/services/event.service.js'
import { useRoute } from 'vue-router'
const event = ref(null)
const props = defineProps({
    id: {
        required: true,
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
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

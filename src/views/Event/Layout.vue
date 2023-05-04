<script setup>
import { onMounted, ref } from 'vue'
import { useRouter} from 'vue-router'
import EventService from '@/services/event.service.js'

const router = useRouter()
const event = ref(null)
const props = defineProps({
  id: {
    required: true
  }
})
onMounted(async () => {
  try {
    const result = await EventService.getEvent(props.id)
    if (result) {
      event.value = result.data
    }
  } catch (error) {
    if (error.response && error.response.status == 404) {
        console.log('okko')
      router.push({ name: '404resource', params: { resource: 'event' } })
    } else {
      router.push({ name: 'network-error' })
    }
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

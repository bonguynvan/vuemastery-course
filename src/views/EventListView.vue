<script setup>
import EventCard from '@/components/EventCard.vue'
import { onMounted, ref, watchEffect, computed } from 'vue'
import eventService from '@/services/event.service.js'
const events = ref(null)
const totalEvents = ref(0)
const props = defineProps({
  page: Number
})
onMounted(() => {
  watchEffect(async () => {
    events.value = null
    try {
      const results = await eventService.getEvents(2, props.page)
      if (results) {
        events.value = results.data
        totalEvents.value = results.headers['x-total-count']
      }
      console.log(props.page)
    } catch (error) {
      console.log(error)
    }
  })
})
const hasNext = computed(() => {
  const totalPage = Math.ceil(totalEvents.value / 2)
  return props.page < totalPage
})
</script>

<template>
  <div class="home">
    <h1>Events for Good</h1>
    <div class="event">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    <div class="pagination">
      <RouterLink
        id="prev"
        :to="{ name: 'event-list', query: { page: props.page - 1 } }"
        v-if="props.page != 1"
      >
        Previous
      </RouterLink>
      <RouterLink
        id="next"
        :to="{ name: 'event-list', query: { page: props.page + 1 } }"
        v-if="hasNext"
        >Next</RouterLink
      >
    </div>
  </div>
</template>
<style scoped>
.event {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: inline-flex;
  width: 290px;
}
.pagination #prev {
  text-align: left;
}

.pagination #next {
  text-align: right;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #232323;
}
</style>

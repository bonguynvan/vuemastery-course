<script setup>
  import EventCard from '@/components/EventCard.vue'
  import { onMounted, ref } from 'vue'
  import eventService from '@/services/event.service.js';
  const events = ref(null)
  onMounted( async () => {
    const results = await eventService.getEvents()
    if(results) events.value = results.data
    console.log(events.value)
  }) 
</script>

<template>
  <div class="home">
    <h1>Events for Good</h1>
    <div class="event">
      <EventCard v-for="event in events" :key="event.id" :event="event"/>
    </div>
  </div>
</template>
<style scoped>
  .event {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

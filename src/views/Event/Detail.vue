<script setup>
import { inject, isProxy } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const event = inject('gStore').event
</script>
<template>
  <div class="event-details" v-if="event">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <button class="back" @click="router.go(-1)">Back</button>
    <button class="next" @click="router.go(1)">Next</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  event: { required: true }
})
const register = () => {
  console.log('Registered!')
  router.push({name: 'event-details'})
}
</script>
<template>
  <div class="event-register">
    <p>Register Event</p>
    <button class="btn-register" @click="register">Register Me!</button>
  </div>
</template>

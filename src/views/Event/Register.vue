<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  event: { required: true }
})
const gStore = inject('gStore')
const register = () => {
  //   console.log('Registered!')
  gStore.flashMessage = 'You are sucessfull registered for ' + props.event.title
  setTimeout(() => {
    gStore.flashMessage = ''
  }, 3000)
  router.push({ name: 'event-details' })
}
</script>
<template>
  <div class="event-register">
    <p>Register Event</p>
    <button class="btn-register" @click="register">Register Me!</button>
  </div>
</template>

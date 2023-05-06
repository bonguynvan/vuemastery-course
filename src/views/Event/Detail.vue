<script setup>
import { inject, isProxy } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  event: {
    required: true
  }
})

</script>
<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <button class="back" @click="router.go(-1)">Back</button>
  <button class="next" @click="router.go(1)">Next</button>
</template>

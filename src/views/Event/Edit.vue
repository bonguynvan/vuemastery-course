<script setup>
import { ref, inject } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const unsavedChanges = ref(false)
onBeforeRouteLeave((routeTo, routeFrom, next) => {
  if (unsavedChanges.value) {
    const answer = window.confirm('Do you really want to leave? You have unsaved changes')
    if (answer) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})
</script>
<template>
  <div class="event-register">
    <p>Edit Event</p>
  </div>
</template>

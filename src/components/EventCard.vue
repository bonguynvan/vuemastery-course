<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-single', params: { id: event.id } }">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} ß- {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  border: 1px solid #39495c;
  cursor: pointer;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  text-decoration: none;
  color: #2c3e50;

}
</style>

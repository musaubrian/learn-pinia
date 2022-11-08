<template>
  <main>
    <header>
      <AddTasks />
    </header>
    <TaskCard />
  </main>
</template>

<script>
import AddTasks from './components/AddTasks.vue';
import TaskCard from './components/TaskCard.vue';

export default {
  components: { TaskCard, AddTasks }
}
</script>
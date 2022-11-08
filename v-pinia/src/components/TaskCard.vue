<template>
    <div class="card" v-for="task in supaTasks.tasks">
        <h1>{{ task.task_name }}</h1>
        <p>{{ task.id }}</p>
        <i class="material-icons" @click="supaTasks.deleteTasks(task.id)">delete</i>
    </div>
    <div v-if="supaTasks.loading === true">
        Getting your tasks...
    </div>
    <div v-if="supaTasks.fetchError === true">
        Error fetching data
    </div>
    <div v-if="supaTasks.uploadError === true">
        Issue encountoured when adding tasks
    </div>
</template>

<script setup>
import { useSupaStore } from "../stores/SupaTaskStore"
const supaTasks = useSupaStore();
supaTasks.getTasks

console.table(supaTasks.tasks)
</script>


<style lang="css" scoped>
.card {
    width: 80%;
    background-color: #f1f1f1;
    padding: 0.5rem;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1.5rem;
}

h1 {
    justify-self: flex-start;
    font-size: 1.3rem;
    color: #464646;
}

.material-icons {
    color: #868686;
}

.material-icons:hover {
    color: #ff6600;
}
</style>
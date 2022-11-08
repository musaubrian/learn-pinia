<template>
    <div v-if="supaTasks.loading === true"
        style="margin-top: 1rem; padding: 1rem; text-align: center; font-size: large;">
        Getting your tasks...
    </div>
    <div v-if="supaTasks.fetchError === true" style="color: red; margin-top: 1rem; text-align: center;">
        <h2>Error fetching data</h2>
        <p style="color: #0f0f0f; margin-top: 1rem;">Check your internet connection</p>
    </div>
    <div v-if="supaTasks.uploadError === true" style="color: orange; padding: 1rem; text-align: center;">
        <p>Issue encountered when uploading tasks</p>
    </div>
    <div v-if="supaTasks.deleteTask === true" style="color: orange; margin-bottom: 2rem; margin-top: 2rem;">
        <p style="color: orange;font-size: 1.3rem;">Lemme delete this real quick...</p>
    </div>
    <div v-if="supaTasks.noTasks === true">
        <h4 style="margin-top: 3rem; font-size: 1.5rem;">No tasks available</h4>
    </div>
    <div class="card" v-for="task in supaTasks.tasks">
        <h1>{{ task.task_name }}</h1>
        <i class="material-icons" @click="supaTasks.deleteTasks(task.id)">delete</i>
    </div>
</template>

<script setup>
import { useSupaStore } from "../stores/SupaTaskStore"
const supaTasks = useSupaStore();
supaTasks.getTasks
</script>


<style lang="css" scoped>
.card {
    width: 60%;
    background-color: #ebebeb;
    padding: 1rem;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1.5rem;
}

h1 {
    text-align: center;
    font-size: 1.3rem;
    color: #464646;
    text-transform: capitalize;
}

.material-icons {
    color: #868686;
    cursor: pointer;
}

.material-icons:hover {
    color: #ff6600;
}

@media screen and (max-width: 750px) {
    .card {
        width: 90%;
    }
}
</style>
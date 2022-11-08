<template>
    <form @submit.prevent="handleSubmit()">
        <input type="text" required placeholder="do the dishes" v-model="newTask">
        <button type="submit" class="top-add">Add task</button>
        <button type="submit" class="bottom-add">
            <i class="material-icons">add</i>
        </button>
    </form>
</template>

<script>
import { useSupaStore } from '../stores/SupaTaskStore';
import { supabase } from '../supabase';

export default {
    data() {
        return {
            newTask: ''
        }
    },
    methods: {
        async handleSubmit() {
            const supaStore = useSupaStore();
            const { error } = await supabase.from('pini').insert({
                task_name: this.newTask
            })
            if (error) {
                supaStore.uploadError = true
            } else {
                window.location.reload()
            }
        }
    }
}

</script>

<style scoped>
form {
    width: 100%;
    display: inline-flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
}

input {
    background-color: transparent;
    border: 2px solid #c2c2c2;
    padding: 0.7rem;
    border-radius: 15px;
    margin-right: 0.5rem;
    font-size: 1.1rem;
}

button {
    padding: 0.7rem;
    border-radius: 15px;
    border: none;
    background-color: #f3974c;
    font-weight: 650;
    font-size: 1.2rem;
    text-align: center;
}

.bottom-add {
    display: none;
}

@media screen and (max-width: 750px) {
    form {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-bottom: 0.5rem;
        display: flex;
        width: 100%;
    }

    .top-add {
        display: none;
    }

    .bottom-add {
        display: inline-flex;
        font-size: 1.3rem;
    }
}
</style>
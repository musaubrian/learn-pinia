import { defineStore } from "pinia"
import { supabase } from "../supabase"

export const useSupaStore =  defineStore("supaTasks", {
    state: () => ({
        tasks: '',
        loading: false,
        fetchError: false,
        uploadError: false,
        deleteTask: false
    }),
    getters: {
        async getTasks(){
            this.loading = true
            const {data, error} = await supabase.from('pini').select()
            if (data) {
                this.tasks = data
                this.loading = false
            } else if (error) {
                this.fetchError = true
                this.loading = false
            }
        }
    },
    actions: {
        async deleteTasks(id){
            this.deleteTask = true
            const {data, error} = await supabase.from('pini').delete().eq('id', id)
            this.deleteTask = false
            window.location.reload()
        }
    }
})
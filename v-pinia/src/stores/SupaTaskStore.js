import { defineStore } from "pinia"
import { supabase } from "../supabase"

export const useSupaStore =  defineStore("supaTasks", {
    state: () => ({
        tasks: '',
        loading: false,
        fetchError: false,
        uploadError: false,
        deleteTask: false,
        noTasks: true
    }),
    getters: {
        async getTasks(){
            this.loading = true
            this.noTasks = false
            const {data, error} = await supabase.from('pini').select()
            if (data) {
                this.tasks = data
                if (this.tasks.length < 1) {
                    this.noTasks = true
                }
                this.loading = false
            } else if (error) {
                this.fetchError = true
                this.loading = false
            }
        }
    },
    actions: {
        async deleteTasks(id){
            const {error} = await supabase.from('pini').delete().eq('id', id)
            if (error) {
                this.deleteTask = true
            } else {
                this.deleteTask = false
                window.location.reload()
            }            
        }
    }
})
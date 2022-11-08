import { defineStore } from "pinia"
import { supabase } from "../supabase"

export const useSupaStore =  defineStore("supaTasks", {
    state: () => ({
        tasks: '',
        loading: false,
        fetchError: false,
        uploadError: false
    }),
    getters: {
        async getTasks(){
            this.loading = true
            const {data, error} = await supabase.from('pini').select()
            
            if (data) {
                console.log(data)
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
            const {data, error} = await supabase.from('pini').delete().eq('id', idgit)
        }
    }
})
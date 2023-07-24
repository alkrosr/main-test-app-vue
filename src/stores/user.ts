import {defineStore} from "pinia";
import {getUsers} from "@/api/points/user";

export const useUserStore = defineStore("user", {
    state: () => ({
        users: []
    }),
    actions: {
        async fetchUsers () {
            this.users = await getUsers()
        }
    }
})
import { defineStore } from 'pinia'
import { createUser, deleteUser, getUsers, updateUserById } from '@/api/points/user'

interface User {
  username: string
  phone: string
  email: string
  register_date: string
  code: number
  city: string
  isDisabled?: boolean
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User,
    users: [] as User[],
    isLoadedUsers: true
  }),
  getters: {
    usersExtended: (state: any) => {
      return state.users.map((user: any) => {
        return {
          ...user,
          isDisabled: true
        }
      })
    }
  },
  actions: {
    async fetchUsers() {
      this.isLoadedUsers = true
      try {
        this.users = await getUsers()
      } finally {
        this.isLoadedUsers = false
      }
    },
    async updateUser(id: number, payload: Record<string, any>) {
      this.user = await updateUserById(id, payload)
    },
    async createUser(payload: Record<string, any>) {
      await createUser(payload).then(() => this.fetchUsers())
    },
    async deleteUser(id: number | string) {
      await deleteUser(id).then(() => this.fetchUsers())
    },
    selectUser(ids) {}
  }
})

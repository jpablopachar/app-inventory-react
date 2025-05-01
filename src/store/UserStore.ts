import { create } from 'zustand'

import { getAllUsers, getUsers } from '@/supabase'

export const useUserStore = create((set, get) => ({
  ModulesCheckData: [],
  setModulesCheckData: (data: any) => set({ ModulesCheckData: data }),
  userId: 0,
  setUserId: () => set({ userId: 0 }),
  usersData: [],
  usersAllData: [],
  showUsers: async () => {
    const res = await getUsers()

    set({ usersData: res })

    if (!res) {
      return []
    }

    set({ userId: res.id })

    return res
  },
  showUsersAll: async (companyId: string) => {
    const res = await getAllUsers(companyId)

    set({ usersAllData: res })

    return res
  },
}))

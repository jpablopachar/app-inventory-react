/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { SignUpWithPasswordCredentials } from '@supabase/supabase-js'
import { create } from 'zustand'

import { Permissions, UserData } from '@/interfaces'
import {
  getAllUsers,
  getUsers,
  insertAssignments,
  insertUsers,
  logOut,
  signUp,
} from '@/supabase'

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
  insertUser: async (
    credentials: SignUpWithPasswordCredentials,
    userData: UserData,
    checkPermissionsData: Permissions[],
  ) => {
    const user = await signUp(credentials)

    if (!user) {
      return
    }

    const newUser = await insertUsers({
      fullname: userData.fullname,
      docNumber: userData.docNumber,
      phone: userData.phone,
      address: userData.address,
      registrationDate: new Date(),
      status: 'active',
      authId: user.id,
      userType: userData.userType,
      docType: userData.docType,
    })

    await insertAssignments({
      companyId: userData.companyId,
      userId: newUser.id,
    })

    console.log(`El nuevo usuario es: ${newUser}`)

    checkPermissionsData.forEach(async (item: any) => {
      if (item.check) {
        const parametersPermissions = {
          userId: newUser.id,
          moduleId: item.id,
        }

        await insertAssignments(parametersPermissions)
      }
    })

    await logOut()

    return user
  },
}))

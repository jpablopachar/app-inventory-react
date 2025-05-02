/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

/**
 * Hook personalizado para gestionar el estado del usuario en la aplicación.
 * 
 * Proporciona métodos y propiedades para manejar datos relacionados con usuarios,
 * incluyendo la selección de usuarios, almacenamiento de datos de módulos, y visualización
 * de listas de usuarios.
 * 
 * @returns Un objeto con el estado y funciones para manipular datos de usuario.
 * 
 * Propiedades:
 * - `ModulesCheckData`: Arreglo que almacena los datos de verificación de módulos.
 * - `setModulesCheckData`: Función para actualizar los datos de verificación de módulos.
 * - `userId`: Identificador del usuario seleccionado.
 * - `setUserId`: Función para restablecer el identificador del usuario.
 * - `usersData`: Arreglo con los datos del usuario actual.
 * - `usersAllData`: Arreglo con los datos de todos los usuarios.
 * - `showUsers`: Función para mostrar y seleccionar un usuario,
 * actualizando el estado correspondiente.
 * - `showUsersAll`: Función para mostrar todos los usuarios,
 * actualizando el estado correspondiente.
 */
export const useUserStore = create((set) => ({
  ModulesCheckData: [],
  setModulesCheckData: (data: any) => set({ ModulesCheckData: data }),
  userId: 0,
  setUserId: () => set({ userId: 0 }),
  usersData: [],
  usersAllData: [],
  showUsers: (user: any) => {
    set({ usersData: user })
    set({ userId: user.id })
  },
  showUsersAll: (users: any) => set({ usersAllData: users }),
  /* insertUser: async (
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
  }, */
}))

/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'

/**
 * Interfaz para el hook UserStore, que gestiona el estado y las
 * acciones relacionadas con los usuarios.
 *
 * @property {any[]} ModulesCheckData - Lista de datos
 * relacionados con los módulos verificados para el usuario.
 * @property {number} userId - Identificador único del usuario actual.
 * @property {any} usersData - Lista de datos de los usuarios filtrados o visibles.
 * @property {any[]} usersAllData - Lista completa de datos de todos los usuarios.
 * @property {(data: any) => void} setModulesCheckData - Función
 * para actualizar los datos de módulos verificados.
 * @property {() => void} setUserId - Función para establecer el identificador del usuario actual.
 * @property {(user: any) => void} showUsers - Función para
 * mostrar los datos de un usuario específico.
 * @property {(users: any) => void} showUsersAll - Función para
 * mostrar los datos de todos los usuarios.
 */
interface UserStoreHook {
  ModulesCheckData: any[]
  userId: number
  usersData: any
  usersAllData: any[]
  setModulesCheckData: (data: any) => void
  setUserId: () => void
  showUsers: (user: any) => void
  showUsersAll: (users: any) => void
}

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
 * - `userId`: Identificador del usuario seleccionado.
 * - `usersData`: Arreglo con los datos del usuario actual.
 * - `usersAllData`: Arreglo con los datos de todos los usuarios.
 * - `setModulesCheckData`: Función para actualizar los datos de verificación de módulos.
 * - `setUserId`: Función para restablecer el identificador del usuario.
 * - `showUsers`: Función para mostrar y seleccionar un usuario,
 * actualizando el estado correspondiente.
 * - `showUsersAll`: Función para mostrar todos los usuarios,
 * actualizando el estado correspondiente.
 */
export const useUserStore = create<UserStoreHook>((set) => ({
  ModulesCheckData: [],
  userId: 0,
  usersData: [],
  usersAllData: [],
  setModulesCheckData: (data: any) => set({ ModulesCheckData: data }),
  setUserId: () => set({ userId: 0 }),
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

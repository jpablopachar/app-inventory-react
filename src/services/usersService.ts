/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from '@supabase/supabase-js'

import { addPermissions } from './permissionsService'

import { Permissions, Personal, UserData } from '@/interfaces'
import {
  editThemeUserCurrency,
  editUser,
  getAllUsers,
  insertAssignments,
  insertUsers,
  showUsers,
  signIn,
  signUp,
} from '@/supabase'

/**
 * Agrega un nuevo usuario al sistema.
 *
 * Este método realiza el proceso de registro de un usuario utilizando las
 * credenciales proporcionadas,
 * inicia sesión con dichas credenciales y, si el inicio de sesión es exitoso,
 * inserta los datos adicionales
 * del usuario en la base de datos.
 *
 * @param credentials - Objeto que contiene el correo electrónico, la contraseña y
 * el tipo de usuario.
 * @returns Una promesa que resuelve con el usuario creado si el proceso es
 * exitoso, o `null` si falla el inicio de sesión.
 */
export const addAdminUser = async (credentials: {
  email: string
  password: string
  userType: string
}): Promise<User | null> => {
  await signUp(credentials)

  const res = await signIn(credentials)

  if (!res) {
    return null
  }

  await insertUsers({
    registrationDate: new Date(),
    userType: credentials.userType,
    authId: res.id,
  })

  return res
}

/**
 * Agrega un nuevo usuario utilizando la función insertUsers.
 *
 * @param user - Objeto que contiene la información del usuario a agregar.
 * @returns Una promesa que resuelve con la respuesta de la operación de inserción.
 */
export const addUser = async (user: any): Promise<any> => {
  const res = await insertUsers(user)

  return res
}

/**
 * Obtiene la lista de usuarios llamando a la función `showUsers`.
 *
 * @returns {Promise<UserData | null>} Una promesa que resuelve
 * con los datos de usuario (`UserData`)
 * o `null` si no se obtienen datos.
 */
export const getUsers = async (): Promise<UserData | null> => {
  const res: UserData | null = await showUsers()

  return res
}

/**
 * Obtiene y retorna la lista de todos los usuarios (Personal) asociados a una empresa específica.
 *
 * @param companyId - El identificador único de la empresa cuyos usuarios se desean obtener.
 * @returns Una promesa que resuelve con un arreglo de objetos
 * Personal o null si no se encuentran usuarios.
 */
export const showAllUsers = async (
  companyId: number,
): Promise<Personal[] | null> => {
  const res: Personal[] | null = await getAllUsers(companyId)

  return res
}

/**
 * Actualiza el tema y la moneda de un usuario en la base de datos.
 *
 * @param user - Objeto que contiene los datos del usuario a actualizar.
 * @returns Una promesa que resuelve cuando se completa la actualización.
 */
export const updateThemeUserCurrency = async (user: any): Promise<void> => {
  await editThemeUserCurrency(user)
}

/**
 * Actualiza los datos de un usuario en la base de datos.
 *
 * @param user - Objeto que contiene los datos del usuario a actualizar.
 * @returns Una promesa que resuelve cuando se completa la actualización.
 */
export const updateUser = async (user: any): Promise<void> => {
  await editUser(user)
}

/**
 * Inserta un nuevo registro de asignación en la base de datos.
 *
 * @param values - Objeto que contiene los datos de la asignación a insertar.
 * @returns Una promesa que resuelve cuando se completa la inserción.
 */
export const addAssignments = async (values: any): Promise<void> => {
  await insertAssignments(values)
}

/**
 * Verifica y asigna permisos a un usuario según los datos proporcionados.
 *
 * Itera sobre la lista de permisos y, para cada permiso que tenga
 * la propiedad `check` en verdadero,
 * llama a la función `addPermissions` para asignar el permiso correspondiente al usuario.
 *
 * @param userId - El identificador único del usuario al que se le asignarán los permisos.
 * @param checkPermissionsData - Un arreglo de objetos de tipo
 * `Permissions` que contiene la información de los permisos a verificar y asignar.
 */
export const checkPermissions = (
  userId: number, checkPermissionsData: Permissions[],
): void => {
  checkPermissionsData.forEach(async (currentPermission) => {
    if (currentPermission.check) {
      const permissionsParams = {
        userId,
        moduleId: currentPermission.id,
      }

      await addPermissions(permissionsParams)
    }
  })
}

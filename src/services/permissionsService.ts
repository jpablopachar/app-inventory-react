/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  deletePermissions,
  getPermissions,
  insertPermissions,
} from '@/supabase'
import { DataConfiguration } from '@/utils'

/**
 * Agrega nuevos permisos al sistema.
 *
 * @param permissions - Objeto que contiene los permisos a insertar.
 * @returns Una promesa que se resuelve cuando los permisos han sido agregados.
 */
export const addPermissions = async (permissions: any): Promise<void> => {
  await insertPermissions(permissions)
}

/**
 * Obtiene y retorna los permisos asociados a un usuario específico.
 *
 * @param userId - El identificador único del usuario cuyos permisos se desean consultar.
 * @returns Una promesa que resuelve con los permisos del usuario.
 */
export const showPermissions = async (userId: string): Promise<any> => {
  const res = await getPermissions(userId)

  return res
}

/**
 * Elimina todos los permisos asociados a un usuario específico.
 *
 * @param userId - El identificador único del usuario cuyos permisos serán eliminados.
 * @returns Una promesa que se resuelve cuando los permisos han sido eliminados.
 */
export const removePermissions = async (userId: string): Promise<void> => {
  await deletePermissions(userId)
}

/**
 * Configura el estado de los módulos de permisos según los permisos proporcionados.
 *
 * Esta función recorre la configuración de módulos (`DataConfiguration`) y actualiza
 * el estado (`state`) de cada módulo dependiendo de si el usuario tiene permiso para dicho módulo.
 * El estado se establece en `true` si el usuario tiene permiso, de lo contrario en `false`.
 * Finalmente, actualiza la configuración global de módulos con los nuevos estados.
 *
 * @param permissions - Lista de permisos del usuario, donde cada permiso debe contener
 * un objeto `modules` con una propiedad `name` que representa el nombre del módulo.
 */
export const configurePermissionsModules = (permissions: any): void => {
  const allDocs: any[] = []

  DataConfiguration.forEach((currentModule) => {
    const permissionState = permissions.some((permission: any) =>
      permission.modules.name.includes(currentModule.title),
    )

    if (permissionState) {
      allDocs.push({ ...currentModule, state: true })
    } else {
      allDocs.push({ ...currentModule, state: false })
    }
  })

  DataConfiguration.splice(0, DataConfiguration.length)
  DataConfiguration.push(...allDocs)
}

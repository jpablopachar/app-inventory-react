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
 * Configura los módulos de permisos y actualiza DataConfiguration.
 * Devuelve una promesa que se resuelve cuando la operación finaliza.
 *
 * @param {any} permissions - Permisos a configurar
 * @returns {Promise<void>} Promesa que indica la finalización
 */
export const configurePermissionsModules = (permissions: any): Promise<void> => {
  return new Promise((resolve) => {
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

    // eslint-disable-next-line no-console
    console.log('DataConfiguration:', DataConfiguration)

    resolve()
  })
}

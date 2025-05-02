/* eslint-disable @typescript-eslint/no-explicit-any */

import { supabase } from './supabase.config'

/**
 * Inserta nuevos permisos en la tabla 'permissions' de la base de datos utilizando Supabase.
 *
 * @param values - Los valores a insertar en la tabla
 * 'permissions'. Puede ser un objeto o un arreglo de objetos con los datos del permiso.
 * @returns Una promesa que resuelve a `null` si ocurre un error
 * durante la inserción, o `undefined` si la operación es exitosa.
 */
export const insertPermissions = async (
  values: any,
): Promise<null | undefined> => {
  const { error } = await supabase.from('permissions').insert(values).select()

  if (error) {
    /* const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar el permiso: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options) */
    return null
  }
}

/**
 * Obtiene los permisos asociados a un usuario específico desde la base de datos.
 *
 * @param userId - El identificador único del usuario para el cual se desean obtener los permisos.
 * @returns Una promesa que resuelve con los datos de los permisos
 * del usuario, incluyendo el id, userId, moduleId y el nombre del módulo asociado.
 */
export const getPermissions = async (userId: string): Promise<any> => {
  const { data, error } = await supabase
    .from('permissions')
    .select(`id, userId, moduleId, modules(name)`)
    .eq('userId', userId)

  if (error) {
    return null
  }

  return data
}

/**
 * Elimina todos los permisos asociados a un usuario específico en la base de datos.
 *
 * @param userId - El identificador único del usuario cuyos permisos serán eliminados.
 * @returns Una promesa que se resuelve cuando la operación ha finalizado.
 * @throws Muestra una alerta si ocurre un error durante la eliminación de los permisos.
 */
export const deletePermissions = async (
  userId: string,
): Promise<null | undefined> => {
  const { error } = await supabase
    .from('permissions')
    .delete()
    .eq('userId', userId)

  if (error) {
    alert(`Error al eliminar permisos: ${error.message}`)

    return null
  }
}

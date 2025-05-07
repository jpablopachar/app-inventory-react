/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SweetAlertOptions } from 'sweetalert2'

import { getIdAuthSupabase } from './globalSupabase'

import { supabase } from './supabase.config'

import { showAlert } from '@/utils'

/**
 * Inserta un nuevo usuario en la tabla 'users' de Supabase.
 *
 * @param user - Objeto que representa los datos del usuario a insertar.
 * @returns Una promesa que resuelve con los datos del usuario insertado o
 * null si ocurre un error.
 */
export const insertUsers = async (user: any): Promise<any> => {
  const { data, error } = await supabase
    .from('users')
    .insert(user)
    .select()
    .maybeSingle()

  if (error) {
    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar el usuario: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  return data
}

/**
 * Inserta una nueva asignación en la tabla 'assignCompany' de Supabase.
 *
 * @param values - Los valores a insertar en la tabla,
 * generalmente un objeto o arreglo de objetos con los datos de la asignación.
 * @returns Retorna `null` si ocurre un error durante la
 * inserción, o `undefined` si la operación es exitosa.
 */
export const insertAssignments = async (
  values: any,
): Promise<null | undefined> => {
  const { error } = await supabase.from('assignCompany').insert(values)

  if (error) {
    /* const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar la asignación: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options) */
    return null
  }
}

/**
 * Obtiene los datos del usuario desde la tabla 'users' de Supabase,
 * filtrando por el identificador de autenticación obtenido mediante `getIdAuthSupabase`.
 *
 * @returns {Promise<any>} Una promesa que resuelve con los datos del usuario si existen,
 * o `null` si no se encuentra.
 *
 * @async
 */
export const getUsers = async (): Promise<any> => {
  const idAuthSupabase = await getIdAuthSupabase()

  console.log(`ID de Auth Supabase: ${idAuthSupabase}`)

  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('idAuth', idAuthSupabase)
    .maybeSingle()

  if (error) {
    return null
  }

  console.log(`Usuarios de Supabase: ${data}`)

  return data
}

/**
 * Obtiene todos los usuarios asociados a una compañía específica utilizando una función remota
 * de Supabase.
 *
 * @param companyId - El identificador único de la compañía cuyos usuarios se desean obtener.
 * @returns Una promesa que resuelve con los datos de los usuarios de la compañía, o `null`
 * si se produce un error.
 */
export const getAllUsers = async (companyId: string): Promise<any> => {
  const { data, error } = await supabase.rpc('showEmployees', {
    _idCompany: companyId,
  })

  if (error) {
    return null
  }

  console.log(`Usuarios de esta compañía: ${data}`)

  return data
}

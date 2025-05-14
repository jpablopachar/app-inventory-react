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
  console.log('Insertando usuario: ', user)

  const { data, error } = await supabase
    .from('users')
    .insert(user)
    .select()
    .maybeSingle()

  if (error) {
    console.error('Error al insertar el usuario: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar el usuario: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Usuario insertado: ', data)

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
export const insertAssignments = async (values: any): Promise<void> => {
  console.log('Insertando asignación: ', values)

  const { error } = await supabase.from('assignCompany').insert(values)

  if (error) {
    console.error('Error al insertar la asignación: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar la asignación: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return
  }

  console.log('Asignación insertada correctamente')
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
export const showUsers = async (): Promise<any> => {
  console.log('Obteniendo usuario...')

  const idAuthSupabase = await getIdAuthSupabase()

  console.log(`ID de Auth Supabase: ${idAuthSupabase}`)

  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('authId', idAuthSupabase)
    .maybeSingle()

  if (error) {
    console.error('Error al obtener el usuario: ', error)

    return null
  }

  console.log('Usuarios: ', data)

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
export const getAllUsers = async (companyId: number): Promise<any> => {
  const { data, error } = await supabase.rpc('show_personal', {
    // eslint-disable-next-line camelcase
    _company_id: companyId,
  })

  if (error) {
    return null
  }

  console.log('Usuarios de la compañía: ', data)

  return data
}

/**
 * Edita el tema y la moneda de un usuario en la base de datos.
 *
 * Esta función actualiza los campos del usuario especificados en el objeto `user`
 * en la tabla 'users' de Supabase, utilizando el ID del usuario para identificar el registro.
 * Si ocurre un error durante la actualización, muestra una alerta con el mensaje de error.
 *
 * @param user - Objeto que contiene los datos del usuario a actualizar, incluyendo el campo `id`.
 * @returns Una promesa que se resuelve cuando la operación ha finalizado.
 */
export const editThemeUserCurrency = async (user: any): Promise<void> => {
  console.log('Editando tema y moneda del usuario: ', user)

  const { error } = await supabase.from('users').update(user).eq('id', user.id)

  if (error) {
    console.error('Error al editar el tema y moneda del usuario: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al editar el tema y moneda del usuario: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return
  }

  console.log('Tema y moneda del usuario editados correctamente')
}

/**
 * Edita un usuario existente en la base de datos 'users' utilizando Supabase.
 *
 * @async
 * @param {any} user - Objeto que contiene los datos del usuario a editar, incluyendo el campo 'id'.
 * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
 *
 * @description
 * Esta función actualiza la información de un usuario en la tabla 'users' de Supabase.
 * Muestra una alerta de éxito o error dependiendo del resultado de la operación.
 * En caso de error, muestra un mensaje descriptivo.
 * En caso de éxito, muestra una alerta de confirmación.
 */
export const editUser = async (user: any): Promise<void> => {
  console.log('Editando usuario: ', user)

  let options: SweetAlertOptions = {}

  const { error } = await supabase.from('users').update(user).eq('id', user.id)

  if (error) {
    console.error('Error al editar el usuario: ', error)

    options = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al editar el usuario: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return
  }

  console.log('Usuario editado correctamente')

  options = {
    icon: 'success',
    title: 'Datos modificados',
    showConfirmButton: false,
    timer: 1500,
  }

  showAlert(options)
}

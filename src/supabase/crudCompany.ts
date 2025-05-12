/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SweetAlertOptions } from 'sweetalert2'

import { supabase } from './supabase.config'

import { showAlert } from '@/utils'

/**
 * Obtiene la información de la compañía asignada a un usuario
 * específico mediante una función remota (RPC) en Supabase.
 *
 * @param userId - El identificador único del usuario para el cual se desea obtener la compañía.
 * @returns Una promesa que resuelve con los datos de la compañía
 * si la operación es exitosa, o `null` si ocurre un error.
 *
 * @remarks
 * - Muestra una alerta utilizando `showAlert` en caso de error.
 * - Utiliza la función remota `showCompaniesAssignments` en Supabase.
 * - Registra en consola el proceso de obtención y cualquier error encontrado.
 */
export const getCompany = async (userId: string): Promise<any> => {
  console.log('Obteniendo compañía con ID de usuario: ', userId)

  /* const { data, error } = await supabase
    .rpc('showcompaniesassignments', { _userId: userId })
    .maybeSingle() */

  const { data, error } = await supabase
    .from('company')
    .select()
    .eq('userId', userId)
    .maybeSingle()

  if (error) {
    console.error('Error al obtener la compañía: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al obtener la compañía: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Compañía obtenida: ', data)

  return data
}

/**
 * Cuenta el número de usuarios asociados a una compañía
 * específica utilizando una función RPC de Supabase.
 *
 * @param companyId - El identificador único de la compañía para
 * la cual se desea contar los usuarios.
 * @returns Una promesa que resuelve con el número de usuarios
 * asociados a la compañía, o `null` si ocurre un error.
 *
 * @remarks
 * Si ocurre un error durante la consulta, se muestra una alerta al usuario y se retorna `null`.
 */
export const countUsersByCompany = async (companyId: string): Promise<any> => {
  console.log('Contando usuarios por compañía con ID: ', companyId)

  const { data, error } = await supabase
    .rpc('countUsersByCompany', { _companyId: companyId })
    .maybeSingle()

  if (error) {
    console.error('Error al contar usuarios por compañía: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al contar usuarios por compañía: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Número de usuarios por compañía: ', data)

  return data
}

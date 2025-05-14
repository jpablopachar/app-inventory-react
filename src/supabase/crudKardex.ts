/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SweetAlertOptions } from 'sweetalert2'

import { supabase } from './supabase.config'

import { showAlert } from '@/utils'

/**
 * Inserta un registro en la tabla 'kardex' utilizando Supabase.
 *
 * @async
 * @function
 * @param {any} kardex - Objeto que contiene los datos del kardex a insertar.
 * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
 *
 * @description
 * Esta función intenta insertar un nuevo registro en la tabla 'kardex' de la base de datos.
 * Si ocurre un error durante la inserción, muestra una alerta con
 * el mensaje de error utilizando SweetAlert.
 * También imprime mensajes en la consola para depuración.
 */
export const insertKardex = async (kardex: any): Promise<void> => {
  console.log('Insertando kardex: ', kardex)

  const { error } = await supabase.from('kardex').insert(kardex)

  if (error) {
    console.error('Error al insertar el kardex: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar el kardex: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)
  }

  console.log('El kardex fue insertado correctamente')
}

/**
 * Obtiene el kardex de una compañía a partir de su ID utilizando una función RPC de Supabase.
 *
 * @param companyId - El identificador único de la compañía cuyo kardex se desea obtener.
 * @returns Una promesa que resuelve con los datos del kardex o `null` si ocurre un error.
 *
 * @remarks
 * - Muestra una alerta utilizando `showAlert` si ocurre un error durante la obtención de datos.
 * - Los resultados se ordenan de forma descendente por el campo `id`.
 */
export const getKardex = async (companyId: number): Promise<any> => {
  console.log('Obteniendo kardex con ID: ', companyId)

  const { data, error } = await supabase
    .rpc('show_kardex_company', { _company_id: companyId })
    .order('id', { ascending: false })

  if (error) {
    console.error('Error al obtener el kardex: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al obtener el kardex: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Kardex obtenido: ', data)

  return data
}

/**
 * Busca registros de kardex en la base de datos utilizando una función RPC de Supabase.
 *
 * @param params - Objeto que contiene los parámetros de búsqueda,
 * incluyendo el ID de la compañía (`CompanyId`) y el término de búsqueda (`search`).
 * @returns Una promesa que resuelve con los datos encontrados o `null` si ocurre un error.
 *
 * @remarks
 * - Muestra una alerta utilizando `showAlert` en caso de error durante la búsqueda.
 * - Los resultados se ordenan de forma descendente por el campo `id`.
 * - Utiliza la función RPC `searchKardexCompany` en Supabase.
 */
export const searchKardex = async (params: any): Promise<any> => {
  console.log('Buscando kardex: ', params)

  const { data, error } = await supabase
    .rpc('search_kardex', {
      _company_id: params.companyId,
      _searcher: params.searcher,
    })
    .order('id', { ascending: false })

  if (error) {
    console.error('Error al buscar el kardex: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al buscar el kardex: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Kardex encontrado: ', data)

  return data
}

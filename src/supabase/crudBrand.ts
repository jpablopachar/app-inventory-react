/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SweetAlertOptions } from 'sweetalert2'

import { supabase } from './supabase.config'

import { showAlert } from '@/utils'

/**
 * Inserta una nueva marca en la base de datos utilizando una función remota (RPC) de Supabase.
 *
 * @param brand - Objeto que contiene los datos de la marca a insertar.
 * @returns Una promesa que resuelve a `null` si ocurre un error,
 * o `undefined` si la inserción es exitosa.
 *
 * @remarks
 * - Muestra una alerta utilizando `showAlert` si ocurre un error durante la inserción.
 * - Utiliza la función RPC 'insertBrand' definida en Supabase.
 * - Imprime mensajes en la consola para depuración.
 */
export const insertBrand = async (brand: any): Promise<any> => {
  console.log('Insertando marca: ', brand)

  const { error } = await supabase.rpc('insert_brand', brand)

  if (error) {
    console.error('Error al insertar la marca: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar la marca: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Marca insertada correctamente')
}

/**
 * Obtiene las marcas asociadas a una compañía específica desde la base de datos.
 *
 * @param companyId - El identificador único de la compañía para
 * la cual se desean obtener las marcas.
 * @returns Una promesa que resuelve con los datos de las marcas
 * encontradas o `null` si ocurre un error.
 *
 * @remarks
 * - Si ocurre un error durante la consulta, se muestra una alerta al usuario y se retorna `null`.
 * - Los resultados se ordenan de forma descendente por el campo `id`.
 */
export const getBrand = async (companyId: number): Promise<any> => {
  console.log('Obteniendo marca para la compañia: ', companyId)

  const { data, error } = await supabase
    .from('brand')
    .select()
    .eq('companyId', companyId)
    .order('id', { ascending: false })

  if (error) {
    console.error('Error al obtener la marca: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al obtener la marca: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Marca obtenida correctamente: ', data)

  return data
}

/**
 * Elimina una marca específica de la base de datos utilizando Supabase.
 *
 * @param brandId - El identificador único de la marca a eliminar.
 * @returns Una promesa que se resuelve cuando la operación de eliminación ha finalizado.
 *
 * @remarks
 * Si ocurre un error durante la eliminación, se muestra una
 * alerta con el mensaje de error y se registra en la consola.
 */
export const deleteBrand = async (brandId: number): Promise<void> => {
  console.log('Eliminando marca: ', brandId)

  const { error } = await supabase.from('brand').delete().eq('id', brandId)

  if (error) {
    console.error('Error al eliminar la marca: ', error)

    alert(`Error al eliminar la marca: ${error.message}`)

    return
  }

  console.log('Marca eliminada correctamente')
}

/**
 * Actualiza una marca existente en la base de datos utilizando Supabase.
 *
 * @param brand - Objeto que representa la marca a actualizar.
 * Debe contener al menos la propiedad `id` para identificar la marca.
 * @returns Una promesa que se resuelve cuando la operación de actualización ha finalizado.
 *
 * @remarks
 * Si ocurre un error durante la actualización, se muestra una
 * alerta con el mensaje de error y se registra en la consola.
 */
export const editBrand = async (brand: any): Promise<void> => {
  console.log('Actualizando marca: ', brand)

  const { error } = await supabase
    .from('brand')
    .update(brand)
    .eq('id', brand.id)

  if (error) {
    console.error('Error al actualizar la marca: ', error)

    alert(`Error al actualizar la marca: ${error.message}`)

    return
  }

  console.log('Marca actualizada correctamente')
}

/**
 * Elimina todas las marcas asociadas a un usuario específico en la base de datos.
 *
 * @param userId - El identificador único del usuario cuyas marcas serán eliminadas.
 * @returns Una promesa que se resuelve cuando la operación ha finalizado.
 *
 * Si ocurre un error durante la eliminación, se muestra un
 * mensaje de error en la consola y una alerta al usuario.
 * Si la eliminación es exitosa, se muestra una alerta de confirmación.
 */
export const deleteAllBrands = async (userId: number): Promise<void> => {
  console.log('Eliminando todas las marcas para el usuario: ', userId)

  const { error } = await supabase.from('brand').delete().eq('userId', userId)

  if (error) {
    console.error('Error al eliminar todas las marcas: ', error)

    alert(`Error al eliminar todas las marcas: ${error.message}`)

    return
  }

  console.log('Todas las marcas eliminadas correctamente')

  const options: SweetAlertOptions = {
    position: 'top-end',
    icon: 'success',
    title: 'Datos reseteados',
    showConfirmButton: false,
    timer: 1000,
  }

  showAlert(options)
}

/**
 * Busca marcas en la tabla 'brand' de Supabase que coincidan con
 * el ID de la compañía y una descripción parcial.
 *
 * @param brand - Objeto que contiene los criterios de búsqueda,
 * incluyendo `companyId` y `description`.
 * @returns Una promesa que resuelve con los datos de las marcas
 * encontradas o `null` si ocurre un error.
 *
 * @remarks
 * - Utiliza el método `ilike` para realizar una búsqueda
 * insensible a mayúsculas/minúsculas en la descripción.
 * - Muestra una alerta con SweetAlert si ocurre un error durante la consulta.
 */
export const searchBrand = async (brand: any): Promise<any> => {
  console.log('Buscando marca: ', brand)

  const { data, error } = await supabase
    .from('brand')
    .select()
    .eq('companyId', brand.companyId)
    .ilike('description', `%${brand.description}%`)

  if (error) {
    console.error('Error al buscar la marca: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al buscar la marca: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Marca encontrada: ', data)

  return data
}

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SweetAlertOptions } from 'sweetalert2'

import { supabase } from './supabase.config'

import { showAlert } from '@/utils'

/**
 * Inserta una nueva categoría en la base de datos utilizando una función remota (RPC) de Supabase.
 *
 * @param category - Objeto que contiene los datos de la categoría a insertar.
 * @returns Una promesa que resuelve a `null` si ocurre un error,
 * o `undefined` si la inserción es exitosa.
 *
 * @remarks
 * - Muestra una alerta utilizando `showAlert` si ocurre un error durante la inserción.
 * - Utiliza la función RPC 'insert_categories' definida en Supabase.
 * - Imprime mensajes en la consola para depuración.
 */
export const insertCategory = async (category: any): Promise<any> => {
  console.log('Insertando categoría: ', category)

  const { error } = await supabase.rpc('insert_categories', category)

  if (error) {
    console.error('Error al insertar la categoría: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar la categoría: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Categoría insertada correctamente')
}

/**
 * Obtiene las categorías asociadas a una compañía específica desde la base de datos.
 *
 * @param companyId - El identificador único de la compañía para
 * la cual se desean obtener las categorías.
 * @returns Una promesa que resuelve con los datos de las categorías
 * encontradas o `null` si ocurre un error.
 *
 * @remarks
 * - Si ocurre un error durante la consulta, se muestra una alerta al usuario y se retorna `null`.
 * - Los resultados se ordenan de forma descendente por el campo `id`.
 */
export const getCategories = async (companyId: number): Promise<any> => {
  console.log('Obteniendo categorías para la compañia: ', companyId)

  const { data, error } = await supabase
    .from('categories')
    .select()
    .eq('companyId', companyId)
    .order('id', { ascending: true })

  if (error) {
    console.error('Error al obtener las categorías: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al obtener las categorías: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Categorías obtenidas correctamente: ', data)

  return data
}

/**
 * Elimina una categoría específica de la base de datos utilizando Supabase.
 *
 * @param categoryId - El identificador único de la categoría a eliminar.
 * @returns Una promesa que se resuelve cuando la operación de eliminación ha finalizado.
 *
 * @remarks
 * Si ocurre un error durante la eliminación, se muestra una
 * alerta con el mensaje de error y se registra en la consola.
 */
export const deleteCategory = async (categoryId: number): Promise<void> => {
  console.log('Eliminando categoría: ', categoryId)

  const { error } = await supabase.from('categories').delete().eq('id', categoryId)

  if (error) {
    console.error('Error al eliminar la categoría: ', error)

    alert(`Error al eliminar la categoría: ${error.message}`)

    return
  }

  console.log('Categoría eliminada correctamente')
}

/**
 * Actualiza una categoría existente en la base de datos utilizando Supabase.
 *
 * @param category - Objeto que representa la categoría a actualizar.
 * Debe contener al menos la propiedad `id` para identificar la categoría.
 * @returns Una promesa que se resuelve cuando la operación de actualización ha finalizado.
 *
 * @remarks
 * Si ocurre un error durante la actualización, se muestra una
 * alerta con el mensaje de error y se registra en la consola.
 */
export const editCategory = async (category: any): Promise<void> => {
  console.log('Actualizando categoría: ', category)

  const { error } = await supabase
    .from('categories')
    .update(category)
    .eq('id', category.id)

  if (error) {
    console.error('Error al actualizar la categoría: ', error)

    alert(`Error al actualizar la categoría: ${error.message}`)

    return
  }

  console.log('Categoría actualizada correctamente')
}

/**
 * Elimina todas las categorías asociadas a un usuario específico en la base de datos.
 *
 * @param userId - El identificador único del usuario cuyas categorías serán eliminadas.
 * @returns Una promesa que se resuelve cuando la operación ha finalizado.
 *
 * Si ocurre un error durante la eliminación, se muestra un
 * mensaje de error en la consola y una alerta al usuario.
 * Si la eliminación es exitosa, se muestra una alerta de confirmación.
 */
export const deleteAllCategories = async (userId: number): Promise<void> => {
  console.log('Eliminando todas las categorías para el usuario: ', userId)

  const { error } = await supabase.from('categories').delete().eq('userId', userId)

  if (error) {
    console.error('Error al eliminar todas las categorías: ', error)

    alert(`Error al eliminar todas las categorías: ${error.message}`)

    return
  }

  console.log('Todas las categorías eliminadas correctamente')

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
 * Busca categorías en la tabla 'categories' de Supabase que coincidan con
 * el ID de la compañía y una descripción parcial.
 *
 * @param category - Objeto que contiene los criterios de búsqueda,
 * incluyendo `companyId` y `description`.
 * @returns Una promesa que resuelve con los datos de las categorías
 * encontradas o `null` si ocurre un error.
 *
 * @remarks
 * - Utiliza el método `ilike` para realizar una búsqueda
 * insensible a mayúsculas/minúsculas en la descripción.
 * - Muestra una alerta con SweetAlert si ocurre un error durante la consulta.
 */
export const searchCategories = async (category: any): Promise<any> => {
  console.log('Buscando categoría: ', category)

  const { data, error } = await supabase
    .from('categories')
    .select()
    .eq('companyId', category.companyId)
    .ilike('description', `%${category.description}%`)

  if (error) {
    console.error('Error al buscar la categoría: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al buscar la categoría: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Categoría encontrada: ', data)

  return data
}

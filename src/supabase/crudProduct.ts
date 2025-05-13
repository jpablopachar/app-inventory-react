/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SweetAlertOptions } from 'sweetalert2'

import { supabase } from './supabase.config'

import { showAlert } from '@/utils'

/**
 * Inserta un nuevo producto en la base de datos utilizando una función remota (RPC) de Supabase.
 *
 * @param product - Objeto que contiene los datos del producto a insertar.
 * @returns Una promesa que resuelve a `null` si ocurre un error,
 * o `undefined` si la inserción es exitosa.
 *
 * @remarks
 * - Muestra una alerta utilizando `showAlert` si ocurre un error durante la inserción.
 * - Utiliza la función RPC 'insert_products' definida en Supabase.
 * - Imprime mensajes en la consola para depuración.
 */
export const insertProduct = async (product: any): Promise<any> => {
  console.log('Insertando producto: ', product)

  const { error } = await supabase.rpc('insert_products', product)

  if (error) {
    console.error('Error al insertar el producto: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al insertar el producto: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Producto insertado correctamente')
}

/**
 * Obtiene los productos asociados a una compañía específica desde la base de datos
 * utilizando una función RPC.
 *
 * @param companyId - El identificador único de la compañía para
 * la cual se desean obtener los productos.
 * @returns Una promesa que resuelve con los datos de los productos
 * encontrados o `null` si ocurre un error.
 *
 * @remarks
 * - Si ocurre un error durante la consulta, se muestra una alerta al usuario y se retorna `null`.
 * - Utiliza la función RPC 'show_products' definida en Supabase.
 */
export const getProducts = async (companyId: number): Promise<any> => {
  console.log('Obteniendo productos para la compañía: ', companyId)

  const { data, error } = await supabase.rpc('show_products', { _company_id: companyId })

  if (error) {
    console.error('Error al obtener los productos: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al obtener los productos: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Productos obtenidos correctamente: ', data)

  return data
}

/**
 * Elimina un producto específico de la base de datos utilizando Supabase.
 *
 * @param productId - El identificador único del producto a eliminar.
 * @returns Una promesa que se resuelve cuando la operación de eliminación ha finalizado.
 *
 * @remarks
 * Si ocurre un error durante la eliminación, se muestra una
 * alerta con el mensaje de error y se registra en la consola.
 */
export const deleteProduct = async (productId: number): Promise<void> => {
  console.log('Eliminando producto: ', productId)

  const { error } = await supabase.from('product').delete().eq('id', productId)

  if (error) {
    console.error('Error al eliminar el producto: ', error)

    alert(`Error al eliminar el producto: ${error.message}`)

    return
  }

  console.log('Producto eliminado correctamente')
}

/**
 * Actualiza un producto existente en la base de datos utilizando Supabase.
 *
 * @param product - Objeto que representa el producto a actualizar.
 * Debe contener al menos la propiedad `id` para identificar el producto.
 * @returns Una promesa que se resuelve cuando la operación de actualización ha finalizado.
 *
 * @remarks
 * Si ocurre un error durante la actualización, se muestra una
 * alerta con el mensaje de error y se registra en la consola.
 */
export const editProduct = async (product: any): Promise<void> => {
  console.log('Actualizando producto: ', product)

  const { error } = await supabase
    .from('product')
    .update(product)
    .eq('id', product.id)

  if (error) {
    console.error('Error al actualizar el producto: ', error)

    alert(`Error al actualizar el producto: ${error.message}`)

    return
  }

  console.log('Producto actualizado correctamente')
}

/**
 * Elimina todos los productos asociados a un usuario específico en la base de datos.
 *
 * @param userId - El identificador único del usuario cuyos productos serán eliminados.
 * @returns Una promesa que se resuelve cuando la operación ha finalizado.
 *
 * Si ocurre un error durante la eliminación, se muestra un
 * mensaje de error en la consola y una alerta al usuario.
 * Si la eliminación es exitosa, se muestra una alerta de confirmación.
 */
export const deleteAllProducts = async (userId: number): Promise<void> => {
  console.log('Eliminando todos los productos para el usuario: ', userId)

  const { error } = await supabase.from('product').delete().eq('userId', userId)

  if (error) {
    console.error('Error al eliminar todos los productos: ', error)

    alert(`Error al eliminar todos los productos: ${error.message}`)

    return
  }

  console.log('Todos los productos eliminados correctamente')

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
 * Busca productos utilizando un procedimiento remoto (RPC) de Supabase.
 *
 * @param searchParams - Objeto que contiene los criterios de búsqueda,
 * incluyendo companyId y otros posibles parámetros de búsqueda.
 * @returns Una promesa que resuelve con los datos de los productos
 * encontrados o `null` si ocurre un error.
 *
 * @remarks
 * - Utiliza la función RPC 'search_products' definida en Supabase.
 * - Muestra una alerta con SweetAlert si ocurre un error durante la consulta.
 */
export const searchProducts = async (searchParams: any): Promise<any> => {
  console.log('Buscando productos: ', searchParams)

  const { data, error } = await supabase.rpc('search_products', searchParams)

  if (error) {
    console.error('Error al buscar los productos: ', error)

    const options: SweetAlertOptions = {
      icon: 'error',
      title: 'Oops...',
      text: `Error al buscar los productos: ${error.message}`,
      footer: '<a href="">error</a>',
    }

    showAlert(options)

    return null
  }

  console.log('Productos encontrados: ', data)

  return data
}

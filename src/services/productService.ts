/* eslint-disable @typescript-eslint/no-explicit-any */

import { Product } from '@/interfaces'
import {
  deleteProduct,
  editProduct,
  getProducts,
  insertProduct,
  searchProducts
} from '@/supabase'

/**
 * Obtiene la información de productos asociados a una compañía específica.
 *
 * @param companyId - El identificador numérico de la compañía cuyos productos se desean mostrar.
 * @returns Una promesa que resuelve con la información de los productos o null si no se encuentra.
 */
export const showProducts = async (companyId: number): Promise<Product[] | null> => {
  const res: Product[] | null = await getProducts(companyId)

  return res
}

/**
 * Busca productos utilizando el servicio `searchProducts`.
 *
 * @param searchParams - Objeto que representa los criterios de búsqueda de productos.
 * @returns Una promesa que resuelve con el resultado de la búsqueda de productos o null si no se
 * encuentran.
 */
export const seekProducts = async (searchParams: any): Promise<Product[] | null> => {
  const res: Product[] | null = await searchProducts(searchParams)

  return res
}

/**
 * Agrega un nuevo producto a la base de datos.
 *
 * @param product - Objeto que representa el producto a insertar.
 * @returns Una promesa que se resuelve cuando el producto ha sido agregado exitosamente.
 */
export const addProduct = async (product: any): Promise<void> => {
  await insertProduct(product)
}

/**
 * Actualiza un producto existente.
 *
 * @param product - Objeto que representa el producto a editar.
 * @returns Una promesa que se resuelve cuando la edición ha finalizado.
 */
export const updateProduct = async (product: any): Promise<void> => {
  await editProduct(product)
}

/**
 * Elimina un producto específico de la base de datos.
 *
 * @param productId - El identificador numérico del producto a eliminar.
 * @returns Una promesa que se resuelve cuando la eliminación ha finalizado.
 */
export const removeProduct = async (productId: number): Promise<void> => {
  await deleteProduct(productId)
}

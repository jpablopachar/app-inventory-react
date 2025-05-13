/* eslint-disable @typescript-eslint/no-explicit-any */

import { Category } from '@/interfaces'
import {
  deleteCategory,
  editCategory,
  getCategories,
  insertCategory,
  searchCategories
} from '@/supabase'

/**
 * Obtiene la información de categorías asociadas a una compañía específica.
 *
 * @param companyId - El identificador numérico de la compañía cuyas categorías se desean mostrar.
 * @returns Una promesa que resuelve con la información de las categorías o null si no se encuentra.
 */
export const showCategories = async (companyId: number): Promise<Category[] | null> => {
  const res: Category[] | null = await getCategories(companyId)

  return res
}

/**
 * Busca categorías utilizando el servicio `searchCategories`.
 *
 * @param category - Objeto que representa los criterios de búsqueda de categorías.
 * @returns Una promesa que resuelve con el resultado de la búsqueda de categorías o null si no se
 * encuentran.
 */
export const seekCategories = async (category: any): Promise<Category[] | null> => {
  const res: Category[] | null = await searchCategories(category)

  return res
}

/**
 * Agrega una nueva categoría a la base de datos.
 *
 * @param category - Objeto que representa la categoría a insertar.
 * @returns Una promesa que se resuelve cuando la categoría ha sido agregada exitosamente.
 */
export const addCategory = async (category: any): Promise<void> => {
  await insertCategory(category)
}

/**
 * Actualiza una categoría existente.
 *
 * @param category - Objeto que representa la categoría a editar.
 * @returns Una promesa que se resuelve cuando la edición ha finalizado.
 */
export const updateCategory = async (category: any): Promise<void> => {
  await editCategory(category)
}

/**
 * Elimina una categoría específica de la base de datos.
 *
 * @param categoryId - El identificador numérico de la categoría a eliminar.
 * @returns Una promesa que se resuelve cuando la eliminación ha finalizado.
 */
export const removeCategory = async (categoryId: number): Promise<void> => {
  await deleteCategory(categoryId)
}

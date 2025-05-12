/* eslint-disable @typescript-eslint/no-explicit-any */

import { Brand } from '@/interfaces'
import { editBrand, getBrand, insertBrand, searchBrand } from '@/supabase'

/**
 * Obtiene la información de una marca específica según el ID de la compañía.
 *
 * @param companyId - El identificador numérico de la compañía cuya marca se desea mostrar.
 * @returns Una promesa que resuelve con la información de la marca o null si no se encuentra.
 */
export const showBrand = async (companyId: number): Promise<Brand[] | null> => {
  const res: Brand[] | null = await getBrand(companyId)

  return res
}

/**
 * Busca una marca utilizando el servicio `searchBrand`.
 *
 * @param brand - Objeto que representa los criterios de búsqueda de la marca.
 * @returns Una promesa que resuelve con el resultado de la búsqueda de la marca o null si no se
 * encuentra.
 */
export const seekBrand = async (brand: any): Promise<Brand[] | null> => {
  const res: Brand[] | null = await searchBrand(brand)

  return res
}

/**
 * Agrega una nueva marca a la base de datos.
 *
 * @param brand - Objeto que representa la marca a insertar.
 * @returns Una promesa que se resuelve cuando la marca ha sido agregada exitosamente.
 */
export const addBrand = async (brand: any): Promise<void> => {
  await insertBrand(brand)
}

/**
 * Actualiza una marca existente.
 *
 * @param brand - Objeto que representa la marca a editar.
 * @returns Una promesa que se resuelve cuando la edición ha finalizado.
 */
export const updateBrand = async (brand: any): Promise<void> => {
  await editBrand(brand)
}

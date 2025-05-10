/* eslint-disable @typescript-eslint/no-explicit-any */

import { getBrand, searchBrand } from '@/supabase'

/**
 * Obtiene la información de una marca específica según el ID de la compañía.
 *
 * @param companyId - El identificador numérico de la compañía cuya marca se desea mostrar.
 * @returns Una promesa que resuelve con la información de la marca correspondiente.
 */
export const showBrand = async (companyId: number): Promise<any> => {
  const res = await getBrand(companyId)

  return res
}

/**
 * Busca una marca utilizando el servicio `searchBrand`.
 *
 * @param brand - Objeto que representa los criterios de búsqueda de la marca.
 * @returns Una promesa que resuelve con el resultado de la búsqueda de la marca.
 */
export const seekBrand = async (brand: any): Promise<any> => {
  const res = await searchBrand(brand)

  return res
}

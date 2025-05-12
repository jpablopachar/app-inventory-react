/* eslint-disable @typescript-eslint/no-explicit-any */

import { Company } from '@/interfaces'
import { countUsersByCompany, getCompany } from '@/supabase'

/**
 * Obtiene la información de una compañía asociada a un usuario específico.
 *
 * @param userId - El identificador único del usuario cuya compañía se desea obtener.
 * @returns Una promesa que resuelve con la información de la compañía o null si no se encuentra.
 */
export const showCompany = async (userId: number): Promise<Company | null> => {
  const res: Company | null = await getCompany(userId)

  return res
}

/**
 * Obtiene el número de usuarios asociados a una empresa específica.
 *
 * @param companyId - El identificador único de la empresa.
 * @returns Una promesa que resuelve con el número de usuarios asociados a la empresa.
 */
export const numberOfUsersByCompany = async (
  companyId: string,
): Promise<any> => {
  const res = await countUsersByCompany(companyId)

  return res
}

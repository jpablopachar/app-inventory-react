import { Kardex, KardexRequest } from '@/interfaces'
import { getKardex, insertKardex } from '@/supabase'

/**
 * Parámetros requeridos para realizar operaciones relacionadas con el Kardex.
 *
 * @property companyId - Identificador único de la empresa.
 * @property searcher - Cadena de búsqueda utilizada para filtrar resultados.
 */
interface KardexParams {
  companyId: number
  searcher: string
}

/**
 * Agrega un nuevo registro de kardex utilizando los datos proporcionados.
 *
 * @param kardex - Objeto que contiene la información necesaria para crear el registro de kardex.
 * @returns Una promesa que se resuelve cuando el registro ha sido insertado exitosamente.
 */
export const addKardex = async (kardex: KardexRequest): Promise<void> => {
  await insertKardex(kardex)
}

/**
 * Obtiene y retorna el Kardex de una compañía específica.
 *
 * @param companyId - El identificador único de la compañía para la cual se desea obtener el Kardex.
 * @returns Una promesa que resuelve a un arreglo de objetos Kardex o null si no
 * se encuentra información.
 */
export const showKardex = async (companyId: number): Promise<Kardex[] | null> => {
  const res: Kardex[] | null = await getKardex(companyId)

  return res
}

/**
 * Busca registros de Kardex según los parámetros proporcionados.
 *
 * @param params - Parámetros de búsqueda para filtrar los registros de Kardex.
 * @returns Una promesa que resuelve a un arreglo de objetos Kardex o null si no
 * se encuentran resultados.
 */
export const searchKardex = async (params: KardexParams): Promise<Kardex[] | null> => {
  const res: Kardex[] | null = await searchKardex(params)

  return res
}

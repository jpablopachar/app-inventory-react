import { Permissions } from '@/interfaces'
import { getModules } from '@/supabase'

/**
 * Obtiene y retorna la lista de módulos disponibles con sus permisos.
 *
 * @returns {Promise<Permissions[] | null>} Una promesa que resuelve con un arreglo
 * de permisos (`Permissions[]`)
 * o `null` si no hay módulos disponibles.
 */
export const showModules = async (): Promise<Permissions[] | null> => {
  const res: Permissions[] | null = await getModules()

  return res
}

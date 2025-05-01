/* eslint-disable no-console */

import { supabase } from './supabase.config'

/**
 * Obtiene el identificador único del usuario autenticado actualmente en Supabase.
 *
 * Realiza una llamada asíncrona para obtener la sesión de autenticación activa y,
 * si existe, retorna el ID del usuario autenticado. Si no hay sesión activa,
 * retorna `undefined`.
 *
 * @returns {Promise<string | undefined>} Una promesa que resuelve con el ID del usuario
 * autenticado o `undefined` si no hay sesión.
 */
export const getIdAuthSupabase = async (): Promise<string | undefined> => {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session !== null) {
    const { user } = session

    const { id } = user

    console.log(`ID del usuario autenticado: ${id}`)

    return id
  }
}

/**
 * Obtiene la lista de módulos desde la tabla 'modules' en Supabase.
 *
 * @returns {Promise<any[] | undefined>} Una promesa que resuelve con un arreglo
 * de módulos si existen, o undefined en caso contrario.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getModules = async (): Promise<any[] | undefined> => {
  const { data } = await supabase.from('modules').select()

  if (data) {
    console.log(`Lista de módulos: ${data}`)

    return data
  }
}

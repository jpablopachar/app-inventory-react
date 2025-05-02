import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
  User,
} from '@supabase/supabase-js'

import { supabase } from '@/supabase'

/**
 * Inicia sesión de un usuario utilizando las credenciales proporcionadas.
 *
 * @param credentials - Credenciales del usuario para iniciar
 * sesión (correo electrónico y contraseña).
 * @returns Una promesa que resuelve con el usuario autenticado si
 * las credenciales son correctas, o `null` si ocurre un error.
 */
export const signIn = async (
  credentials: SignInWithPasswordCredentials,
): Promise<User | null> => {
  const { data, error } = await supabase.auth.signInWithPassword(credentials)

  if (error) {
    return null
  }

  return data.user
}

/**
 * Cierra la sesión del usuario actual utilizando el servicio de autenticación de Supabase.
 *
 * @throws {Error} Lanza un error si ocurre algún problema al cerrar la sesión.
 * @returns {Promise<void>} Una promesa que se resuelve cuando la
 * sesión se ha cerrado correctamente.
 */
export const logOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw new Error('Ha ocurrido un error al cerrar sesión: ' + error)
  }
}

/**
 * Registra un nuevo usuario utilizando las credenciales proporcionadas.
 *
 * @param credentials - Credenciales necesarias para el registro del usuario.
 * @returns Una promesa que resuelve con el usuario registrado si
 * el proceso es exitoso, o `null` si ocurre un error.
 */
export const signUp = async (
  credentials: SignUpWithPasswordCredentials,
): Promise<User | null> => {
  const { data, error } = await supabase.auth.signUp(credentials)

  if (error) {
    return null
  }

  return data.user
}

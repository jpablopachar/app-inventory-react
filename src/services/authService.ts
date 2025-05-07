import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
  User,
} from '@supabase/supabase-js'

import { logOut, signIn, signUp } from '@/supabase'

/**
 * Registra un nuevo usuario utilizando las credenciales proporcionadas.
 *
 * @param credentials - Las credenciales necesarias para el registro del usuario.
 * @returns Una promesa que resuelve con el usuario registrado o null si el registro falla.
 */
export const registerUser = async (
  credentials: SignUpWithPasswordCredentials,
): Promise<User | null> => {
  const res = await signUp(credentials)

  return res
}

/**
 * Inicia sesión utilizando las credenciales proporcionadas.
 *
 * @param credentials - Las credenciales necesarias para iniciar sesión (usuario y contraseña).
 * @returns Una promesa que resuelve con el usuario autenticado si
 * las credenciales son válidas, o `null` en caso contrario.
 */
export const loginUser = async (
  credentials: SignInWithPasswordCredentials,
): Promise<User | null> => {
  const res = await signIn(credentials)

  return res
}

/**
 * Cierra la sesión del usuario actual.
 *
 * Esta función llama a la función `logOut` para finalizar la sesión activa.
 * Es una operación asíncrona que no retorna ningún valor.
 *
 * @returns {Promise<void>} Una promesa que se resuelve cuando la sesión ha sido cerrada.
 */
export const closeSession = async (): Promise<void> => {
  await logOut()
}

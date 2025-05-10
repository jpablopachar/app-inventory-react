import { User } from '@supabase/supabase-js'

import { insertUsers, showUsers, signIn, signUp } from '@/supabase'

/**
 * Agrega un nuevo usuario al sistema.
 *
 * Este método realiza el proceso de registro de un usuario utilizando las
 * credenciales proporcionadas,
 * inicia sesión con dichas credenciales y, si el inicio de sesión es exitoso,
 * inserta los datos adicionales
 * del usuario en la base de datos.
 *
 * @param credentials - Objeto que contiene el correo electrónico, la contraseña y
 * el tipo de usuario.
 * @returns Una promesa que resuelve con el usuario creado si el proceso es
 * exitoso, o `null` si falla el inicio de sesión.
 */
export const addUser = async (credentials: {
  email: string
  password: string
  userType: string
}): Promise<User | null> => {
  await signUp(credentials)

  const res = await signIn(credentials)

  if (!res) {
    return null
  }

  await insertUsers({
    registrationDate: new Date(),
    userType: credentials.userType,
    authId: res.id,
  })

  return res
}

/**
 * Obtiene la lista de usuarios llamando a la función showUsers.
*
* @returns {Promise<any>} Una promesa que resuelve con la respuesta de los usuarios.
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUsers = async (): Promise<any> => {
  const res = await showUsers()

  return res
}

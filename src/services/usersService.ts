import { User } from '@supabase/supabase-js'

import { insertUsers, signIn, signUp } from '@/supabase'

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
    authId: res.id,
    registrationDate: new Date(),
    userType: credentials.userType,
  })

  return res
}

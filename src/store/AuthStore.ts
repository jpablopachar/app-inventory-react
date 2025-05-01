import { SignInWithPasswordCredentials } from '@supabase/supabase-js'
import { create } from 'zustand'

import { logOut, signIn } from '@/services'

/**
 * Hook de estado global para la autenticación de usuarios.
 *
 * Proporciona el estado de autenticación (`isAuth`), los datos
 * del usuario autenticado (`userAuthData`),
 * y funciones para iniciar sesión con correo electrónico y cerrar sesión.
 *
 * @returns {object} Objeto con el estado y métodos de autenticación:
 * - `isAuth`: Indica si el usuario está autenticado.
 * - `userAuthData`: Datos del usuario autenticado.
 * - `signInWithEmail`: Función para iniciar sesión con credenciales de correo y contraseña.
 * - `signOut`: Función asíncrona para cerrar sesión y actualizar el estado.
 */
export const useAuthStore = create((set) => ({
  isAuth: false,
  userAuthData: [],
  signInWithEmail: (credentials: SignInWithPasswordCredentials) =>
    signIn(credentials),
  signOut: async () => {
    await logOut()

    set({ isAuth: false })
  },
}))

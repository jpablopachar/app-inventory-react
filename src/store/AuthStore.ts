import { create } from 'zustand'

/**
 * Interfaz que define el estado y las acciones relacionadas con la autenticación de usuario.
 *
 * @property {boolean} isAuth Indica si el usuario está autenticado.
 * @property {any[]} userAuthData Datos de autenticación del usuario.
 * @property {() => void} signOut Función para cerrar la sesión del usuario.
 */
interface AuthStoreHook {
  isAuth: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userAuthData: any[]
  signOut: () => void
}

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
 * - `signOut`: Función actualizar `isAuth`.
 */
export const useAuthStore = create<AuthStoreHook>((set) => ({
  isAuth: false,
  userAuthData: [],
  signOut: () => set({ isAuth: false }),
}))

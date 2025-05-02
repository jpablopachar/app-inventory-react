import { create } from 'zustand'

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
export const useAuthStore = create((set) => ({
  isAuth: false,
  userAuthData: [],
  signOut: () => set({ isAuth: false }),
}))

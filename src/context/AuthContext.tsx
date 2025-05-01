/* eslint-disable no-console */

import { User } from '@supabase/supabase-js'
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react'

import { supabase } from '@/supabase'

/**
 * Propiedades para el contexto de autenticación.
 *
 * @property {React.ReactNode} children - Elementos secundarios que serán
 * envueltos por el proveedor del contexto de autenticación.
 */
interface AuthContextProps {
  children: React.ReactNode
}

const AuthContext = createContext<{ user: User | null }>({ user: null })

/**
 * Proveedor del contexto de autenticación para la aplicación.
 *
 * Este componente envuelve a sus hijos y proporciona el usuario autenticado actual
 * a través del contexto `AuthContext`. Escucha los cambios en el estado de autenticación
 * utilizando Supabase y actualiza el usuario en consecuencia.
 *
 * @param {AuthContextProps} props - Propiedades del proveedor, incluyendo los componentes hijos.
 * @returns {ReactElement} El proveedor de contexto con el usuario autenticado.
 */
export const AuthContextProvider: React.FC<AuthContextProps> = ({
  children,
}): ReactElement => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user === null) {
          setUser(null)
        } else {
          setUser(session!.user)

          console.log('event', event)
          console.log('session', session)
        }
      },
    )

    return (): void => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      authListener.subscription
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

/**
 * Hook personalizado que proporciona el usuario autenticado actual desde el
 * contexto de autenticación.
 *
 * @returns { user: User | null } Un objeto que contiene el usuario autenticado o
 * null si no hay usuario autenticado.
 */
export const UserAuth = (): { user: User | null } => {
  return useContext(AuthContext)
}

import { JSX } from 'react'
import { Navigate } from 'react-router-dom'

import { UserAuth } from '@/context'
import { AccessType } from '@/types'

/**
 * Propiedades para el componente ProtectedRoute.
 *
 * @property {JSX.Element} children - El componente hijo que se
 * renderizará si el usuario tiene acceso.
 * @property {AccessType} accessBy - El tipo de acceso requerido
 * para permitir la visualización del componente hijo.
 */
interface ProtectedRouteProps {
  children: JSX.Element
  accessBy: AccessType
}

/**
 * Componente de ruta protegida que controla el acceso a rutas
 * según el estado de autenticación del usuario.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elementos hijos que
 * se renderizarán si el acceso es permitido.
 * @param {'authenticated' | 'non-authenticated'} props.accessBy -
 * Define si la ruta es accesible para usuarios autenticados o no autenticados.
 *
 * @returns {JSX.Element} Renderiza los hijos si el usuario cumple
 * con la condición de acceso, de lo contrario redirige a la ruta correspondiente.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  accessBy,
}) => {
  const { user } = UserAuth()

  if (accessBy === 'non-authenticated') {
    if (!user) {
      return children
    }

    return <Navigate to="/" />
  }
  if (accessBy === 'authenticated') {
    if (user) {
      return children
    }
  }

  return <Navigate to="/login" />
}

export default ProtectedRoute

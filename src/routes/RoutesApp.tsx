import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

import { Layout } from '@/layouts'
import { Home, Login } from '@/pages'

/**
 * Componente principal de rutas de la aplicación.
 *
 * Este componente define las rutas principales utilizando React Router.
 * - La ruta `/login` está protegida y solo accesible para usuarios no autenticados.
 * - La ruta `/` está protegida y solo accesible para usuarios autenticados, mostrando el
 * layout principal y la página de inicio.
 *
 * @component
 */
const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedRoute accessBy="non-authenticated">
            <Login />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default RoutesApp

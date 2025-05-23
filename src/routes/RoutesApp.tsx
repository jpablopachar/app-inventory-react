import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

import { Layout } from '@/layouts'
import { Brand, Category, Configuration, Home, Kardex, Login, Personal, Products } from '@/pages'

/**
 * Componente principal de rutas de la aplicación.
 *
 * Este componente define las rutas principales utilizando React Router.
 * - La ruta `/login` está protegida y solo accesible para usuarios no autenticados.
 * - La ruta `/` está protegida y solo accesible para usuarios autenticados, mostrando el
 * layout principal y la página de inicio.
 * - La ruta `/configurar` está protegida y solo accesible para
 * usuarios autenticados, mostrando la página de configuración.
 * - La ruta `/configurar/marca` está protegida y solo accesible
 * para usuarios autenticados, mostrando la página de marcas.
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
      <Route
        path="/configurar"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Configuration />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configurar/usuarios"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Personal />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configurar/categorias"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Category />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configurar/productos"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Products />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configurar/marca"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Brand />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/kardex"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Kardex />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default RoutesApp

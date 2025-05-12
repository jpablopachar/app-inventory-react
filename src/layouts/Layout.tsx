import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { LayoutContainer, LayoutContainerBody } from './LayoutStyles'

import { HamburguerMenu, Sidebar, SpinnerLoader } from '@/components'
import { Permission } from '@/interfaces'
import {
  configurePermissionsModules,
  getUsers,
  showCompany,
  showPermissions,
} from '@/services'
import { useCompanyStore, usePermissionsStore, useUserStore } from '@/store'

/**
 * Propiedades para el componente de diseño principal.
 *
 * @property {React.ReactNode} children - Elementos secundarios
 * que serán renderizados dentro del layout.
 */
interface LayoutProps {
  children: React.ReactNode
}

/**
 * Componente de layout principal para la aplicación.
 *
 * Este componente se encarga de gestionar la estructura general de la interfaz,
 * incluyendo la barra lateral (Sidebar), el menú hamburguesa y el contenedor principal
 * donde se renderizan los hijos recibidos como prop.
 *
 * Además, realiza la carga inicial de datos del usuario, la empresa y los permisos
 * utilizando React Query y los almacena en los stores correspondientes.
 *
 * @component
 * @param {LayoutProps} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elementos hijos que
 * serán renderizados dentro del layout.
 *
 * @returns {JSX.Element} El layout de la aplicación con la barra
 * lateral, menú y contenido principal.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { userData, showUsers } = useUserStore()

  const { getCompany } = useCompanyStore()

  const { getPermissions } = usePermissionsStore()

  const { isLoading, isSuccess, error } = useQuery({
    queryKey: ['show users'],
    queryFn: async () => {
      const res = await getUsers()

      showUsers(res)

      return res
    },
  })

  useQuery({
    queryKey: ['show company', { userId: userData?.id }],
    queryFn: async () => {
      const res = await showCompany(userData?.id as number)

      getCompany(res)

      return res
    },
    enabled: !!userData?.id && isSuccess,
  })

  useQuery({
    queryKey: ['show permissions', { userId: userData?.id }],
    queryFn: async () => {
      const res = await showPermissions(userData?.id as number)

      await configurePermissionsModules(res as Permission[])

      getPermissions(res)

      return res
    },
    enabled: !!userData?.id && isSuccess,
  })

  if (isLoading) {
    return <SpinnerLoader />
  }

  if (error) {
    return <h1>Error...</h1>
  }

  return (
    <LayoutContainer className={sidebarOpen ? 'active' : ''}>
      <div className="ContentSidebar">
        <Sidebar
          state={sidebarOpen}
          setState={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>
      <div className="ContentMenuHamburger">
        <HamburguerMenu />
      </div>
      <LayoutContainerBody>{children}</LayoutContainerBody>
    </LayoutContainer>
  )
}

export default Layout

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { LayoutContainer, LayoutContainerBody } from './LayoutStyles'

import { HamburguerMenu, Sidebar, SpinnerLoader } from '@/components'
import { configurePermissionsModules, showPermissions } from '@/services'
import { useCompanyStore, usePermissionsStore, useUserStore } from '@/store'
import { getCompany, getUsers } from '@/supabase'

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
 * Componente de diseño principal para la aplicación.
 *
 * @component
 * @param {LayoutProps} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elementos secundarios
 * que se renderizan dentro del cuerpo del layout.
 * @returns {JSX.Element} El contenedor de layout con barra
 * lateral, menú hamburguesa y contenido principal.
 *
 * @description
 * Este componente gestiona la estructura general de la aplicación, incluyendo una barra lateral,
 * un menú tipo hamburguesa y el área principal donde se renderizan los hijos recibidos por props.
 * El estado `sidebarOpen` controla si la barra lateral está activa o no.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { usersData, showUsers } = useUserStore()

  const { showCompany } = useCompanyStore()

  const { getPermissions } = usePermissionsStore()

  const { isLoading, error } = useQuery({
    queryKey: ['show users'],
    queryFn: async () => {
      const res = await getUsers()

      showUsers(res)
    },
  })

  useQuery({
    queryKey: ['show company', { usersId: usersData?.id }],
    queryFn: async () => {
      const res = await getCompany(usersData?.id)

      showCompany(res)
    },
  })

  useQuery({
    queryKey: ['show permissions', { usersId: usersData?.id }],
    queryFn: async () => {
      const res = await showPermissions(usersData?.id)

      await configurePermissionsModules(res)

      getPermissions(res)
    },
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

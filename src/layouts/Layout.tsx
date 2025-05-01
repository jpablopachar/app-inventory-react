import { useState } from 'react'

import { LayoutContainer, LayoutContainerBody } from './LayoutStyles'

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

  return (
    <LayoutContainer className={sidebarOpen ? 'active' : ''}>
      <div className="ContentSidebar">Sidebar</div>
      <div className="ContentMenuHamburger">Menú Hamburguesa</div>
      <LayoutContainerBody>{children}</LayoutContainerBody>
    </LayoutContainer>
  )
}

export default Layout

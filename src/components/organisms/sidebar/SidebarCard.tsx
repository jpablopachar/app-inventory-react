import { SidebarCardContainer } from './SidebarCardStyles'

import { BtnSave } from '@/components/molecules'
import { closeSession } from '@/services'
import { useAuthStore } from '@/store'
import { iconsAndVars } from '@/styles'

/**
 *
 * Muestra una tarjeta en la barra lateral que permite al usuario cerrar sesión.
 * Incluye un icono, un título y un botón que ejecuta el proceso de cierre de sesión
 * de manera asíncrona, llamando primero a `closeSession` y luego a `signOut`.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la tarjeta
 * de cierre de sesión en la barra lateral.
 */
const SidebarCard: React.FC = () => {
  const { signOut } = useAuthStore()

  /**
   * Cierra la sesión del usuario de forma asíncrona.
   *
   * Esta función primero ejecuta `closeSession()` para realizar
   * las tareas necesarias de cierre de sesión
   * y, posteriormente, llama a `signOut()` para finalizar la sesión del usuario en la aplicación.
   *
   * @returns {Promise<void>} Una promesa que se resuelve cuando
   * la sesión ha sido cerrada completamente.
   */
  const logOut = async (): Promise<void> => {
    await closeSession()

    signOut()
  }

  return (
    <SidebarCardContainer>
      <span className="icon">{<iconsAndVars.helpIcon />}</span>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Cerrar sesión</h3>
        <div className="contentBtn">
          <BtnSave title="Cerrar ..." bgColor="#f8f2fd" task={logOut} />
        </div>
      </div>
    </SidebarCardContainer>
  )
}

export default SidebarCard

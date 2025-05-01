import { BlockingPageContainer } from './BlockingPageStyles'

/**
 * Propiedades para el componente BlockingPage.
 *
 * @property {boolean} state - Indica si la página de bloqueo debe
 * mostrarse (`true`) o no (`false`).
 */
interface BlockingPageProps {
  state: boolean
}

/**
 * Componente que muestra una página de bloqueo cuando el usuario no
 * tiene permisos para acceder a un módulo.
 *
 * @component
 * @param {BlockingPageProps} props - Propiedades del componente.
 * @param {boolean} props.state - Indica si el usuario tiene acceso
 * al módulo. Si es verdadero, no se muestra el mensaje de bloqueo.
 * @returns {JSX.Element | undefined} Un contenedor con un mensaje
 * de acceso denegado, o nada si el usuario tiene permisos.
 */
const BlockingPage: React.FC<BlockingPageProps> = ({ state }) => {
  if (state) {
    return
  }

  return (
    <BlockingPageContainer>
      <span className="icon">💀</span>
      <span className="text">No tienes permisos a este modulo</span>
    </BlockingPageContainer>
  )
}

export default BlockingPage

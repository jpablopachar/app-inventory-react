import { MessageContainer } from './MessageStyles'

/**
 * Propiedades para el componente Message.
 *
 * @property {boolean} state - Indica si el mensaje debe mostrarse (false) o no (true).
 */
interface MessageProps {
  state: boolean
}

/**
 * Componente que muestra un mensaje de acceso denegado cuando el usuario no tiene permisos.
 *
 * @component
 * @param {MessageProps} props - Propiedades del componente.
 * @param {boolean} props.state - Estado que controla la visibilidad del mensaje.
 * Si es true, el componente no se renderiza. Si es false, se muestra el mensaje.
 *
 * @returns {JSX.Element | null} Un contenedor con un mensaje de acceso denegado
 * o null si state es true.
 */
const Message: React.FC<MessageProps> = ({ state }) => {
  if (state) {
    return null
  }

  return (
    <MessageContainer className={state ? '' : 'visible'}>
      <span className="icon">💀</span>
      <span className="text">No tienes permisos a este modulo</span>
    </MessageContainer>
  )
}

export default Message

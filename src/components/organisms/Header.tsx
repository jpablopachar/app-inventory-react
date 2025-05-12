/**
 * Propiedades para el componente Header.
 *
 * @property stateConfig - Objeto de configuración del estado.
 * @property stateConfig.state - Valor booleano que indica el estado actual.
 * @property stateConfig.setState - Función para actualizar el estado.
 */
interface HeaderProps {
  stateConfig: {
    state: boolean
    setState: () => void
  }
}

const Header: React.FC<HeaderProps> = ({ stateConfig }) => {
  return <div>Header</div>
}

export default Header

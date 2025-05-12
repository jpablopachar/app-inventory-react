import DataUser from './DataUser'

import { ContentHeaderStyles } from '../atoms'

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

/**
 * Componente Header.
 *
 * Este componente representa el encabezado de la aplicación. 
 * Recibe la configuración del estado como propiedad y la pasa al componente `DataUser`.
 *
 * @component
 * @param {HeaderProps} props - Propiedades del componente.
 * @param {any} props.stateConfig - Configuración del estado que
 * se utiliza para mostrar la información del usuario.
 * @returns {JSX.Element} El encabezado renderizado.
 */
const Header: React.FC<HeaderProps> = ({ stateConfig }) => {
  return (
    <ContentHeaderStyles>
      <div>
        <DataUser stateConfig={stateConfig} />
      </div>
    </ContentHeaderStyles>
  )
}

export default Header

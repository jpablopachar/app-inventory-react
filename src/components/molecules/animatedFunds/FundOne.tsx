import { FundOneContainer } from './FundOneStyles'

import { iconsAndVars } from '@/styles'

/**
 * Componente funcional de React que representa un fondo animado con círculos y un logo.
 *
 * Este componente renderiza una estructura visual compuesta por una lista de elementos circulares
 * y un logo en la primera posición. Es ideal para usarse como fondo decorativo en la aplicación.
 *
 * @component
 *
 * @returns {JSX.Element} Un contenedor con animaciones de círculos y el logo de la aplicación.
 */
const FundOne: React.FC = () => {
  return (
    <FundOneContainer>
      <div className="area">
        <ul className="circles">
          <li className="logo">
            <img src={iconsAndVars.logo} />
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </FundOneContainer>
  )
}

export default FundOne

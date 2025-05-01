import { JSX } from 'react'

import { BtnFilterContainer } from './BtnFilterStyles'

/**
 * Propiedades para el componente BtnFilter.
 *
 * @property {string} textColor - Color del texto del botón.
 * @property {JSX.Element} icon - Icono que se mostrará en el botón.
 * @property {() => void} task - Función que se ejecutará al hacer clic en el botón.
 */
interface BtnFilterProps {
  textColor: string
  icon: JSX.Element
  task: () => void
}

/**
 * Componente de botón de filtro.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.textColor - Color del texto del botón.
 * @param {React.ReactNode} props.icon - Icono que se muestra dentro del botón.
 * @param {() => void} props.task - Función que se ejecuta al hacer clic en el botón.
 *
 * @returns {JSX.Element} Elemento JSX que representa el botón de filtro.
 */
const BtnFilter: React.FC<BtnFilterProps> = ({ textColor, icon, task }) => {
  return (
    <BtnFilterContainer $textColor={textColor} onClick={task}>
      <div className="contentIcon">
        <span>{icon}</span>
      </div>
    </BtnFilterContainer>
  )
}

export default BtnFilter

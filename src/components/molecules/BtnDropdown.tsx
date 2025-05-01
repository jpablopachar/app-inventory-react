import { BtnDropdownContainer } from './BtnDropdownStyles'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente BtnDropdown.
 *
 * @property {string} text - Texto que se mostrará en el botón.
 * @property {string} bgColor - Color de fondo del botón.
 * @property {string} textColor - Color del texto del botón.
 * @property {() => void} task - Función que se ejecutará al hacer clic en el botón.
 */
interface BtnDropdownProps {
  text: string
  bgColor: string
  textColor: string
  task: () => void
}

/**
 * Componente de botón desplegable reutilizable.
 *
 * @component
 * @param {BtnDropdownProps} props - Propiedades del componente.
 * @param {string} props.text - Texto que se muestra en el botón.
 * @param {string} props.bgColor - Color de fondo del botón.
 * @param {string} props.textColor - Color del texto del botón.
 * @param {() => void} props.task - Función que se ejecuta al hacer clic en el botón.
 *
 * @returns {JSX.Element} Elemento JSX que representa el botón desplegable.
 */
const BtnDropdown: React.FC<BtnDropdownProps> = ({
  text,
  bgColor,
  textColor,
  task,
}) => {
  return (
    <BtnDropdownContainer
      $bgColor={bgColor}
      $textColor={textColor}
      onClick={task}
    >
      <span className="containerText">
        {<iconsAndVars.downArrowIcon />}
        <h6>{text}</h6>
      </span>
    </BtnDropdownContainer>
  )
}

export default BtnDropdown

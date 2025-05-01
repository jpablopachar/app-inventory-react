import { SelectorContainer } from './SelectorStyles'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente Selector.
 *
 * @property {string} color - Color de borde y sombra del selector
 * @property {boolean} state - Estado del selector (abierto o cerrado)
 * @property {() => void} task - Función a ejecutar al hacer clic en el selector
 * @property {string} text1 - Texto principal del selector
 * @property {string} text2 - Texto secundario del selector
 */
interface SelectorProps {
  color: string
  state: boolean
  task: () => void
  text1: string
  text2: string
}

/**
 * Componente que renderiza un selector interactivo con estado abierto/cerrado.
 *
 * Este componente muestra un selector con dos textos y un ícono que cambia según el estado.
 * Al hacer clic, ejecuta la función proporcionada y permite cambiar visualmente entre estados.
 *
 * @component
 * @param {SelectorProps} props - Propiedades del componente
 * @param {string} props.color - Color para el borde y sombra del selector
 * @param {boolean} props.state - Estado actual del selector (true: abierto, false: cerrado)
 * @param {() => void} props.task - Función a ejecutar cuando se hace clic
 * @param {string} props.text1 - Texto principal mostrado en el selector
 * @param {string} props.text2 - Texto secundario mostrado en el selector
 *
 * @returns {JSX.Element} Componente de selector interactivo
 */
const Selector: React.FC<SelectorProps> = ({
  color,
  state,
  task,
  text1,
  text2,
}) => {
  return (
    <SelectorContainer color={color} onClick={task}>
      <div>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <span className={state ? 'open' : 'close'}>
        {<iconsAndVars.downArrowIcon />}
      </span>
    </SelectorContainer>
  )
}

export default Selector

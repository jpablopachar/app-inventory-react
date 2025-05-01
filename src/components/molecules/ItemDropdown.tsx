import { JSX } from 'react'

import { ItemDropdownContainer } from './ItemDropdownStyles'

import { ColorContentStyles, IconStyles } from '../atoms'

/**
 * Propiedades para el componente ItemDropdown.
 *
 * @property {Object} item - Objeto que representa el ítem a mostrar en el dropdown.
 * @property {JSX.Element} item.icono - Icono que se mostrará junto al texto del ítem.
 * @property {string} item.color - Color asociado al ítem, utilizado para estilos visuales.
 * @property {string} item.text - Texto descriptivo del ítem.
 * @property {() => void} task - Función que se ejecuta al seleccionar el ítem.
 */
interface ItemDropdownProps {
  item: {
    icono: JSX.Element
    color: string
    text: string
  }
  task: () => void
}

/**
 * Componente desplegable para mostrar un ítem con icono, color y texto.
 *
 * @component
 * @param {ItemDropdownProps} props - Propiedades del componente.
 * @param {object} props.item - Objeto que contiene la información del ítem a mostrar.
 * @param {React.MouseEventHandler} props.task - Función que se
 * ejecuta al hacer clic en el contenedor.
 *
 * @returns {JSX.Element} Elemento JSX que representa el ítem en el menú desplegable.
 */
const ItemDropdown: React.FC<ItemDropdownProps> = ({ item, task }) => {
  return (
    <ItemDropdownContainer onClick={task}>
      <IconStyles>{item.icono}</IconStyles>
      <ColorContentStyles $ancho="12px" $alto="12px" $color={item.color} />
      <span>{item.text}</span>
    </ItemDropdownContainer>
  )
}

export default ItemDropdown

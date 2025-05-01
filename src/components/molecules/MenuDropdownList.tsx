/* eslint-disable @typescript-eslint/no-explicit-any */

import ItemDropdown from './ItemDropdown'
import { MenuDropdownListContainer } from './MenuDropdownListStyles'

/**
 * Propiedades para el componente MenuDropdownList.
 *
 * @property {any[]} data - Arreglo de elementos que se mostrarán en el menú desplegable.
 * @property {string} top - Valor CSS para posicionar el menú desde la parte superior.
 * @property {(item: any) => void} task - Función que se ejecuta
 * al seleccionar un elemento del menú.
 */
interface MenuDropdownListProps {
  data: any[]
  top: string
  task: (item: any) => void
}

/**
 * Componente de lista desplegable de menú.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Array<any>} props.data - Arreglo de elementos a mostrar en la lista desplegable.
 * @param {number} props.top - Posición superior (en píxeles o
 * unidades CSS) para posicionar el contenedor de la lista.
 * @param {(item: any) => void} props.task - Función que se
 * ejecuta al seleccionar un elemento de la lista, recibiendo el
 * elemento seleccionado como argumento.
 *
 * @returns {JSX.Element} Un contenedor con los elementos de la lista desplegable.
 */
const MenuDropdownList: React.FC<MenuDropdownListProps> = ({
  data,
  top,
  task,
}) => {
  return (
    <MenuDropdownListContainer top={top}>
      {data.map((item, index) => {
        return <ItemDropdown key={index} item={item} task={() => task(item)} />
      })}
    </MenuDropdownListContainer>
  )
}

export default MenuDropdownList

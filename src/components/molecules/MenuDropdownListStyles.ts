import styled from 'styled-components'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para los estilos del componente MenuDropdownList.
 *
 * @property top - Posición desde la parte superior donde se ubicará el menú desplegable.
 */
interface MenuDropdownListStylesProps {
  top: string
  theme: {
    bg3: string
  }
}

/**
 * Contenedor estilizado para el menú desplegable.
 *
 * Este componente utiliza estilos personalizados con styled-components para crear
 * un menú desplegable con posición absoluta. El menú tiene un fondo personalizado,
 * bordes redondeados y sombra. La posición vertical se puede ajustar mediante la
 * propiedad `top`.
 *
 * @component
 * @param {MenuDropdownListStylesProps} props - Propiedades para personalizar el estilo del menú.
 * @param {string} props.top - Posición desde la parte superior donde se mostrará el menú.
 */
export const MenuDropdownListContainer = styled.div<MenuDropdownListStylesProps>`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.top};
  box-shadow: ${() => iconsAndVars.boxShadowGray};
  z-index: 1;
`

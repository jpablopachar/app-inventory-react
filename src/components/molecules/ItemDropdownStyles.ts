import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente ItemDropdown.
 *
 * @property theme - Objeto que contiene las propiedades del tema.
 * @property theme.bg4 - Color de fondo cuando el elemento está en hover.
 */
interface ItemDropdownStylesProps {
  theme: {
    bg4: string
  }
}

/**
 * Contenedor estilizado para un elemento desplegable.
 *
 * Este componente utiliza estilos personalizados con styled-components para crear
 * un elemento interactivo con cursor pointer y efecto hover. Incluye estilos específicos
 * para los iconos SVG contenidos dentro del elemento.
 *
 * @component
 * @param {ItemDropdownStylesProps} props - Propiedades de tema para personalizar los estilos.
 */
export const ItemDropdownContainer = styled.div<ItemDropdownStylesProps>`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    font-size: 28px;
    display: block;
  }
`

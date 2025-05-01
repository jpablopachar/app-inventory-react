import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente BtnDropdown.
 *
 * @property $bgColor - Color de fondo del botón.
 * @property $textColor - Color del texto del botón.
 */
interface BtnDropdownStylesProps {
  $bgColor: string
  $textColor: string
}

/**
 * Contenedor estilizado para un botón desplegable.
 *
 * Este componente utiliza estilos personalizados con styled-components,
 * permitiendo modificar el color de fondo y el color del texto
 * mediante las props `$bgColor` y `$textColor`.
 * Presenta un diseño flexible, con bordes redondeados y transición suave al pasar el cursor.
 * Incluye una clase interna `.containerText` para alinear y espaciar el contenido del botón.
 *
 * @component
 * @param {BtnDropdownStylesProps} props - Propiedades para personalizar los estilos del botón.
 */
export const BtnDropdownContainer = styled.div<BtnDropdownStylesProps>`
  display: flex;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-weight: 500;
  font-size: 23px;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: #fff;
  }
`

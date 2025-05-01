import styled from 'styled-components'

/**
 * Propiedades para los estilos de iconos.
 *
 * @property theme - Objeto que contiene las propiedades de tema para los iconos.
 * @property theme.text - Color del texto que se aplicará al icono.
 */
interface IconStylesProps {
  theme: {
    text: string
  }
}

/**
 * Componente estilizado que representa un ícono utilizando un elemento `<span>`.
 *
 * @remarks
 * Este componente aplica estilos personalizados al ícono,
 * incluyendo el color basado en el tema actual (`props.theme.text`)
 * y un tamaño de fuente fijo de 20px.
 *
 * @typeParam IconStylesProps - Propiedades que definen los estilos personalizados del ícono.
 */
export const IconStyles = styled.span<IconStylesProps>`
  color: ${(props) => props.theme.text};
  font-size: 20px;
`

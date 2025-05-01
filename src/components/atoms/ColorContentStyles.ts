import styled from 'styled-components'

/**
 * Propiedades para el componente de contenido de color.
 *
 * @property $alto - Altura del componente, expresada como cadena (por ejemplo, '100px', '2rem').
 * @property $ancho - Ancho del componente, expresado como cadena (por ejemplo, '100px', '50%').
 * @property $color - Color de fondo o principal del componente,
 * especificado como cadena (por ejemplo, '#fff', 'red').
 */
interface ColorContentProps {
  $alto: string
  $ancho: string
  $color: string
}

/**
 * Componente estilizado que representa un contenedor circular con color de fondo personalizado.
 *
 * @remarks
 * Utiliza propiedades personalizadas para definir el alto, ancho y color de fondo.
 * El contenido se centra horizontalmente y el texto se alinea al centro.
 *
 * @param $alto - Altura mínima del contenedor.
 * @param $ancho - Ancho del contenedor.
 * @param $color - Color de fondo del contenedor.
 */
export const ColorContentStyles = styled.div<ColorContentProps>`
  justify-content: center;
  min-height: ${(props) => props.$alto};
  width: ${(props) => props.$ancho};
  display: block;
  background-color: ${(props) => props.$color};
  border-radius: 50%;
  text-align: center;
`

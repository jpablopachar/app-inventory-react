import styled from 'styled-components'

/**
 * Propiedades para definir el estilo de una figura (Shape).
 *
 * @property $bgColor - Color de fondo de la figura.
 * @property [$top] - Posición superior opcional de la figura.
 * @property [$left] - Posición izquierda opcional de la figura.
 * @property [$bottom] - Posición inferior opcional de la figura.
 * @property [$right] - Posición derecha opcional de la figura.
 */
interface ShapeProps {
  $bgColor: string
  $top?: string
  $left?: string
  $bottom?: string
  $right?: string
}

/**
 * Componente estilizado que representa una figura circular pequeña con desenfoque.
 *
 * @remarks
 * Utiliza `styled.div` para crear un div absolutamente posicionado, con color de fondo,
 * radio de borde para hacerlo circular y un filtro de desenfoque. Permite personalizar
 * el color de fondo y la posición (top, left, bottom, right) mediante props.
 *
 * @param props.$bgColor - Color de fondo de la figura.
 * @param props.$top - Posición superior opcional.
 * @param props.$left - Posición izquierda opcional.
 * @param props.$bottom - Posición inferior opcional.
 * @param props.$right - Posición derecha opcional.
 */
export const ShapeSmallStyles = styled.div<ShapeProps>`
  position: absolute;
  background-color: ${(props) => props.$bgColor};
  border-radius: 50%;
  filter: blur(96px);
  z-index: 0;
  width: 150px;
  height: 150px;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  bottom: ${(props) => props.$bottom};
  right: ${(props) => props.$right};
`

/**
 * Componente estilizado que representa una figura circular grande con desenfoque.
 *
 * @remarks
 * Utiliza `styled.div` para crear un div absolutamente posicionado, con color de fondo,
 * radio de borde circular y un filtro de desenfoque. Permite personalizar la posición
 * (top, left, bottom, right) y el color de fondo mediante props.
 *
 * @param props.$bgColor - Color de fondo de la figura.
 * @param props.$top - Valor CSS para la propiedad `top`.
 * @param props.$left - Valor CSS para la propiedad `left`.
 * @param props.$bottom - Valor CSS para la propiedad `bottom`.
 * @param props.$right - Valor CSS para la propiedad `right`.
 */
export const ShapeBigStyles = styled.div<ShapeProps>`
  position: absolute;
  background-color: ${(props) => props.$bgColor};
  border-radius: 50%;
  filter: blur(96px);
  z-index: 0;
  width: 250px;
  height: 250px;
  opacity: 0.8;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  bottom: ${(props) => props.$bottom};
  right: ${(props) => props.$right};
`

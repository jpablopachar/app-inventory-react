import styled from 'styled-components'

import { iconsAndVars } from '@/styles'

/**
 * Estilos para el contenedor del botón de cierre.
 * 
 * Este componente estilizado utiliza un elemento `span` con un cursor tipo puntero,
 * un tamaño de fuente de 25px y una transición suave de 0.2 segundos para todos los cambios.
 * Al pasar el mouse sobre el elemento, el color cambia utilizando la variable `selectorColor`
 * definida en `iconsAndVars`.
 */
export const ContainerStyles = styled.span`
  cursor: pointer;
  font-size: 25px;
  transition: all 0.2s;
  &:hover {
    color: ${() => iconsAndVars.selectorColor};
  }
`

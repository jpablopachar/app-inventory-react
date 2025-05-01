import styled from 'styled-components'

import { Device } from '../styles/breakpoints'

/**
 * Propiedades para el contenedor de diseño.
 *
 * @property theme - Objeto que contiene los estilos de tema para el contenedor.
 * @property theme.bgTotal - Color de fondo total del contenedor.
 */
interface LayoutStylesProps {
  theme: {
    bgTotal: string
  }
}

/**
 * Contenedor principal del layout de la aplicación, estilizado con styled-components.
 *
 * - Utiliza un grid con una sola columna por defecto.
 * - Cambia la cantidad de columnas y el ancho de la barra lateral en dispositivos tipo tablet.
 * - Aplica un fondo dinámico basado en el tema actual (`theme.bgTotal`).
 * - Incluye transiciones suaves para los cambios de estilo.
 * - Controla la visibilidad de los elementos `.ContentSidebar` y
 * `.ContentMenuHamburger` según el tamaño de pantalla.
 *
 * @param {LayoutStylesProps} props - Propiedades específicas para el contenedor.
 */
export const LayoutContainer = styled.div<LayoutStylesProps>`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgTotal};
  transition: all 0.2s ease-in-out;

  .ContentSidebar {
    display: none;
  }

  .ContentMenuHamburger {
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;

    &.active {
      grid-template-columns: 220px 1fr;
    }

    .ContentSidebar {
      display: initial;
    }

    .ContentMenuHamburger {
      display: none;
    }
  }
`

/**
 * Contenedor estilizado para el cuerpo principal del layout.
 *
 * @remarks
 * Define el área donde se renderiza el contenido principal de la aplicación,
 * ajustándose automáticamente según el estado del sidebar.
 */
export const LayoutContainerBody = styled.div`
  grid-column: 1;
  width: 100%;

  @media ${Device.tablet} {
    grid-column: 2;
  }
`

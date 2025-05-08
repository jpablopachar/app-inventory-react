import styled from 'styled-components'

/**
 * Propiedades para el contenedor de la tarjeta de la barra lateral.
 *
 * @property theme Un objeto opcional que define los colores de fondo utilizados en el componente.
 * @property theme.bg5 Color de fondo principal para el contenedor.
 * @property theme.whiteBg Color de fondo alternativo (blanco) para el contenedor.
 */
interface SidebarCardContainerProps {
  theme?: {
    bg5: string
    whiteBg: string
  }
}

export const SidebarCardContainer = styled.div<SidebarCardContainerProps>`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;

  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }

  .cardContent {
    position: relative;
    padding: 1rem;
    background: ${(props) => props.theme.bg5};
    border-radius: 10px;
    overflow: hidden;

    .circle1,
    .circle2 {
      position: absolute;
      background: ${(props) => props.theme.whiteBg};
      border-radius: 50%;
      opacity: 0.7;
    }

    .circle1 {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }

    .circle2 {
      height: 130px;
      width: 130px;
      bottom: -80px;
      right: -70px;
    }

    h3 {
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: #000;
    }

    .contentBtn {
      position: relative;
      margin-left: -8px;
    }
  }
`

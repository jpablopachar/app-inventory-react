import styled from 'styled-components'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente SidebarContainer.
 *
 * @property $isOpen Indica si el sidebar está abierto. Se espera un valor de tipo string.
 * @property theme Objeto que contiene los colores y estilos del tema.
 * @property theme.text Color del texto.
 * @property theme.bg Color de fondo principal.
 * @property theme.bgAlpha Color de fondo con transparencia.
 * @property theme.bg5 Color de fondo alternativo 5.
 * @property theme.bg4 Color de fondo alternativo 4.
 * @property theme.colorScroll Color de la barra de desplazamiento.
 * @property theme.logoRotate Valor de rotación para el logo.
 * @property smSpacing Espaciado pequeño utilizado en el sidebar.
 */
interface SidebarContainerProps {
  $isOpen: string
  theme?: {
    text: string
    bg: string
    bgAlpha: string
    bg5: string
    bg4: string
    colorScroll: string
    logoRotate: string
  }
  smSpacing?: string
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }

  &.active {
    width: 220px;
  }

  .logoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;

    .imgContent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ $isOpen }) =>
          $isOpen === 'true' ? `scale(0.7)` : `scale(1.5)`}
        rotate(${({ theme }) => theme.logoRotate});

      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }

    h2 {
      display: ${({ $isOpen }) => ($isOpen === 'true' ? `block` : `none`)};
    }

    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }

  .linkContainer {
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    padding: 0 5%;
    position: relative;

    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }

    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => iconsAndVars.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;

      .linkIcon {
        padding: ${() => iconsAndVars.smSpacing} ${() => iconsAndVars.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }

      .label_ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
      }

      .label_oculto {
        opacity: 0;
      }

      &.active {
        color: ${(props) => props.theme.bg5};
        font-weight: 600;

        &::before {
          content: '';
          position: absolute;
          height: 100%;
          background: ${(props) => props.theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }

    &.active {
      padding: 0;
    }
  }
`

/**
 * Propiedades para el componente principal de la barra lateral (Sidebar).
 *
 * @property $isOpen Indica si la barra lateral está abierta. Se espera un valor de tipo string.
 * @property theme Objeto que contiene los colores del tema utilizados en la barra lateral.
 * @property theme.bgLeft Color de fondo para la sección izquierda de la barra lateral.
 * @property theme.bg3 Color de fondo terciario utilizado en la barra lateral.
 * @property theme.bg Color de fondo principal de la barra lateral.
 * @property theme.text Color del texto mostrado en la barra lateral.
 */
interface SidebarMainProps {
  $isOpen: string
  theme: {
    bgLeft: string
    bg3: string
    bg: string
    text: string
  }
}

export const SidebarMain = styled.div<SidebarMainProps>`
  .sidebarButton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgLeft};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    transform: ${({ $isOpen }) =>
      $isOpen === 'true' ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`

/**
 * Propiedades para el componente SidebarDivider.
 *
 * @property theme - Objeto que contiene los estilos de tema para el divisor de la barra lateral.
 * @property theme.bg4 - Color de fondo utilizado para el divisor.
 */
interface SidebarDividerProps {
  theme: {
    bg4: string
  }
}

export const SidebarDivider = styled.div<SidebarDividerProps>`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => iconsAndVars.lgSpacing} 0;
`

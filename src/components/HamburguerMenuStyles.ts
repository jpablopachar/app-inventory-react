import styled from 'styled-components'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente HamburguerMenuContainer.
 *
 * @property theme - Objeto que contiene la configuración del tema actual.
 * @property theme.body - Color o estilo de fondo del cuerpo de la aplicación.
 */
interface HamburguerMenuContainerProps {
  theme: {
    body: string
  }
}

export const HamburguerMenuContainer = styled.div<HamburguerMenuContainerProps>`
  background-color: ${(props) => props.theme.body};
  cursor: pointer;
`

export const HamburguerMenuNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`

/**
 * Propiedades para los estilos del menú hamburguesa.
 *
 * @property $click Indica el estado de clic del menú hamburguesa.
 * Puede ser un valor que represente si el menú está abierto o cerrado.
 */
interface HamburgerMenuStyleProps {
  $click: string
}

export const HamburgerMenuStyle = styled.div<HamburgerMenuStyleProps>`
  width: ${(props) => (props.$click == 'true' ? '4rem' : '3.5rem')};
  height: ${(props) => (props.$click == 'true' ? '2px' : '5px')};
  border-radius: 3px;
  z-index: 101;
  position: fixed;
  top: 3rem;
  left: 10px;
  transform: ${(props) =>
    props.$click == 'true' ? 'translateX(80vw)' : ' translateX(0)'};
  display: none;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }

  .contentLogo {
    margin-left: 12px;
    width: 100%;

    img {
      width: 100%;
    }
  }

  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition-duration: 0.5s;
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: rgb(247, 244, 249);
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: 0.8s;
  }

  #bar1,
  #bar3 {
    width: 70%;
  }

  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: 0.5s;
    transform: rotate(180deg);
  }
`

/**
 * Propiedades para las opciones del menú hamburguesa.
 *
 * @property $click - Estado de clic del menú, representado como una cadena.
 * @property theme - Objeto que contiene los colores y estilos del tema actual.
 * @property theme.bodyRgba - Color de fondo principal en formato RGBA.
 * @property theme.bgAlpha - Valor alfa para el fondo.
 * @property theme.text - Color del texto.
 * @property theme.bg5 - Color de fondo alternativo 5.
 * @property theme.bg4 - Color de fondo alternativo 4.
 */
interface HamburguerMenuOptionsProps {
  $click: string
  theme: {
    bodyRgba: string
    bgAlpha: string
    text: string
    bg5: string
    bg4: string
  }
}

export const HamburguerMenuOptions = styled.div<HamburguerMenuOptionsProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  z-index: 100;
  @media (max-width: 64em) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(3px);
    transform: ${(props) =>
      props.$click == 'true' ? 'translateY(0)' : 'translateY(1000%)'};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
  }

  .linkContainer {
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }

    .links {
      width: 100vw;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${(props) => props.theme.text};
      height: 80px;

      .linkIcon {
        padding: ${iconsAndVars.smSpacing} ${iconsAndVars.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }

      &.active {
        &::before {
          position: relative;
          content: '';
          height: 100%;
          left: 0;
          width: 4px;
          bottom: 0;
          border-radius: 10px;
          background: ${(props) => props.theme.bg5};
          transition: 0.3s ease;
        }

        .linkIcon {
          color: ${(props) => props.theme.bg5};
        }
      }
    }
  }
`

/**
 * Propiedades para el componente divisor del menú hamburguesa.
 *
 * @property theme Objeto que contiene los estilos de tema.
 * @property theme.bg4 Color de fondo utilizado para el divisor.
 */
interface HamburgerMenuDividerProps {
  theme: {
    bg4: string
  }
}

export const HamburguerMenuDivider = styled.div<HamburgerMenuDividerProps>`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${iconsAndVars.lgSpacing} 0;
`

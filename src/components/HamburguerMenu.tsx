import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import {
  HamburgerMenuStyle,
  HamburguerMenuContainer,
  HamburguerMenuDivider,
  HamburguerMenuNavBar,
  HamburguerMenuOptions,
} from './HamburguerMenuStyles'

import { SecondaryLinksArray, SidebarData } from '@/utils'

/**
 * Componente `HamburguerMenu`.
 *
 * Renderiza un menú tipo hamburguesa que permite mostrar y ocultar opciones de navegación.
 * Utiliza un estado interno para controlar la visibilidad del menú.
 * 
 * Al hacer clic en el icono de hamburguesa, se alterna la
 * visualización de las opciones de navegación. Las opciones
 * principales y secundarias se generan dinámicamente a partir de
 * los arrays `SidebarData` y `SecondaryLinksArray`.
 * Cada opción es un enlace de navegación (`NavLink`) que, al ser
 * seleccionada, también cierra el menú.
 *
 * @component
 *
 * @returns {JSX.Element} El menú hamburguesa con las opciones de navegación.
 */
const HamburguerMenu: React.FC = () => {
  const [click, setClick] = useState(false)

  return (
    <HamburguerMenuContainer>
      <HamburguerMenuNavBar>
        <HamburgerMenuStyle
          $click={click.toString()}
          onClick={() => setClick(!click)}
        >
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </HamburgerMenuStyle>
        <HamburguerMenuOptions $click={click.toString()}>
          {SidebarData.map(({ icon, label, to }) => (
            <div
              key={label}
              className="LinkContainer"
              onClick={() => setClick(!click)}
            >
              <NavLink to={to} className="Links">
                <div className="linkIcon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <HamburguerMenuDivider />
          {SecondaryLinksArray.map(({ icon, label, to }) => (
            <div
              key={label}
              className="LinkContainer"
              onClick={() => setClick(!click)}
            >
              <NavLink to={to} className="Links">
                <div className="linkIcon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
        </HamburguerMenuOptions>
      </HamburguerMenuNavBar>
    </HamburguerMenuContainer>
  )
}

export default HamburguerMenu

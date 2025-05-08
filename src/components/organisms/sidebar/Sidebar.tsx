import { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'

import SidebarCard from './SidebarCard'
import { SidebarContainer, SidebarDivider, SidebarMain } from './SidebarStyles'

import ToggleTheme from '@/components/ToggleTheme'
import { iconsAndVars } from '@/styles'
import { SecondaryLinksArray, SidebarData } from '@/utils'

interface SidebarProps {
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ state, setState }) => {
  return (
    <SidebarMain $isOpen={state.toString()}>
      <span className="sidebarButton" onClick={() => setState(!state)}>
        {<iconsAndVars.rightArrowIcon />}
      </span>
      <SidebarContainer
        $isOpen={state.toString()}
        className={state ? 'active' : ''}
      >
        <div className="logoContent">
          <div className="imgContent">
            <img src={iconsAndVars.logo} />
          </div>
          <h2>StockPRO</h2>
        </div>
        {SidebarData.map(({ icon, label, to }) => (
          <div
            className={state ? 'linkContainer active' : 'linkContainer'}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `links${isActive ? ` active` : ``}`}
            >
              <div className="linkIcon">{icon}</div>
              <span className={state ? 'label_ver' : 'label_oculto'}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}
        <SidebarDivider />
        {SecondaryLinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? 'linkContainer active' : 'linkContainer'}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `links${isActive ? ` active` : ``}`}
            >
              <div className="linkIcon">{icon}</div>
              <span className={state ? 'label_ver' : 'label_oculto'}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}
        <ToggleTheme />
        <SidebarDivider />
        {state && <SidebarCard />}
      </SidebarContainer>
    </SidebarMain>
  )
}

export default Sidebar

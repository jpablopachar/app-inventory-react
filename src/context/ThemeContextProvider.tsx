import { ReactElement, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { ThemeContext } from './ThemeContext'

import { Dark, Light } from '../styles'

/**
 * Propiedades para el componente ThemeContextProvider.
 *
 * @remarks
 * Esta interfaz define las propiedades que debe recibir el proveedor de contexto de tema.
 *
 * @property {ReactNode} children - Elementos secundarios que
 * serán envueltos por el proveedor de contexto.
 */
interface ThemeContextProviderProps {
  children: ReactNode;
}

/**
 * Proveedor del contexto de tema que permite cambiar entre temas claro y oscuro
 * 
 * @param {ReactNode} children - Componentes hijos que tendrán acceso al contexto
 * @returns {ReactElement} Proveedor de contexto de tema
 */
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps): ReactElement => {
  const [themeUse, setThemeUse] = useState('dark')

  const theme = themeUse === 'light' ? 'light' : 'dark'
  const themeStyle = theme === 'light' ? Light : Dark

  return (
    <ThemeContext.Provider value={{ theme, setThemeUse }}>
      <ThemeProvider theme={themeStyle}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

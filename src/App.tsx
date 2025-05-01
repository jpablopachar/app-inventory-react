import { createContext, ReactElement, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { AuthContextProvider } from './context'
import { Dark, Light } from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeContext = createContext<{ theme: string; setThemeUse: any } | null>(
  null,
)

function App(): ReactElement {
  const [themeUse, setThemeUse] = useState('dark')

  const theme = themeUse === 'light' ? 'light' : 'dark'
  const themeStyle = theme === 'light' ? Light : Dark

  return (
    <>
      <ThemeContext.Provider value={{ theme, setThemeUse }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <>Hola mundo!</>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App

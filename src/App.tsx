import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactElement } from 'react'

import { AuthContextProvider, ThemeContextProvider } from './context'
import { RoutesApp } from './routes'

function App(): ReactElement {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <RoutesApp />
          <ReactQueryDevtools initialIsOpen />
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App

import styled from 'styled-components'

import { ConfigurationTemplate } from '@/components'

/**
 * Contenedor principal para la página de configuración.
 *
 * Este componente utiliza un elemento `<main>` estilizado que ocupa
 * el 100% de la altura de la ventana del navegador (`100vh`).
 *
 * @remarks
 * Utiliza styled-components para aplicar estilos CSS en línea.
 */
const ConfigurationContainer = styled.main`
  height: 100vh;
`

/**
 * Componente de configuración principal de la aplicación.
 *
 * Este componente envuelve el contenido de configuración dentro de un contenedor estilizado
 * y renderiza la plantilla de configuración.
 *
 * @component
 * @returns {JSX.Element} El contenedor de configuración con la plantilla correspondiente.
 */
const Configuration: React.FC = () => {
  return (
    <ConfigurationContainer>
      <ConfigurationTemplate />
    </ConfigurationContainer>
  )
}

export default Configuration

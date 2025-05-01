import styled from 'styled-components'

/**
 * Propiedades para los estilos del template de inicio.
 *
 * @property {any} theme - Propiedades del tema que utiliza el componente
 * @property {string} theme.bgTotal - Color de fondo para el contenedor principal
 * @property {string} theme.text - Color del texto para el contenedor principal
 */
interface HomeTemplateStylesProps {
  theme: {
    bgTotal: string
    text: string
  }
}

/**
 * Contenedor principal para el template de inicio.
 *
 * Este componente estilizado establece el layout principal para la página
 * de inicio, ocupando toda la altura de la ventana y centrando su contenido.
 */
export const MainHomeTemplate = styled.main<HomeTemplateStylesProps>`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgTotal};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-size: 26px;
`

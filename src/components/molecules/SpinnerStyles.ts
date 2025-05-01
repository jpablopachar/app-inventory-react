import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente Spinner.
 *
 * @property theme - Objeto que contiene las propiedades del tema.
 * @property theme.bg - Color de fondo del spinner.
 */
interface SpinnerStylesProps {
  theme: {
    bg: string
  }
}

/**
 * Contenedor estilizado para el componente Spinner.
 *
 * Este componente utiliza estilos personalizados para crear un spinner
 * de carga a pantalla completa, con posición absoluta superpuesta sobre
 * el contenido. Aplica color de tema para el fondo y mantiene un color
 * específico para el indicador de carga.
 *
 * @component
 * @param {SpinnerStylesProps} props - Propiedades de tema para personalizar el spinner.
 */
export const SpinnerContainer = styled.div<SpinnerStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.bg};
  transform: all 0.3s;
  color: #6df643;
`

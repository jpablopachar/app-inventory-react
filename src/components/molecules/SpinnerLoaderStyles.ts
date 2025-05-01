import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente SpinnerLoader.
 *
 * @property theme - Objeto que contiene las propiedades del tema.
 * @property theme.bgTotal - Color de fondo para el contenedor del spinner.
 */
interface SpinnerLoaderStylesProps {
  theme: {
    bgTotal: string
  }
}

/**
 * Contenedor estilizado para el componente SpinnerLoader.
 *
 * Este componente utiliza estilos personalizados para crear un indicador
 * de carga a pantalla completa con posición absoluta. Se superpone a todo
 * el contenido con un alto índice z y utiliza el color de fondo del tema.
 *
 * @component
 * @param {SpinnerLoaderStylesProps} props - Propiedades de tema para personalizar el loader.
 */
export const SpinnerLoaderContainer = styled.div<SpinnerLoaderStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.bgTotal};
  transform: all 0.3s;
`

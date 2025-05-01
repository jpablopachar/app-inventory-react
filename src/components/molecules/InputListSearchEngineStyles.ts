import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente InputListSearchEngine.
 *
 * @property theme - Objeto que contiene los colores principales del tema.
 * @property theme.body - Color de fondo principal del cuerpo.
 * @property theme.text - Color principal del texto.
 */
interface InputListSearchEngineStylesProps {
  theme: {
    body: string
    text: string
  }
}

/**
 * Contenedor estilizado para el componente de búsqueda de lista de entrada.
 *
 * Este componente utiliza estilos personalizados para el elemento `input`,
 * incluyendo fondo, tamaño de fuente, relleno, ancho, color y estilos de borde.
 * Además, define estilos específicos para el estado de enfoque (`:focus`)
 * y para el placeholder del input.
 *
 * @component
 * @param {InputListSearchEngineStylesProps} props - Propiedades de estilos para el contenedor.
 */
export const InputListSearchEngineContainer = styled.div<InputListSearchEngineStylesProps>`
  position: relative;

  input {
    background: ${({ theme }) => theme.body};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: solid 1px grey;
    color: ${({ theme }) => theme.text};
    outline: none;

    &:focus {
      border-bottom: none;
    }

    &::placeholder {
      color: #c8c8c8;
    }
  }
`

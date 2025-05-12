import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente Searcher.
 * 
 * @property theme Objeto que contiene los colores de fondo y texto.
 * @property theme.bg Color de fondo del componente.
 * @property theme.text Color del texto del componente.
 */
interface SearcherStylesProps {
  theme: {
    bg: string
    text: string
  }
}

/**
 * Contenedor estilizado para el componente buscador.
 *
 * Este componente utiliza estilos personalizados para proporcionar una apariencia coherente
 * con el tema de la aplicación. Incluye estilos para el fondo, bordes, alineación y color de texto,
 * así como para los elementos internos como el icono y el campo de entrada.
 *
 * @component
 * @param {SearcherStylesProps} props - Propiedades de estilos que incluyen el tema actual.
 */
export const SearcherContainer = styled.div<SearcherStylesProps>`
  background-color: ${(props) => props.theme.bg};
  border-radius: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.text};
  border: 1px solid #414244;

  .content {
    padding: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    .icon {
      font-size: 18px;
    }

    input {
      font-size: 18px;
      width: 100%;
      outline: none;
      background: none;
      border: 0;
      color: ${(props) => props.theme.text};
    }
  }
`

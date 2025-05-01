import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente ActionsTable.
 *
 * @property {string} color - Color del icono
 * @property {string} fontSize - Tamaño de fuente del icono
 */
interface ActionsTableStylesProps {
  color: string
  fontSize: string
}

/**
 * Contenedor estilizado para el componente ActionsTable.
 *
 * Este componente utiliza estilos personalizados con styled-components para crear
 * un elemento interactivo que muestra un icono o contenido con estilos configurables.
 *
 * @component
 * @param {ActionsTableStylesProps} props - Propiedades para personalizar el estilo
 */
export const ActionsTableContainer = styled.span<ActionsTableStylesProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
`

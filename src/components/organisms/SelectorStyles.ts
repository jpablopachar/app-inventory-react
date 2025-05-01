import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente Selector.
 *
 * @property {string} color - Color utilizado para el borde, sombra y efectos hover
 */
interface SelectorStylesProps {
  color: string
}

/**
 * Contenedor estilizado para el componente Selector.
 *
 * Este componente utiliza estilos personalizados con styled-components para crear
 * un selector interactivo con efectos de transición en hover y cambios de estado
 * para el ícono de flecha.
 *
 * @component
 * @param {SelectorStylesProps} props - Propiedades para personalizar el estilo
 */
export const SelectorContainer = styled.div<SelectorStylesProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  transition: 0.3s;
  font-weight: 600;

  box-shadow: 4px 9px 20px -12px ${(props) => props.color};

  .open {
    transition: 0.3s;
    transform: rotate(0deg);
  }

  .close {
    transition: 0.3s;
    transform: rotate(180deg);
  }

  &:hover {
    background-color: ${(props) => props.color};
    color: #000;
  }
`

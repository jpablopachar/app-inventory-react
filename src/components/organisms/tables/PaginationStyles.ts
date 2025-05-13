import styled from 'styled-components'

/**
 * Propiedades para los estilos de paginación.
 *
 * @property $colorCategory - Categoría de color utilizada para
 * personalizar los estilos de la paginación.
 */
interface PaginationStylesProps {
  $colorCategory: string
}

export const PaginationContainer = styled.div<PaginationStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  button {
    background-color: ${(props) => props.$colorCategory};
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 10px 15px -3px ${(props) => props.$colorCategory};
    }

    .iconoIzquierda {
      transform: rotate(-180deg);
    }

    span {
      color: #fff;
      display: flex;

      svg {
        font-size: 15px;
        font-weight: 800;
      }
    }
  }

  button[disabled] {
    background-color: #646464;
    cursor: no-drop;
    box-shadow: none;
  }
`

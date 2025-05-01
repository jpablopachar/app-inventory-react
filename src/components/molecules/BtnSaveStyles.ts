import styled from 'styled-components'

/**
 * Propiedades para el componente de estilos del botón de guardar.
 *
 * @property $bgColor - Color de fondo que se aplicará al botón.
 */
interface BtnSaveStylesProps {
  $bgColor: string
}

/**
 * Componente estilizado para un botón de guardar utilizando styled-components.
 *
 * Este botón se muestra como un contenedor flexible centrado, sin borde por defecto,
 * y permite personalizar el color de fondo a través de la propiedad `$bgColor`.
 *
 * Dentro del botón, se aplica un estilo adicional a la clase `.btn`, que incluye:
 * - Fondo personalizable.
 * - Padding y tipografía destacada.
 * - Bordes y sombras para dar efecto de profundidad.
 * - Transiciones suaves en hover y active.
 * - Soporte para enlaces internos estilizados.
 *
 * @param {BtnSaveStylesProps} props - Propiedades para personalizar
 * el botón, incluyendo `$bgColor`.
 */
export const BtnSaveContainer = styled.button<BtnSaveStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  gap: 10px;
  background-color: initial;
  z-index: 2;
  .btn {
    background: ${(props) => props.$bgColor};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;
    a {
      text-decoration: none;
      color: #000;
    }
    cursor: pointer;
    &:hover {
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }
    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
  }
`

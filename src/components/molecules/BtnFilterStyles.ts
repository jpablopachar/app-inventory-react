import styled from 'styled-components'

/**
 * Propiedades para el componente de estilos de botón de filtro.
 *
 * @property $textColor - Color del texto que se aplicará al botón de filtro.
 */
interface BtnFilterStylesProps {
  $textColor: string
}

/**
 * Contenedor estilizado para un botón de filtro circular.
 *
 * Este componente utiliza estilos CSS-in-JS con styled-components para crear un botón
 * con un fondo degradado, sombra y un icono centrado. El color del texto se puede personalizar
 * mediante la propiedad `$textColor`. El icono dentro del botón tiene una animación de escala
 * al pasar el cursor sobre él.
 *
 * @component
 * @param {BtnFilterStylesProps} props - Propiedades para personalizar el color del texto.
 */
export const BtnFilterContainer = styled.div<BtnFilterStylesProps>`
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  color: ${(props) => props.$textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: relative;
  cursor: pointer;

  .contentIcon {
    position: absolute;
    top: 25%;
    bottom: 25%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transition: 0.2s;
    &:hover {
      transform: scale(1.3);
    }
  }
`

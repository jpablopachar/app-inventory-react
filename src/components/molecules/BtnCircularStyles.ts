import styled from 'styled-components'

/**
 * Propiedades para los estilos del botón circular.
 *
 * @property $bgColor - Color de fondo del botón.
 * @property width - Ancho del botón.
 * @property height - Alto del botón.
 * @property $translateX - Valor de traslación horizontal (eje X) del botón.
 * @property $translateY - Valor de traslación vertical (eje Y) del botón.
 * @property $fontSize - Tamaño de fuente del texto dentro del botón.
 * @property $textColor - Color del texto del botón.
 */
interface BtnCircularStylesProps {
  $bgColor: string
  width: string
  height: string
  $translateX: string
  $translateY: string
  $fontSize: string
  $textColor: string
}

/**
 * Contenedor estilizado para un botón circular utilizando styled-components.
 *
 * @remarks
 * Este componente aplica estilos para crear un botón circular con fondo, tamaño,
 * posición y colores personalizables mediante props. Utiliza flexbox para centrar
 * su contenido y permite ajustar la posición mediante transformaciones.
 *
 * @param props.$bgColor - Color de fondo del botón.
 * @param props.width - Ancho mínimo del botón.
 * @param props.height - Alto mínimo del botón.
 * @param props.$translateX - Desplazamiento horizontal (transform).
 * @param props.$translateY - Desplazamiento vertical (transform).
 * @param props.$fontSize - Tamaño de fuente del texto interno.
 * @param props.$textColor - Color del texto interno.
 */
export const BtnCircularContainer = styled.div<BtnCircularStylesProps>`
  background: ${(props) => props.$bgColor};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateX(${(props) => props.$translateX})
    translateY(${(props) => props.$translateY});
  span {
    font-size: ${(props) => props.$fontSize};
    text-align: center;
    color: ${(props) => props.$textColor};
  }
`

import styled from 'styled-components'

/**
 * Propiedades para los estilos de los formularios.
 * 
 * @property theme - Objeto que contiene los estilos relacionados con el tema del formulario.
 * @property theme.bgTotal - Color de fondo total utilizado en el tema.
 */
interface FormsStylesProps {
  theme: {
    bgTotal: string
  }
}

/**
 * Contenedor principal para los formularios, diseñado como un modal centrado y superpuesto.
 *
 * @remarks
 * Este styled component utiliza `styled.div` y recibe las
 * propiedades de estilo definidas en `FormsStylesProps`.
 * Cubre toda la pantalla con un fondo semitransparente y centra su
 * contenido tanto vertical como horizontalmente.
 *
 * @property {string} transition - Transición suave para los cambios de estilo.
 * @property {string} position - Fijo para cubrir toda la pantalla.
 * @property {string} background-color - Fondo oscuro semitransparente.
 * @property {string} display - Flex para centrar el contenido.
 * @property {string} width - 100% del viewport.
 * @property {string} min-height - Altura mínima de 100vh.
 * @property {string} z-index - 1000 para asegurar que esté por encima de otros elementos.
 *
 * @css
 * .sub-container - Contenedor interno con fondo, sombra y bordes redondeados.
 * .headers - Encabezado del formulario con título y botón de cierre.
 * .form - Sección del formulario con disposición en columna y separación entre elementos.
 * .colorContainer, .colorPickerContent - Estilos específicos para
 * selectores de color dentro del formulario.
 */
export const FormsContainer = styled.div<FormsStylesProps>`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .sub-container {
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgTotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    z-index: 100;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 20px;
        font-weight: 500;
      }

      span {
        font-size: 20px;
        cursor: pointer;
      }
    }

    .form {
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;

        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
`

/**
 * Contenedor estilizado para los formularios.
 * 
 * Este componente utiliza un `div` con estilos flexibles para alinear sus elementos hijos
 * horizontalmente con un espacio de 10px entre ellos y alineados verticalmente al centro.
 * Además, establece la posición relativa para permitir
 * posicionamiento absoluto de elementos internos si es necesario.
 */
export const FormsStylesContainerSelector = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`

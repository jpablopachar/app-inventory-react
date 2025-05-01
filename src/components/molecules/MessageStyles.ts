import styled from 'styled-components'

/**
 * Contenedor estilizado para el componente de mensaje.
 *
 * Este componente utiliza estilos personalizados para crear un mensaje superpuesto
 * con fondo semitransparente y borde. El mensaje está inicialmente oculto (opacidad 0)
 * y se vuelve visible cuando tiene la clase 'visible' y se pasa el cursor por encima.
 * Incluye estilos específicos para el texto y el icono dentro del mensaje.
 *
 * @remarks
 * - La clase `.texto` define el color del texto del mensaje
 * - La clase `.icono` define el tamaño del icono
 * - El estado `&.visible` controla la visibilidad del mensaje
 *
 * @component
 */
export const MessageContainer = styled.div`
  position: absolute;
  z-index: 10;
  background: rgba(26, 9, 9, 0.9);
  border: 1px solid rgba(248, 42, 45, 0.5);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  gap: 15px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;

  .texto {
    color: #fff;
  }

  &:hover {
    &.visible {
      opacity: 1;
    }
  }

  .icono {
    font-size: 30px;
  }
`
